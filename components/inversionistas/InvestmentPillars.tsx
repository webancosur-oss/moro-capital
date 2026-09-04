import {
  BadgeCheck,
  Building2,
  ChartNoAxesCombined,
  CircleDollarSign,
} from "lucide-react";

import { PILLARS } from "@/data/investors";

import Reveal from "./Reveal";

const icons = {
  group: Building2,
  fixed: CircleDollarSign,
  management: ChartNoAxesCombined,
  assets: BadgeCheck,
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
            Invertimos en oportunidades.
            <span>
              Construimos valor.
            </span>
          </h2>
        </Reveal>

        <div className="investorPillarsGrid">
          {PILLARS.map((pillar, index) => {
            const Icon =
              icons[
                pillar.id as keyof typeof icons
              ];

            return (
              <Reveal
                key={pillar.id}
                className="investorPillar"
                delay={index * 0.05}
              >
                <div className="investorPillarTop">
                  <span className="investorPillarNumber">
                    0{index + 1}
                  </span>

                  <div className="investorPillarIcon">
                    <Icon
                      size={19}
                      strokeWidth={1.4}
                    />
                  </div>
                </div>

                <div className="investorPillarContent">
                  <h3>
                    {pillar.title}
                  </h3>

                  <p>
                    {pillar.description}
                  </p>
                </div>

                <span
                  className="investorPillarLine"
                  aria-hidden="true"
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}