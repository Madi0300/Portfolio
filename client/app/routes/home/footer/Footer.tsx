import style from "./Footer.module.scss";
import { useReveal } from "../useReveal";

export default function Footer() {
  const { ref, showed } = useReveal<HTMLDivElement>();

  return (
    <footer className={style.Footer}>
      <div
        ref={ref}
        className={`${style.Footer__container} ${showed ? style.Footer__container_showed : ""}`}
      >
        <p className={style.Footer__text}>© {new Date().getFullYear()} Madi Aitbay.</p>
        <p className={style.Footer__subtext}>Built with React, SCSS Modules & thoughtful craft.</p>
      </div>
    </footer>
  );
}
