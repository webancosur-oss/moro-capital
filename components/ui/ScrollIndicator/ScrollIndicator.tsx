"use client";

import styles from "./ScrollIndicator.module.css";

interface ScrollIndicatorProps {
  targetId: string;
  label?: string;
}

export default function ScrollIndicator({
  targetId,
  label = "SCROLL",
}: ScrollIndicatorProps) {
  const handleScroll = () => {
    const target = document.getElementById(targetId);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <button
      type="button"
      className={styles.scrollIndicator}
      onClick={handleScroll}
      aria-label={`Ir a ${targetId}`}
    >
      <span className={styles.circle} aria-hidden="true">
        <span className={styles.arrow} />
      </span>

      <span className={styles.label}>{label}</span>

      <span className={styles.line} aria-hidden="true" />
    </button>
  );
}