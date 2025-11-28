import style from "./KworkLink.module.scss";
import KworkButton from "@/app/routes/home/KworkButton";
import { useReveal } from "../useReveal";

export default function KworkLink() {
  const { ref, showed } = useReveal<HTMLDivElement>();

  return (
    <section className={style.KworkLink}>
      <div
        ref={ref}
        className={`${style.KworkLink__container} ${showed ? style.KworkLink__container_showed : ""}`}
      >
        <h2 className={style.KworkLink__title}>Запустим быстро через Kwork</h2>
        <p className={style.KworkLink__text}>
          Готов подключиться к вашему проекту: оформите заказ на Kwork, чтобы сразу согласовать
          детали, бюджет и сроки.
        </p>
        <div className={style.KworkLink__action}>
          <KworkButton className={style.KworkLink__button} />
        </div>
      </div>
    </section>
  );
}
