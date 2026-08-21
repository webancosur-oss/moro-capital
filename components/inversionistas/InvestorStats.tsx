import {
  METRICS,
} from "@/data/investors";

import Reveal from "./Reveal";

export default function InvestorStats() {
  return (
    <section
      className="investorStats"
      id="indicadores"
    >
      <div className="investorContainer investorStatsGrid">
        {METRICS.map(
          (metric, index) => (
            <Reveal
              key={metric.label}
              className="investorStat"
              delay={
                index * 0.05
              }
            >
              <strong>
                {metric.value}

                <small>
                  {metric.suffix}
                </small>
              </strong>

              <span>
                {metric.label}
              </span>
            </Reveal>
          )
        )}
      </div>
    </section>
  );
}