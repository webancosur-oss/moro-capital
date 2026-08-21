import {
  ArrowUpRight,
} from "lucide-react";

import {
  REASONS,
} from "@/data/investors";

import Reveal from "./Reveal";

export default function InvestorReasons() {
  return (
    <section className="investorSection investorReasons">
      <div className="investorContainer investorReasonsGrid">
        <Reveal>
          <p className="investorEyebrow">
            POR QUÉ MORO CAPITAL
          </p>

          <h2>
            Razones que
            <br />
            sostienen la
            <br />
            confianza.
          </h2>
        </Reveal>

        <div className="investorReasonsList">
          {REASONS.map(
            (
              reason,
              index
            ) => (
              <Reveal
                key={
                  reason.number
                }
                className="investorReason"
                delay={
                  index *
                  0.04
                }
              >
                <span className="investorReasonNumber">
                  {
                    reason.number
                  }
                </span>

                <strong>
                  {
                    reason.title
                  }
                </strong>

                <ArrowUpRight
                  size={17}
                />
              </Reveal>
            )
          )}
        </div>
      </div>
    </section>
  );
}