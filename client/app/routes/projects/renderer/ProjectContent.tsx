import style from "./ProjectContent.module.scss";

export type ProjectContentBlock =
  | { type: "title"; text: string }
  | { type: "subtitle"; text: string }
  | { type: "text"; text: string }
  | { type: "image"; imgSrc: string; alt?: string; caption?: string }
  | { type: "list"; subtitle: string; list: string[] };

type ProjectContentProps = {
  blocks: ProjectContentBlock[];
};

export default function ProjectContent({ blocks }: ProjectContentProps) {
  return (
    <div className={style.ProjectContent}>
      {blocks.map((block, index) => {
        if (block.type === "title") {
          return (
            <h1 key={index} className={style.ProjectContent__title}>
              {block.text}
            </h1>
          );
        }

        if (block.type === "subtitle") {
          return (
            <h2 key={index} className={style.ProjectContent__subtitle}>
              {block.text}
            </h2>
          );
        }

        if (block.type === "text") {
          return (
            <p key={index} className={style.ProjectContent__text}>
              {block.text}
            </p>
          );
        }

        if (block.type === "image") {
          return (
            <figure key={index} className={style.ProjectContent__figure}>
              <img
                loading="lazy"
                className={style.ProjectContent__image}
                src={block.imgSrc}
                alt={block.alt ?? ""}
              />
              {block.caption ? (
                <figcaption className={style.ProjectContent__caption}>
                  {block.caption}
                </figcaption>
              ) : null}
            </figure>
          );
        }

        return (
          <div key={index} className={style.ProjectContent__listBlock}>
            <h3 className={style.ProjectContent__listTitle}>{block.subtitle}</h3>
            <ul className={style.ProjectContent__list}>
              {block.list.map((item, itemIndex) => (
                <li key={itemIndex} className={style.ProjectContent__listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
