import { Link } from "react-router";
import type { Route } from "./+types/ggpromarket";
import ProjectContent, {
  type ProjectContentBlock,
} from "./renderer/ProjectContent";
import style from "./ggpromarket.module.scss";
import { useReveal } from "~/routes/home/useReveal";

const contentBlocks: ProjectContentBlock[] = [
  { type: "title", text: "GGPromarket — SPA интернет-магазин" },
  {
    type: "subtitle",
    text: "Контекст",
  },
  {
    type: "text",
    text: "Интернет-магазин с глубоким каталогом. Требования — мгновенная навигация, стабильная корзина и фильтры без перезагрузок, чтобы удержать пользователей на мобильных устройствах.",
  },
  {
    type: "image",
    imgSrc: "/projectGGPromarket/screen1.webp",
    alt: "Главный экран GGPromarket",
    caption: "Главный экран: быстрый доступ к категориям и акциям.",
  },
  {
    type: "subtitle",
    text: "Что сделал",
  },
  {
    type: "list",
    subtitle: "Основные задачи",
    list: [
      "Построил SPA на React + TypeScript с клиентским роутингом и плавной анимацией переходов.",
      "Каталог на Redux Toolkit: фильтры и поиск без перезагрузки страницы, оптимизированные селекторы.",
      "Кэширование ответов каталога и мемоизация карточек — плавные скроллы даже при длинных списках.",
      "Корзина и избранное сохраняются в localStorage, поэтому данные не теряются после обновления.",
    ],
  },
  {
    type: "image",
    imgSrc: "/projectGGPromarket/screen2.webp",
    alt: "Каталог товаров GGPromarket",
    caption: "Каталог с фильтрами и быстрым предпросмотром товаров.",
  },
  {
    type: "list",
    subtitle: "Оптимизации",
    list: [
      "Lazy-загрузка изображений, разделение кода по маршрутам и предзагрузка популярных категорий.",
      "Скелетоны для карточек и ленивая подгрузка пагинации для восприятия скорости.",
      "Унифицированные UI-компоненты: кнопки, карточки, сетки — легко расширять каталог.",
    ],
  },
  {
    type: "image",
    imgSrc: "/projectGGPromarket/screen3.webp",
    alt: "Витрина и подборки",
    caption: "Подборки на главной с CTA, упор на быстрый переход к покупкам.",
  },
  {
    type: "subtitle",
    text: "Результат",
  },
  {
    type: "text",
    text: "Каталог открывается без рывков, фильтры применяются мгновенно. Время до первого взаимодействия на мобильных сократилось, а удержание выросло благодаря стабильной корзине и лёгким переходам.",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GGPromarket — SPA интернет-магазин" },
    {
      name: "description",
      content:
        "GGPromarket: интернет-магазин на React/TypeScript с мгновенными фильтрами, кэшированием каталога и стабильной корзиной.",
    },
  ];
}

export default function GGPromarketProject() {
  const { ref, showed } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={style.ProjectPage}>
      <header className={style.ProjectPage__hero}>
        <div className={style.ProjectPage__heroInner}>
          <Link to="/" className={style.ProjectPage__back}>
            ← На главную
          </Link>
          <p className={style.ProjectPage__eyebrow}>Проекты / E-commerce</p>
          <h1 className={style.ProjectPage__title}>
            GGPromarket — SPA интернет-магазин
          </h1>
          <p className={style.ProjectPage__lead}>
            Каталог с фильтрами без перезагрузок, моментальная корзина и
            оптимизированные изображения. Сконструировано как быстрый SPA с
            акцентом на мобильные устройства.
          </p>
          <div className={style.ProjectPage__tags}>
            <span className={style.ProjectPage__tag}>React</span>
            <span className={style.ProjectPage__tag}>TypeScript</span>
            <span className={style.ProjectPage__tag}>Redux Toolkit</span>
            <span className={style.ProjectPage__tag}>SPA</span>
          </div>
        </div>
      </header>

      <main
        className={
          style.ProjectPage__content +
          " " +
          (showed ? style.ProjectPage__content_showed : "")
        }
      >
        <div className={style.ProjectPage__body}>
          <ProjectContent blocks={contentBlocks} />
        </div>
      </main>
    </div>
  );
}
