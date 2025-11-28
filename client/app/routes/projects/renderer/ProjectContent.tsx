import style from "./ProjectContent.module.scss";

export type ProjectContentBlock =
  | { type: "title"; text: string }
  | { type: "subtitle"; text: string }
  | { type: "text"; text: string }
  | { type: "image"; imgSrc: string; alt?: string; caption?: string }
  | { type: "link"; href: string; label: string; description?: string }
  | { type: "video"; src: string; caption?: string; poster?: string }
  | { type: "list"; subtitle: string; list: string[] };

type ProjectContentProps = {
  blocks: ProjectContentBlock[];
};

const buildAssetSrc = (src: string) => {
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) {
    return src;
  }
  return `${import.meta.env.BASE_URL}${src.replace(/^\/+/, "")}`;
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

        if (block.type === "link") {
          return (
            <div key={index} className={style.ProjectContent__linkBlock}>
              <a
                className={style.ProjectContent__link}
                href={block.href}
                target="_blank"
                rel="noreferrer"
              >
                {block.label}
              </a>
              {block.description ? (
                <p className={style.ProjectContent__linkDescription}>
                  {block.description}
                </p>
              ) : null}
            </div>
          );
        }

        if (block.type === "video") {
          return (
            <figure key={index} className={style.ProjectContent__videoFigure}>
              <video
                className={style.ProjectContent__video}
                controls
                preload="metadata"
                src={block.src}
                poster={block.poster}
              />
              {block.caption ? (
                <figcaption className={style.ProjectContent__videoCaption}>
                  {block.caption}
                </figcaption>
              ) : null}
            </figure>
          );
        }

        if (block.type === "image") {
          const imageSrc = buildAssetSrc(block.imgSrc);
          return (
            <figure key={index} className={style.ProjectContent__figure}>
              <img
                loading="lazy"
                className={style.ProjectContent__image}
                src={imageSrc}
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
            <h3 className={style.ProjectContent__listTitle}>
              {block.subtitle}
            </h3>
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
