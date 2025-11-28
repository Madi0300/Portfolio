import styles from "./KworkButton.module.scss";

const DEFAULT_KWORK_URL = "https://kwork.ru/user/madi_aitbai";

export const KWORK_URL =
  import.meta.env.VITE_KWORK_URL ?? DEFAULT_KWORK_URL;

type KworkButtonProps = {
  href?: string;
  className?: string;
  label?: string;
  fullWidth?: boolean;
};

export function KworkIcon({ className = "" }: { className?: string }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}kwork/kwork-logo.svg`}
      alt="Kwork"
      width={108}
      height={20}
      className={className}
      loading="lazy"
      decoding="async"
    />
  );
}

export default function KworkButton({
  href = KWORK_URL,
  className = "",
  label = "Заказать на Kwork",
  fullWidth = false,
}: KworkButtonProps) {
  const classNames = [
    styles.KworkButton,
    fullWidth ? styles.KworkButton_full : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      className={classNames}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span className={styles.KworkButton__icon} aria-hidden="true">
        <KworkIcon />
      </span>
      <span className={styles.KworkButton__label}>{label}</span>
    </a>
  );
}
