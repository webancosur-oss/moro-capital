import {
  ArrowUpRight,
} from "lucide-react";

import {
  INVESTMENT_PLANS,
} from "@/data/investors";

import Reveal from "./Reveal";

export default function InvestmentPlans() {
  return (
    <section
      className="investorSection investorPlansSection"
      id="planes"
    >
      <div className="investorContainer">
        <Reveal className="investorSectionHeader investorSectionHeaderSplit">
          <div>
            <p className="investorEyebrow">
              ALTERNATIVAS
            </p>

            <h2>
              Alternativas de inversión
              por plazo.
            </h2>
          </div>

          <p>
            Conoce las alternativas
            indicadas en la
            presentación corporativa y
            consulta las condiciones
            vigentes con un asesor.
          </p>
        </Reveal>

        <div className="investorPlansGrid">
          {INVESTMENT_PLANS.map(
            (
              plan,
              index
            ) => (
              <Reveal
                key={plan.id}
                className={`investorPlanCard ${
                  plan.featured
                    ? "investorPlanCardFeatured"
                    : ""
                }`}
                delay={
                  index * 0.07
                }
              >
                <div className="investorPlanHeader">
                  <span>
                    {plan.name}
                  </span>

                  {plan.featured && (
                    <small>
                      Más solicitado
                    </small>
                  )}
                </div>

                <div className="investorPlanRate">
                  <strong>
                    {plan.rate}%
                  </strong>

                  <span>
                    TIR indicada
                  </span>
                </div>

                <div className="investorPlanFooter">
                  <div>
                    <strong>
                      {
                        plan.months
                      }
                    </strong>

                    <span>
                      meses
                    </span>
                  </div>

                  <a
                    href="#formulario"
                    aria-label={`Consultar ${plan.name}`}
                  >
                    <ArrowUpRight
                      size={19}
                    />
                  </a>
                </div>
              </Reveal>
            )
          )}
        </div>

        <p className="investorFinePrint">
          Las cifras mostradas son
          referenciales y corresponden
          a la información corporativa
          suministrada. No representan
          una promesa de rentabilidad
          garantizada.
        </p>
      </div>
    </section>
  );
}