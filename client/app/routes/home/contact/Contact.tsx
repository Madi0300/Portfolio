import type { ChangeEvent, FormEvent } from "react";
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle, Mail, Phone, Send } from "lucide-react";
import style from "./Contact.module.scss";
import { useReveal } from "../useReveal";

const DEFAULT_CONTACT_ENDPOINT = "http://localhost:4000/api/contact";
const CONTACT_ENDPOINT =
  import.meta.env.VITE_CONTACT_API_URL ?? DEFAULT_CONTACT_ENDPOINT;
const TELEGRAM_URL = "https://t.me/Mad_Aitbai";
const WHATSAPP_URL = "https://wa.me/77064184529";
const EMAIL_ADDRESS = "madibro999@gmail.com";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { ref, showed } = useReveal<HTMLDivElement>();
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  useEffect(() => {
    let timeout: number | undefined;

    if (formStatus === "success" || formStatus === "error") {
      timeout = window.setTimeout(() => {
        setFormStatus("idle");
        if (formStatus === "error") {
          setFormError("");
        }
      }, 2800);
    }

    return () => {
      if (timeout) {
        window.clearTimeout(timeout);
      }
    };
  }, [formStatus]);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus("sending");
    setFormError("");

    const payload = {
      name: formData.name.trim(),
      contact: formData.contact.trim(),
      message: formData.message.trim(),
    };

    fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        const body = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(body.error ?? "Не удалось отправить сообщение");
        }

        setFormStatus("success");
        setFormData({ name: "", contact: "", message: "" });
        setFormError("");
      })
      .catch((error) => {
        const message =
          error && error.message
            ? error.message
            : "Сервис временно недоступен. Попробуйте снова";
        setFormError(message);
        setFormStatus("error");
      });
  };

  return (
    <section id="contact" className={style.Contact}>
      <div
        ref={ref}
        className={`${style.Contact__container} ${showed ? style.Contact__container_showed : ""}`}
      >
        <div className={style.Contact__header}>
          <h2 className={style.Contact__title}>
            Расскажите о проекте — дам варианты решения и примерный бюджет в течение 24 часов
          </h2>
        </div>

        <div className={style.Contact__grid}>
          <div className={style.Contact__channels}>
            <div>
              <h4 className={style.Contact__question}>Где удобно обсудить?</h4>
              <div className={style.Contact__options}>
                <a
                  className={`${style.Contact__option} ${style.Contact__option_blue}`}
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={style.Contact__optionIcon}>
                    <Send size={18} />
                  </div>
                  <div className={style.Contact__optionText}>
                    <span className={style.Contact__optionTitle}>Telegram</span>
                    <span className={style.Contact__optionHint}>@Mad_Aitbai</span>
                  </div>
                </a>

                <a
                  className={`${style.Contact__option} ${style.Contact__option_green}`}
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={style.Contact__optionIcon}>
                    <Phone size={18} />
                  </div>
                  <div className={style.Contact__optionText}>
                    <span className={style.Contact__optionTitle}>WhatsApp</span>
                    <span className={style.Contact__optionHint}>+77064184529</span>
                  </div>
                </a>

                <a className={style.Contact__option} href={`mailto:${EMAIL_ADDRESS}`}>
                  <div className={style.Contact__optionIcon}>
                    <Mail size={18} />
                  </div>
                  <div className={style.Contact__optionText}>
                    <span className={style.Contact__optionTitle}>Email</span>
                    <span className={style.Contact__optionHint}>{EMAIL_ADDRESS}</span>
                  </div>
                </a>
              </div>
            </div>

            <div className={style.Contact__note}>
              "Не уверены в ТЗ? Напишите «Хочу консультацию» — разберём запрос быстро в переписке и я
              предложу варианты решения."
            </div>
          </div>

          <form className={style.Contact__form} onSubmit={handleSubmit}>
            <label className={style.Contact__label}>
              <span className={style.Contact__labelText}>Как вас зовут</span>
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Иван"
                className={style.Contact__input}
                type="text"
              />
            </label>

            <label className={style.Contact__label}>
              <span className={style.Contact__labelText}>Телефон или Telegram</span>
              <input
                required
                name="contact"
                value={formData.contact}
                onChange={handleInputChange}
                placeholder="+7 777 ... или @username"
                className={style.Contact__input}
                type="text"
              />
            </label>

            <label className={style.Contact__label}>
              <span className={style.Contact__labelText}>О проекте</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={style.Contact__textarea}
                rows={4}
                placeholder="Опишите задачу: что за бизнес, что хотите улучшить, есть ли дизайн..."
              />
            </label>

            <button
              type="submit"
              className={`${style.Contact__submit} ${
                formStatus === "success" ? style.Contact__submit_success : ""
              }`}
              disabled={formStatus === "sending" || formStatus === "success"}
            >
              {formStatus === "sending"
                ? "Отправка..."
                : formStatus === "success"
                  ? "Отправлено"
                  : formStatus === "error"
                    ? "Ошибка"
                    : "Получить предложение"}
              {formStatus === "success" ? <CheckCircle size={18} /> : <ArrowRight size={18} />}
            </button>
            <p
              className={`${style.Contact__statusMessage} ${
                formStatus === "success" ? style.Contact__statusMessage_success : ""
              }`}
              role="status"
            >
              {formStatus === "success"
                ? "Спасибо! Я отвечу в течение суток."
                : formStatus === "error"
                  ? formError
                  : ""}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
