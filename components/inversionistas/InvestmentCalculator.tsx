"use client";

import {
  CSSProperties,
  useMemo,
  useState,
} from "react";

import {
  ArrowUpRight,
} from "lucide-react";

import {
  INVESTMENT_PLANS,
} from "@/data/investors";

const MIN_INVESTMENT = 10000;
const MAX_INVESTMENT = 300000;
const STEP_INVESTMENT = 1000;

const currency = new Intl.NumberFormat(
  "es-PE",
  {
    style: "currency",
    currency: "PEN",
    maximumFractionDigits: 0,
  }
);

export default function InvestmentCalculator() {
  const [
    amount,
    setAmount,
  ] = useState(20000);

  const [
    selectedPlan,
    setSelectedPlan,
  ] = useState(
    "intermediate"
  );

  const plan = useMemo(
    () =>
      INVESTMENT_PLANS.find(
        (item) =>
          item.id ===
          selectedPlan
      ) ??
      INVESTMENT_PLANS[1],
    [selectedPlan]
  );

  const returnAmount =
    amount *
    (plan.rate / 100);

  const projectedTotal =
    amount +
    returnAmount;

  const rangeProgress =
    ((amount -
      MIN_INVESTMENT) /
      (MAX_INVESTMENT -
        MIN_INVESTMENT)) *
    100;

  const rangeStyle = {
    "--range-progress":
      `${rangeProgress}%`,
  } as CSSProperties;

  return (
    <section
      className="investorSection investorCalculator"
      id="simulador"
    >
      <div className="investorContainer">
        <div className="investorCalculatorLayout">

          {/* =========================
              LEFT
          ========================== */}

          <div className="investorCalculatorIntro">
            <p className="investorEyebrow">
              SIMULA TU INVERSIÓN
            </p>

            <h2>
              Proyecta tu inversión
            </h2>

            <div className="investorCalculatorAmountBlock">
              <span className="investorCalculatorAmountLabel">
                CAPITAL A INVERTIR
              </span>

              <strong className="investorCalculatorAmount">
                {currency.format(
                  amount
                )}
              </strong>

              <div className="investorCalculatorRangeWrap">
                <input
                  className="investorCalculatorRange"
                  type="range"
                  min={
                    MIN_INVESTMENT
                  }
                  max={
                    MAX_INVESTMENT
                  }
                  step={
                    STEP_INVESTMENT
                  }
                  value={amount}
                  style={
                    rangeStyle
                  }
                  aria-label="Capital a invertir"
                  onChange={(
                    event
                  ) =>
                    setAmount(
                      Number(
                        event
                          .target
                          .value
                      )
                    )
                  }
                />

                <div className="investorCalculatorRangeValues">
                  <span>
                    {currency.format(
                      MIN_INVESTMENT
                    )}
                  </span>

                  <span>
                    {currency.format(
                      MAX_INVESTMENT
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className="investorCalculatorPlanSelector">
              {INVESTMENT_PLANS.map(
                (item) => {
                  const active =
                    selectedPlan ===
                    item.id;

                  return (
                    <button
                      type="button"
                      key={
                        item.id
                      }
                      className={
                        active
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        setSelectedPlan(
                          item.id
                        )
                      }
                    >
                      <span>
                        {
                          item.months
                        }
                      </span>

                      <small>
                        meses
                      </small>
                    </button>
                  );
                }
              )}
            </div>
          </div>

          {/* =========================
              RIGHT
          ========================== */}

          <div className="investorProjectionCard">
            <div className="investorProjectionHeader">
              <div>
                <span className="investorProjectionEyebrow">
                  TU PROYECCIÓN
                </span>

                <p>
                  Alternativa{" "}
                  {
                    plan.name
                  }
                </p>
              </div>

              <span className="investorProjectionRate">
                {plan.rate}%
              </span>
            </div>

            <div className="investorProjectionMetrics">
              <div className="investorProjectionMetric">
                <span>
                  CAPITAL
                </span>

                <strong>
                  {currency.format(
                    amount
                  )}
                </strong>
              </div>

              <div className="investorProjectionMetric">
                <span>
                  PLAZO
                </span>

                <strong>
                  {
                    plan.months
                  }{" "}
                  <small>
                    meses
                  </small>
                </strong>
              </div>

              <div className="investorProjectionMetric">
                <span>
                  RETORNO REF.
                </span>

                <strong>
                  {currency.format(
                    returnAmount
                  )}
                </strong>
              </div>
            </div>

            <div className="investorProjectionTotal">
              <div>
                <span>
                  MONTO PROYECTADO
                </span>

                <strong>
                  {currency.format(
                    projectedTotal
                  )}
                </strong>
              </div>

              <a
                href="#formulario"
                aria-label="Consultar esta inversión"
              >
                <ArrowUpRight
                  size={18}
                />
              </a>
            </div>

            <p className="investorProjectionDisclaimer">
              Simulación referencial
              basada en la tasa
              indicada para esta
              alternativa. Las
              condiciones finales
              dependen de la
              documentación
              contractual vigente.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}