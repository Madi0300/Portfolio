import type { LucideIcon } from "lucide-react";
import {
  CheckCircle,
  Clock,
  Cpu,
  Github,
  Layout,
  Smartphone,
  Zap,
} from "lucide-react";
import { Link } from "react-router";
import style from "./Portfolio.module.scss";
import { useReveal } from "../useReveal";

type ProjectCard = {
  title: string;
  pill: string;
  text: string;
  resultText: string;
  meta: string[];
  link: string;
  icon: LucideIcon;
  resultIcon: LucideIcon;
  imageSrc: string;
};

const featuredProject = {
  label: "PET-PROJECT / IN PROGRESS",
  imageSrc: "/projectLearnEnglish/mainPage.png",
  visualIcon: Cpu,
  visualCaption: "Главная страница платформы WithAI",
  title: "English Learning Platform",
  tags: ["EdTech", "React + TypeScript"],
  description:
    "Пет-проект: платформа, которая под контекст пользователя создаёт упражнения (SRS, эссе) и сохраняет прогресс.",
  statusText:
    "Прототип собирает черновик задания за ~5–7 секунд; Проект еще в разработке. Добавляю новые функции и задания.",
  link: "/projects/learn-english",
};

const projectCards: ProjectCard[] = [
  {
    title: "E-Commerce Shop",
    pill: "SPA",
    text: "Полноценный интернет-магазин с каталогом, фильтрацией и корзиной.",
    resultText: "Каталог загружается менее 1 сек даже на 3G.",
    meta: ["#React", "#Redux"],
    link: "/projects/ggpromarket",
    icon: Layout,
    resultIcon: Zap,
    imageSrc: "/projectGGPromarket/screen1.webp",
  },
  {
    title: "Коллекция лендингов",
    pill: "UI/Layout",
    text: "Серия адаптивных лендингов с pixel-perfect версткой.",
    resultText: "100% соответствие макетам Figma. Green Zone по PageSpeed.",
    meta: ["#HTML/SCSS", "#Animation"],
    link: "/projects/landing-collection",
    icon: Smartphone,
    resultIcon: CheckCircle,
    imageSrc: "/projectLanding/Relvise.png",
  },
];

export default function Portfolio() {
  const { ref, showed } = useReveal<HTMLDivElement>();
  const featuredImageSrc = `${import.meta.env.BASE_URL}${featuredProject.imageSrc.replace(/^\/+/, "")}`;

  return (
    <section id="portfolio" className={style.Portfolio}>
      <div
        ref={ref}
        className={`${style.Portfolio__container} ${showed ? style.Portfolio__container_showed : ""}`}
      >
        <div className={style.Portfolio__header}>
          <div>
            <h2 className={style.Portfolio__title}>Избранные проекты</h2>
            <p className={style.Portfolio__subtitle}>
              Реальные задачи и измеримые результаты
            </p>
          </div>
          <a
            className={style.Portfolio__link}
            href="https://github.com/Madi0300"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} />
            Смотреть код на GitHub
          </a>
        </div>

        <div className={style.Portfolio__grid}>
          <article
            className={`${style.Portfolio__card} ${style.Portfolio__card_featured}`}
          >
            <div className={style.Portfolio__label}>
              {featuredProject.label}
            </div>
            <div className={style.Portfolio__featuredBody}>
              <div className={style.Portfolio__visual}>
                <img
                  src={featuredImageSrc}
                  alt={featuredProject.title}
                  className={style.Portfolio__visualImage}
                />
                <p className={style.Portfolio__visualCaption}>
                  {featuredProject.visualCaption}
                </p>
              </div>
              <div className={style.Portfolio__content}>
                <h3 className={style.Portfolio__cardTitle}>
                  {featuredProject.title}
                </h3>
                <div className={style.Portfolio__tags}>
                  {featuredProject.tags.map((tag) => (
                    <span key={tag} className={style.Portfolio__tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className={style.Portfolio__text}>
                  {featuredProject.description}
                </p>
                <div className={style.Portfolio__result}>
                  <Clock size={18} />
                  <p>
                    <span className={style.Portfolio__resultAccent}>
                      Статус:
                    </span>{" "}
                    {featuredProject.statusText}
                  </p>
                </div>
                <div className={style.Portfolio__actions}>
                  <Link
                    to={featuredProject.link}
                    className={style.Portfolio__button}
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {projectCards.map((project) => {
            const ResultIcon = project.resultIcon;

            const projectImageSrc = `${import.meta.env.BASE_URL}${project.imageSrc.replace(/^\/+/, "")}`;

            return (
              <article key={project.title} className={style.Portfolio__card}>
                <div className={style.Portfolio__thumb}>
                  <img
                    src={projectImageSrc}
                    alt={project.title}
                    className={style.Portfolio__thumbImage}
                  />
                </div>
                <div className={style.Portfolio__cardBody}>
                  <div className={style.Portfolio__cardTop}>
                    <h3 className={style.Portfolio__cardTitle}>
                      {project.title}
                    </h3>
                    <span className={style.Portfolio__pill}>
                      {project.pill}
                    </span>
                  </div>
                  <p className={style.Portfolio__text}>{project.text}</p>
                  <div className={style.Portfolio__resultInline}>
                    <ResultIcon size={16} />
                    <p>
                      <strong>Результат:</strong> {project.resultText}
                    </p>
                  </div>
                  <div className={style.Portfolio__meta}>
                    {project.meta.map((tag) => (
                      <span key={`${project.title}-${tag}`}>{tag}</span>
                    ))}
                  </div>
                  <Link
                    to={project.link}
                    className={style.Portfolio__inlineLink}
                  >
                    Подробнее →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
