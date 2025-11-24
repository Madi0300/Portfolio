import type { Route } from "./+types/learn-english";
import { Link } from "react-router";
import ProjectContent, { type ProjectContentBlock } from "./renderer/ProjectContent";
import style from "./learn-english.module.scss";

const contentBlocks: ProjectContentBlock[] = [
  { type: "title", text: "AI English Learning Platform" },
  {
    type: "subtitle",
    text: "Контекст",
  },
  {
    type: "text",
    text: "Пет-проект, где проверяю, как быстро можно собирать персональные упражнения (эссе, SRS, диалоги) на ИИ. Нужен интерфейс, который не тормозит, быстро отдаёт контент и фиксирует прогресс.",
  },
  {
    type: "image",
    imgSrc: "/projectLearnEnglish/mainPage.png",
    alt: "Основной экран AI English Learning Platform",
    caption: "Главный экран с подборками и быстрым стартом практик.",
  },
  {
    type: "subtitle",
    text: "Что сделал",
  },
  {
    type: "list",
    subtitle: "Основные задачи",
    list: [
      "Собрал SPA на React + TypeScript с предзагрузкой ключевых секций, чтобы навигация была быстрой.",
      "Подключил AI API для генерации заданий и кэширование ответов, чтобы не ждать повторно.",
      "Разбил интерфейс на модули: каждое упражнение отдельным блоком — проще добавлять новые форматы.",
      "Сделал адаптив: мобильные/десктоп макеты с читабельными текстами и без лишних перегрузок.",
    ],
  },
  {
    type: "image",
    imgSrc: "/projectLearnEnglish/practices.png",
    alt: "Раздел практик и прогресса",
    caption: "Экран практик: прогресс, активные карточки и быстрый старт новых заданий.",
  },
  {
    type: "subtitle",
    text: "Результат",
  },
  {
    type: "text",
    text: "Прототип сейчас собирает задание за ~5–7 секунд. Цель — держать время ответа <10 секунд и улучшать подсказки/валидацию без ощущения задержек.",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI English Learning Platform — кейс" },
    {
      name: "description",
      content:
        "Пет-проект AI English Learning Platform: генерация упражнений на ИИ, адаптивный SPA и быстрый прототип с ответом ~5–7 секунд.",
    },
  ];
}

export default function LearnEnglishProject() {
  return (
    <div className={style.ProjectPage}>
      <header className={style.ProjectPage__hero}>
        <div className={style.ProjectPage__heroInner}>
          <Link to="/" className={style.ProjectPage__back}>
            ← На главную
          </Link>
          <p className={style.ProjectPage__eyebrow}>Проекты / EdTech</p>
          <h1 className={style.ProjectPage__title}>AI English Learning Platform</h1>
          <p className={style.ProjectPage__lead}>
            Пет-проект для экспериментов с генерацией упражнений: быстрый SPA, адаптив, кэширование ответов и модульная
            архитектура, чтобы быстро обкатывать новые форматы практик.
          </p>
          <div className={style.ProjectPage__tags}>
            <span className={style.ProjectPage__tag}>React</span>
            <span className={style.ProjectPage__tag}>TypeScript</span>
            <span className={style.ProjectPage__tag}>AI API</span>
            <span className={style.ProjectPage__tag}>SPA</span>
          </div>
        </div>
      </header>

      <main className={style.ProjectPage__content}>
        <div className={style.ProjectPage__body}>
          <ProjectContent blocks={contentBlocks} />
        </div>
      </main>
    </div>
  );
}
