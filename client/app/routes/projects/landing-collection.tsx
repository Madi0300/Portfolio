import { Link } from "react-router";
import type { Route } from "./+types/landing-collection";
import ProjectContent, {
  type ProjectContentBlock,
} from "./renderer/ProjectContent";
import style from "./landing-collection.module.scss";
import { useReveal } from "~/routes/home/useReveal";

const contentBlocks: ProjectContentBlock[] = [
  { type: "title", text: "Пет-проект: коллекция лендингов" },
  {
    type: "subtitle",
    text: "Контекст",
  },
  {
    type: "text",
    text: "Собрал три лендинга как тренажёр: проверить быстрый запуск, единый визуальный язык и аккуратный адаптив под мобильные устройства.",
  },
  {
    type: "image",
    imgSrc: "/projectLanding/Relvise.png",
    alt: "Лендинг Relvise",
    caption:
      "Relvise — корпоративный лендинг, отрабатывал сетки и блоки доверия.",
  },
  {
    type: "subtitle",
    text: "Что сделал",
  },
  {
    type: "list",
    subtitle: "Задачи в пет-проекте",
    list: [
      "Сверстал три лендинга на HTML/SCSS с компонентным подходом (секции, сетки, карточки) для быстрой сборки новых страниц.",
      "Добавил простые анимации появления и hover-состояния без перегрузки производительности.",
      "Отладил адаптив: мобильные сетки, перестройка колонок и гибкие типографические шкалы.",
    ],
  },
  {
    type: "image",
    imgSrc: "/projectLanding/TealuxE.png",
    alt: "Лендинг TealuxE",
    caption:
      "TealuxE — продуктовая страница, тренировал чистые CTA и карточки товара.",
  },
  {
    type: "list",
    subtitle: "Оптимизации в прототипе",
    list: [
      "Lazy-загрузка скриншотов и компрессия изображений, минимальный критичный CSS.",
      "Общие SCSS-примеси/переменные — единый стиль между лендингами и меньше дублирования.",
      "Проверка PageSpeed на демо: зелёные показатели по LCP/CLS на мобильных билдах.",
    ],
  },
  {
    type: "image",
    imgSrc: "/projectLanding/gameLanding.png",
    alt: "Игровой лендинг",
    caption: "Игровой лендинг — обкатывал динамичные блоки и плавный скролл.",
  },
  {
    type: "subtitle",
    text: "Статус",
  },
  {
    type: "text",
    text: "Прототипы готовы: единая библиотека секций, адаптив работает, загрузка лёгкая. Использую как базу для новых лендингов и дальнейших тестов.",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Пет-проект: коллекция лендингов" },
    {
      name: "description",
      content:
        "Пет-проект: три лендинга с общей системой компонентов, адаптивом, анимациями и лёгкой загрузкой для мобильных.",
    },
  ];
}

export default function LandingCollectionProject() {
  const { ref, showed } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={style.ProjectPage}>
      <header className={style.ProjectPage__hero}>
        <div className={style.ProjectPage__heroInner}>
          <Link to="/" className={style.ProjectPage__back}>
            ← На главную
          </Link>
          <p className={style.ProjectPage__eyebrow}>Проекты / Лендосы</p>
          <h1 className={style.ProjectPage__title}>
            Пет-проект: коллекция лендингов
          </h1>
          <p className={style.ProjectPage__lead}>
            Три лендинга как тренировочная площадка: общие компоненты,
            аккуратные сетки, анимации и лёгкая загрузка на мобильных.
          </p>
          <div className={style.ProjectPage__tags}>
            <span className={style.ProjectPage__tag}>HTML/SCSS</span>
            <span className={style.ProjectPage__tag}>Animations</span>
            <span className={style.ProjectPage__tag}>Performance</span>
            <span className={style.ProjectPage__tag}>Responsive</span>
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
