import {
  METRICS,
} from "@/data/investors";

import Reveal from "../Reveal";

import styles from "./InvestorStats.module.css";

export default function InvestorStats() {
  return (
    <section
      className={styles.investorStats}
      id="indicadores"
      aria-label="Indicadores de Moro Capital"
    >
      <div
        className={`${styles.investorContainer} ${styles.investorStatsGrid}`}
      >
        {METRICS.map((metric, index) => (
          <Reveal
            key={metric.label}
            className={styles.investorStat}
            delay={index * 0.05}
          >
            <strong className={styles.investorStatValue}>
              {metric.value}

              {metric.suffix && (
                <small>
                  {metric.suffix}
                </small>
              )}
            </strong>

            <span className={styles.investorStatLabel}>
              {metric.label}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}