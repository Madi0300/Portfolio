import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import style from "./Navigation.module.scss";
import { KWORK_URL } from "../KworkButton";

type NavigationProps = {
  onNavigate: (id: string) => void;
};

const navItems = [
  { label: "Обо мне", id: "about" },
  { label: "Стек", id: "stack" },
  { label: "Услуги", id: "services" },
  { label: "Проекты", id: "portfolio" },
];

export default function Navigation({ onNavigate }: NavigationProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (id: string) => {
    setOpen(false);
    onNavigate(id);
  };

  return (
    <nav
      className={`${style.Navigation} ${
        scrolled ? style.Navigation_scrolled : ""
      }`}
    >
      <div className={style.Navigation__inner}>
        <button
          type="button"
          className={style.Navigation__brand}
          onClick={() => handleNavigate("hero")}
        >
          <span className={style.Navigation__badge}>
            <img
              src={`${import.meta.env.BASE_URL}avatar/avatar.webp`}
              alt="Madi Aitbay"
              loading="lazy"
              decoding="async"
            />
          </span>
          <span className={style.Navigation__name}>Madi Aitbay</span>
        </button>

        <div className={style.Navigation__links}>
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={style.Navigation__link}
              onClick={() => handleNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
          <a
            className={style.Navigation__cta}
            href={KWORK_URL}
            target="_blank"
            rel="noreferrer"
          >
            Обсудить проект
            <ArrowRight size={16} />
          </a>
        </div>

        <button
          type="button"
          className={style.Navigation__burger}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`${style.Navigation__mobile} ${
          open ? style.Navigation__mobile_open : ""
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={style.Navigation__mobileLink}
            onClick={() => handleNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
        <a
          className={style.Navigation__mobileCta}
          href={KWORK_URL}
          target="_blank"
          rel="noreferrer"
        >
          Обсудить проект
          <ArrowRight size={16} />
        </a>
      </div>
    </nav>
  );
}
