const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch").default;
const { URLSearchParams } = require("url");
require("dotenv").config();

const {
  TELEGRAM_BOT_TOKEN,
  TELEGRAM_CHAT_ID,
  PORT = 4000,
  ALLOWED_ORIGINS = "http://localhost:5173",
} = process.env;

const telegramEnabled = Boolean(TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID);
const telegramUrl = TELEGRAM_BOT_TOKEN
  ? `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`
  : null;

const allowedOrigins = ALLOWED_ORIGINS.split(",").map((value) => value.trim()).filter(Boolean);

const sendTelegramMessage = async (text) => {
  if (!telegramEnabled || !telegramUrl) {
    throw new Error("Telegram is not configured");
  }

  const params = new URLSearchParams();
  params.append("chat_id", TELEGRAM_CHAT_ID);
  params.append("text", text);
  params.append("parse_mode", "HTML");

  const response = await fetch(telegramUrl, {
    method: "POST",
    body: params,
  });

  const payload = await response.json();

  if (!response.ok || !payload.ok) {
    throw new Error(payload.description || "Telegram request failed");
  }
};

const reportStatus = async (text) => {
  if (!telegramEnabled) {
    console.warn("Telegram bot is not configured, skipping status reporting");
    return;
  }

  try {
    await sendTelegramMessage(text);
  } catch (error) {
    console.error("Failed to report status to Telegram:", error.message);
  }
};

const reportError = async (error, context) => {
  const message = `⚠️ <b>Ошибка</b>\nПричина: ${error.message || error}\nКонтекст: ${context}`;
  try {
    await sendTelegramMessage(message);
  } catch (reportError) {
    console.error("Failed to send error report to Telegram:", reportError.message);
  }
};

const app = express();

app.use(express.json({ limit: "10kb" }));
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes("*") || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Origin not allowed"));
    },
  })
);

const sanitizeString = (value) => (
  typeof value === "string" ? value.trim().replace(/<[^>]+>/g, "") : ""
);

app.post("/api/contact", async (req, res, next) => {
  const name = sanitizeString(req.body.name);
  const contact = sanitizeString(req.body.contact);
  const message = sanitizeString(req.body.message);

  if (!name || !contact || !message) {
    res.status(400).json({ error: "Все поля обязательны" });
    return;
  }

  const telegramMessage = `📬 <b>Новая заявка</b>\n<b>Имя:</b> ${name}\n<b>Контакт:</b> ${contact}\n<b>Проект:</b> ${message}`;

  try {
    await sendTelegramMessage(telegramMessage);
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.error("Contact submission error", err);
  reportError(err, `Route: ${req.method} ${req.originalUrl}`);
  res.status(500).json({
    error: "Не удалось отправить заявку. Попробуйте позже",
  });
});

const server = app.listen(PORT, () => {
  console.log(`Contact backend listening on port ${PORT}`);
  reportStatus(`🚀 <b>Бот отправки заявок запущен</b>\nПорт: ${PORT}`);
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection", reason);
  reportError(reason, "Unhandled Rejection");
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception", error);
  reportError(error, "Uncaught Exception");
  server.close(() => process.exit(1));
});
