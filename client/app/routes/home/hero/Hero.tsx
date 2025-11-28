import { ArrowRight } from "lucide-react";
import style from "./Hero.module.scss";
import { KworkIcon } from "@/app/routes/home/KworkButton";
import { useReveal } from "../useReveal";

type HeroProps = {
  onNavigate: (id: string) => void;
};

export default function Hero({ onNavigate }: HeroProps) {
  const { ref, showed } = useReveal<HTMLDivElement>();
  // const TELEGRAM_URL = "https://t.me/Mad_Aitbai";

  // const handleTelegram = () => {
  //   if (typeof window === "undefined") return;
  //   window.open(TELEGRAM_URL, "_blank");
  // };

  return (
    <section id="hero" className={`${style.Hero}`}>
      <div className={style.Hero__background} />
      <div
        ref={ref}
        className={`${style.Hero__container} ${showed ? style.Hero__container_showed : ""}`}
      >
        <div className={style.Hero__badge}>
          <span className={style.Hero__pulse} />
          <span className={style.Hero__badgeText}>Открыт к заказам</span>
        </div>

        <h1 className={style.Hero__title}>
          Создаю веб-приложения
          <br className={style.Hero__break} />
          <span className={style.Hero__accent}>быстрее, чем вы ожидаете</span>
        </h1>

        <p className={style.Hero__subtitle}>
          Помогаю запустить продукт, увеличить конверсию и автоматизировать
          рутину за 2–4 недели.
        </p>

        <p className={style.Hero__description}>
          Fullstack-разработчик. Объединяю{" "}
          <span className={style.Hero__highlight}>инженерную точность</span> и{" "}
          <span className={style.Hero__highlight}>чёткие процессы</span>, чтобы
          быстрее решать бизнес-задачи без потери качества.
        </p>

        <div className={style.Hero__actions}>
          <div className={style.Hero__kworkIcon}>
            <KworkIcon />
          </div>
          {/* <button
            type="button"
            className={style.Hero__primary}
            onClick={handleTelegram}
          >
            <Send size={18} />
            Написать в Telegram
          </button> */}
          <button
            type="button"
            className={style.Hero__secondary}
            onClick={() => onNavigate("portfolio")}
          >
            Посмотреть кейсы
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
