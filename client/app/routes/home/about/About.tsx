import { Cpu, ShieldCheck, TrendingUp, Zap } from "lucide-react";
import style from "./About.module.scss";
import { useReveal } from "../useReveal";

const points = [
  {
    icon: <Zap size={20} />,
    title: "Скорость x2-x3",
    text: "Убираю рутину с помощью проверенных шаблонов и автоматических скриптов. Вы не платите за часы, потраченные на boilerplate.",
    tone: "blue",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Полный контроль качества",
    text: "Медицинский бэкграунд научил меня: «ошибка недопустима». Каждая строка проходит строгий code review.",
    tone: "green",
  },
  {
    icon: <TrendingUp size={20} />,
    title: "Чистый продукт",
    text: "Вы получаете масштабируемый продукт без «технического долга», готовый к росту нагрузок.",
    tone: "purple",
  },
];

export default function About() {
  const { ref, showed } = useReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      className={style.About}
    >
      <div
        ref={ref}
        className={`${style.About__container} ${showed ? style.About__container_showed : ""}`}
      >
        <div className={style.About__card}>
          <div className={style.About__cardHeader}>
            <Cpu className={style.About__cardIcon} />
            <h3 className={style.About__cardTitle}>Почему со мной выгодно</h3>
          </div>
          <div className={style.About__list}>
            {points.map((item) => (
              <div
                key={item.title}
                className={`${style.About__item} ${style[`About__item_${item.tone}`]}`}
              >
                <div className={style.About__itemIcon}>{item.icon}</div>
                <div>
                  <h4 className={style.About__itemTitle}>{item.title}</h4>
                  <p className={style.About__itemText}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={style.About__text}>
          <h2 className={style.About__title}>
            Инженерный подход + <span className={style.About__titleAccent}>Новые технологии</span>
          </h2>
          <div className={style.About__paragraphs}>
            <p>
              Привет! Меня зовут <strong>Мади Айтбай</strong>.
            </p>
            <p>
              Я не просто пишу код, а решаю задачи бизнеса. Вам не нужно разбираться в том, как работает сервер
              или база данных — вам нужно, чтобы сайт продавал, а приложение работало быстро.
            </p>
            <p>
              Мой метод работы позволяет сократить время запуска MVP с месяцев до недель, сохраняя при этом
              архитектурную надежность Enterprise-уровня.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
