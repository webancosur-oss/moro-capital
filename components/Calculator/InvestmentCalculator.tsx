"use client";

import {
  CSSProperties,
  useMemo,
  useState,
} from "react";

import {
  INVESTMENT_PLANS,
} from "@/data/investors";

import Button from "../Button/Button";

import styles from "./InvestmentModel.module.css";

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
  const [amount, setAmount] =
    useState(20000);

  const [selectedPlan, setSelectedPlan] =
    useState("intermediate");

  const plan = useMemo(
    () =>
      INVESTMENT_PLANS.find(
        (item) =>
          item.id === selectedPlan
      ) ??
      INVESTMENT_PLANS[1],
    [selectedPlan]
  );

  const annualReturn =
    amount * (plan.rate / 100);

  const projectedReturn =
    annualReturn *
    (plan.months / 12);

  const projectedTotal =
    amount +
    projectedReturn;

  const rangeProgress =
    ((amount - MIN_INVESTMENT) /
      (MAX_INVESTMENT - MIN_INVESTMENT)) *
    100;

  const rangeStyle = {
    "--range-progress":
      `${rangeProgress}%`,
  } as CSSProperties;

  return (
    <section
      id="simulador"
      className={styles.investorCalculator}
    >
      <div className={styles.container}>

        <div className={styles.calculatorHeader}>
          <div className={styles.headerMain}>

            <h2>
              Proyecta el potencial
              <br />
              de tu capital.
            </h2>
          </div>

          <div className={styles.headerSide}>
            <span>
              MORO CAPITAL
            </span>

            <p>
              Selecciona un monto y una
              alternativa para visualizar
              una proyección referencial
              según las condiciones indicadas.
            </p>
          </div>
        </div>

        <div className={styles.calculatorLayout}>

          <div className={styles.calculatorPanel}>

            <div className={styles.panelHeader}>
              <div>
                <span className={styles.panelEyebrow}>
                  CAPITAL A INVERTIR
                </span>

                <strong className={styles.amount}>
                  {currency.format(amount)}
                </strong>
              </div>

              <span className={styles.minimum}>
                MÍN. {currency.format(MIN_INVESTMENT)}
              </span>
            </div>

            <div className={styles.rangeWrap}>

              <input
                className={styles.range}
                type="range"
                min={MIN_INVESTMENT}
                max={MAX_INVESTMENT}
                step={STEP_INVESTMENT}
                value={amount}
                style={rangeStyle}
                aria-label="Capital a invertir"
                onChange={(event) =>
                  setAmount(
                    Number(
                      event.target.value
                    )
                  )
                }
              />

              <div className={styles.rangeValues}>
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

            <div className={styles.selectorHeader}>
              <span>
                ELIGE TU ALTERNATIVA
              </span>

              <small>
                18 — 36 meses
              </small>
            </div>

            <div className={styles.planSelector}>

              {INVESTMENT_PLANS.map(
                (item) => {
                  const active =
                    selectedPlan ===
                    item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={`${styles.planOption} ${
                        active
                          ? styles.planOptionActive
                          : ""
                      }`}
                      onClick={() =>
                        setSelectedPlan(
                          item.id
                        )
                      }
                      aria-pressed={active}
                    >
                      <span>
                        {item.name}
                      </span>

                      <strong>
                        {item.rate}%
                      </strong>

                      <small>
                        {item.months} meses
                      </small>
                    </button>
                  );
                }
              )}

            </div>

            <div className={styles.panelFooter}>
              <div>
                <span>
                  MONEDA
                </span>

                <strong>
                  PEN · Sol peruano
                </strong>
              </div>

              <div>
                <span>
                  TICKET MÍNIMO
                </span>

                <strong>
                  S/ 10,000
                </strong>
              </div>
            </div>

          </div>

          <div
            className={`${styles.resultCard} ${
              plan.featured
                ? styles.resultCardFeatured
                : ""
            }`}
          >

            <div className={styles.resultGlow} />

            <div className={styles.resultHeader}>
              <div>
                <span>
                  TU PROYECCIÓN
                </span>

                <h3>
                  Alternativa {plan.name}
                </h3>
              </div>

              <div className={styles.resultRate}>
                <strong>
                  {plan.rate}
                </strong>

                <span>
                  %
                </span>
              </div>
            </div>

            <div className={styles.resultMain}>

              <span className={styles.resultLabel}>
                CAPITAL PROYECTADO
              </span>

              <strong className={styles.projectedTotal}>
                {currency.format(
                  projectedTotal
                )}
              </strong>

              <p>
                Proyección referencial
                considerando el plazo
                seleccionado.
              </p>

            </div>

            <div className={styles.metrics}>

              <div className={styles.metric}>
                <span>
                  CAPITAL
                </span>

                <strong>
                  {currency.format(
                    amount
                  )}
                </strong>
              </div>

              <div className={styles.metric}>
                <span>
                  PLAZO
                </span>

                <strong>
                  {plan.months}
                  <small>
                    {" "}meses
                  </small>
                </strong>
              </div>

              <div className={styles.metric}>
                <span>
                  UTILIDAD ESTIMADA
                </span>

                <strong>
                  {currency.format(
                    projectedReturn
                  )}
                </strong>
              </div>

            </div>

            <div className={styles.resultInfo}>

              <div className={styles.infoRow}>
                <span>
                  TIR ANUAL NETA ESTIMADA
                </span>

                <strong>
                  {plan.rate}%
                </strong>
              </div>

              <div className={styles.infoRow}>
                <span>
                  PAGO DE UTILIDAD
                </span>

                <strong>
                  Al cumplimiento del plazo
                </strong>
              </div>

              <div className={styles.infoRow}>
                <span>
                  LIQUIDEZ
                </span>

                <strong>
                  Rescate anticipado sujeto a condiciones
                </strong>
              </div>

            </div>

            <div className={styles.resultBottom}>

              <div className={styles.resultDisclaimer}>
                <span>
                  CONDICIONES CONTRACTUALES
                </span>

                <p>
                  Consulta disponibilidad
                  y condiciones vigentes
                  con un asesor.
                </p>
              </div>

              <Button
                href="#formulario"
                text="Consultar inversión"
                suffixIcon="arrow-up-right"
                variant={
                  plan.featured
                    ? "light"
                    : "outline"
                }
                size="sm"
                className={styles.resultButton}
                ariaLabel={`Consultar inversión ${plan.name}`}
              />

            </div>

          </div>

        </div>

        <div className={styles.disclaimer}>

          <span>
            MORO CAPITAL
          </span>

          <p>
            Simulación referencial basada
            en la TIR anual neta estimada
            indicada para cada alternativa.
            Las condiciones finales dependen
            de la documentación contractual
            vigente.
          </p>

        </div>

      </div>
    </section>
  );
}