# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Backend (contact relay)

The `server` directory now contains a lightweight Express service that accepts `POST /api/contact`, validates the input, and forwards it to Telegram. The service sends a startup notification to the group, relays any server-side errors there, and accepts form submissions sent from the frontend.

### Setup

1. `cd server && npm install`
2. Copy `.env.example` to `.env` and define:
   - `TELEGRAM_BOT_TOKEN` — the token you got from @BotFather.
   - `TELEGRAM_CHAT_ID` — the numeric identifier for your group (supergroups use IDs that start with `-100`). You can obtain it by messaging the group and visiting `https://api.telegram.org/bot<token>/getUpdates` or by asking @userinfobot once the bot is a member.
   - `ALLOWED_ORIGINS` — comma-separated list of allowed front-end URLs (defaults to `http://localhost:5173`).

### Running the backend

```bash
cd server
npm start
```

The backend sends a startup message to your group so you always know when it launches.

### Connecting the frontend

The contact form uses `VITE_CONTACT_API_URL`. By default it points to `http://localhost:4000/api/contact`, but you can override it in your `.env` or deployment environment to match the backend URL the frontend should reach.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
