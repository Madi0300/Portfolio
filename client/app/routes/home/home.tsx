import { useCallback } from "react";
import type { Route } from "./+types/home";
import style from "./home.module.scss";
import Navigation from "./navigation/Navigation";
import Hero from "./hero/Hero";
import About from "./about/About";
import Stack from "./stack/Stack";
import Services from "./services/Services";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Портфолио — Madi Aitbay" },
    {
      name: "description",
      content:
        "Fullstack разработчик. Запускаю веб-приложения, MVP и лендинги быстрее, сохраняя качество и масштабируемость.",
    },
  ];
}

export default function Home() {
  const handleNavigate = useCallback((id: string) => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 65;
      const y =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });
    }
  }, []);

  return (
    <div className={style.Home}>
      <Navigation onNavigate={handleNavigate} />
      <main className={style.Home__content}>
        <Hero onNavigate={handleNavigate} />
        <About />
        <Stack />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
