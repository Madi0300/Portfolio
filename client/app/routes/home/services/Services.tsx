import { Code, Layers, Smartphone, Zap } from "lucide-react";
import style from "./Services.module.scss";
import { useReveal } from "../useReveal";

const services = [
  {
    title: "Веб-приложения (SPA)",
    desc: "Сложные интерфейсы, личные кабинеты, админ-панели. Полный цикл разработки.",
    icon: <Code size={20} />,
  },
  {
    title: "MVP для стартапов",
    desc: "Быстрый запуск идеи. От прототипа до работающего продукта с базой данных за дни.",
    icon: <Zap size={20} />,
  },
  {
    title: "Продающие лендинги",
    desc: "Адаптивная верстка, анимации, высокая скорость загрузки для лучшего SEO.",
    icon: <Smartphone size={20} />,
  },
  {
    title: "Тех. поддержка",
    desc: "Доработка верстки, интеграция API, настройка бэкенда и рефакторинг легаси кода.",
    icon: <Layers size={20} />,
  },
];

export default function Services() {
  const { ref, showed } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className={style.Services}>
      <div
        ref={ref}
        className={`${style.Services__container} ${showed ? style.Services__container_showed : ""}`}
      >
        <h2 className={style.Services__title}>Чем я могу быть полезен</h2>
        <div className={style.Services__grid}>
          {services.map((service) => (
            <article key={service.title} className={style.Services__card}>
              <div className={style.Services__icon}>{service.icon}</div>
              <h3 className={style.Services__cardTitle}>{service.title}</h3>
              <p className={style.Services__cardText}>{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
