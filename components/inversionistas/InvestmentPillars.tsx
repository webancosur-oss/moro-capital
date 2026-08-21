import {
  BadgeCheck,
  Building2,
  ChartNoAxesCombined,
  CircleDollarSign,
} from "lucide-react";

import {
  PILLARS,
} from "@/data/investors";

import Reveal from "./Reveal";

const icons = {
  group: Building2,

  fixed:
    CircleDollarSign,

  management:
    ChartNoAxesCombined,

  assets:
    BadgeCheck,
};

export default function InvestmentPillars() {
  return (
    <section className="investorSection investorPillars">
      <div className="investorContainer">
        <Reveal className="investorPillarsHeader">
          <p className="investorEyebrow">
            RESPALDO
          </p>

          <h2>
            No invertimos en promesas.
            <span>
              Invertimos en desarrollo.
            </span>
          </h2>
        </Reveal>

        <div className="investorPillarsGrid">
          {PILLARS.map(
            (
              pillar,
              index
            ) => {
              const Icon =
                icons[
                  pillar.id as keyof typeof icons
                ];

              return (
                <Reveal
                  key={
                    pillar.id
                  }
                  className="investorPillar"
                  delay={
                    index *
                    0.05
                  }
                >
                  <div className="investorPillarIcon">
                    <Icon
                      size={20}
                      strokeWidth={
                        1.5
                      }
                    />
                  </div>

                  <div>
                    <h3>
                      {
                        pillar.title
                      }
                    </h3>

                    <p>
                      {
                        pillar.description
                      }
                    </p>
                  </div>
                </Reveal>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}