"use client";

import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Banknote,
  CalendarDays,
  CircleDollarSign,
  TrendingUp,
} from "lucide-react";

import styles from "./InvestmentSimulator.module.css";

export interface InvestmentPlan {
  id: string;
  name: string;
  months: number;
  returnRate: number;
  description?: string;
}

interface InvestmentSimulatorProps {
  plans?: InvestmentPlan[];
  minAmount?: number;
  maxAmount?: number;
  step?: number;
  defaultAmount?: number;
  showComparison?: boolean;
  comparisonRates?: {
    bank: number;
    municipalBank: number;
  };
}

const DEFAULT_PLANS: InvestmentPlan[] = [
  {
    id: "basic",
    name: "Básico",
    months: 18,
    returnRate: 18,
    description: "Plazo inicial de inversión",
  },
  {
    id: "intermediate",
    name: "Intermedio",
    months: 24,
    returnRate: 26,
    description: "Alternativa de plazo medio",
  },
  {
    id: "premium",
    name: "Premium",
    months: 36,
    returnRate: 45,
    description: "Alternativa de mayor plazo",
  },
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function InvestmentSimulator({
  plans = DEFAULT_PLANS,
  minAmount = 10000,
  maxAmount = 500000,
  step = 5000,
  defaultAmount = 50000,
  showComparison = false,
  comparisonRates = {
    bank: 3,
    municipalBank: 6,
  },
}: InvestmentSimulatorProps) {
  const [amount, setAmount] = useState(defaultAmount);
  const [selectedPlan, setSelectedPlan] = useState(plans[0].id);

  const activePlan = useMemo(() => {
    return (
      plans.find((plan) => plan.id === selectedPlan) ??
      plans[0]
    );
  }, [plans, selectedPlan]);

  const utility = amount * (activePlan.returnRate / 100);
  const total = amount + utility;

  const annualEquivalent =
    (activePlan.returnRate / activePlan.months) * 12;

  const marketBankReturn =
    amount *
    (Math.pow(1 + comparisonRates.bank / 100, activePlan.months / 12) - 1);

  const marketMunicipalReturn =
    amount *
    (Math.pow(
      1 + comparisonRates.municipalBank / 100,
      activePlan.months / 12
    ) - 1);

  const sliderProgress =
    ((amount - minAmount) / (maxAmount - minAmount)) * 100;

  return (
    <section className={styles.simulator}>
      <div className={styles.backgroundGlow} />

      <div className={styles.container}>
        {/* HEADER */}
        <div className={styles.header}>
          <div>
            <h2>
              ¿Cuánto inviertes,
              <br />
              cuánto recibes?
            </h2>
          </div>

          <div className={styles.headerDescription}>
            <p>
              Simula tu inversión y conoce la utilidad estimada
              según el plazo seleccionado.
            </p>

            <span>
              Las cifras corresponden al periodo total de inversión.
            </span>
          </div>
        </div>

        {/* SIMULATOR */}
        <div className={styles.simulatorGrid}>
          {/* LEFT */}
          <div className={styles.controlPanel}>
            <div className={styles.amountHeader}>
              <span>Monto de inversión</span>

              <strong>{formatCurrency(amount)}</strong>
            </div>

            <div className={styles.sliderWrapper}>
              <input
                type="range"
                min={minAmount}
                max={maxAmount}
                step={step}
                value={amount}
                onChange={(event) =>
                  setAmount(Number(event.target.value))
                }
                className={styles.slider}
                style={{
                  background: `linear-gradient(
                    to right,
                    var(--green) 0%,
                    var(--green) ${sliderProgress}%,
                    rgba(255,255,255,0.12) ${sliderProgress}%,
                    rgba(255,255,255,0.12) 100%
                  )`,
                }}
              />

              <div className={styles.sliderLabels}>
                <span>{formatCurrency(minAmount)}</span>
                <span>{formatCurrency(maxAmount)}</span>
              </div>
            </div>

            {/* SELECTED PLAN SUMMARY */}
            <div className={styles.selectedSummary}>
              <div className={styles.summaryIcon}>
                <TrendingUp size={20} />
              </div>

              <div>
                <span>Tu alternativa</span>

                <strong>
                  {activePlan.name} · {activePlan.months} meses
                </strong>
              </div>

              <div className={styles.summaryRate}>
                <strong>{activePlan.returnRate}%</strong>
                <span>retorno estimado</span>
              </div>
            </div>

            {/* RESULT */}
            <div className={styles.resultBox}>
              <div className={styles.resultRow}>
                <div>
                  <span>Capital invertido</span>
                  <strong>{formatCurrency(amount)}</strong>
                </div>

                <CircleDollarSign size={21} />
              </div>

              <div className={styles.resultRow}>
                <div>
                  <span>Utilidad estimada</span>
                  <strong className={styles.greenValue}>
                    {formatCurrency(utility)}
                  </strong>
                </div>

                <TrendingUp size={21} />
              </div>

              <div className={styles.resultTotal}>
                <span>Total estimado a recibir</span>

                <strong>{formatCurrency(total)}</strong>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className={styles.plansPanel}>
            <div className={styles.plansHeader}>
              <div>
                <span>Alternativas de inversión</span>

                <h3>
                  Selecciona
                  <br />
                  tu plazo.
                </h3>
              </div>

              <CalendarDays size={25} />
            </div>

            <div className={styles.plans}>
              {plans.map((plan) => {
                const isActive = selectedPlan === plan.id;

                return (
                  <button
                    key={plan.id}
                    type="button"
                    className={`${styles.planCard} ${
                      isActive ? styles.planActive : ""
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    <div className={styles.planTop}>
                      <div className={styles.planIcon}>
                        <Banknote size={19} />
                      </div>

                      <span>{plan.name}</span>

                      <ArrowUpRight size={17} />
                    </div>

                    <div className={styles.planRate}>
                      {plan.returnRate}%
                    </div>

                    <div className={styles.planDetails}>
                      <span>Plazo</span>
                      <strong>{plan.months} meses</strong>
                    </div>

                    <div className={styles.planDetails}>
                      <span>Utilidad estimada</span>

                      <strong>
                        {formatCurrency(
                          amount * (plan.returnRate / 100)
                        )}
                      </strong>
                    </div>

                    <div className={styles.planDetails}>
                      <span>Total a recibir</span>

                      <strong className={styles.planTotal}>
                        {formatCurrency(
                          amount +
                            amount *
                              (plan.returnRate / 100)
                        )}
                      </strong>
                    </div>

                    <div className={styles.planCheck}>
                      <span>
                        {isActive ? "Seleccionado" : "Seleccionar"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className={styles.annualReference}>
              <span>
                Equivalencia anual simple referencial
              </span>

              <strong>
                ≈ {annualEquivalent.toFixed(1)}% anual
              </strong>
            </div>
          </div>
        </div>

        {/* OPTIONAL MARKET COMPARISON */}
        {showComparison && (
          <div className={styles.comparison}>
            <div className={styles.comparisonHeader}>
              <div>
                <span>Referencia</span>

                <h3>
                  Compara el resultado
                  <br />
                  al mismo plazo.
                </h3>
              </div>

              <p>
                Comparación referencial utilizando las tasas
                configuradas para esta herramienta.
              </p>
            </div>

            <div className={styles.comparisonRows}>
              <ComparisonRow
                label="Banco"
                value={amount + marketBankReturn}
                base={total}
                rate={comparisonRates.bank}
              />

              <ComparisonRow
                label="Caja municipal"
                value={amount + marketMunicipalReturn}
                base={total}
                rate={comparisonRates.municipalBank}
              />

              <ComparisonRow
                label="Moro Capital"
                value={total}
                base={total}
                rate={activePlan.returnRate}
                highlight
              />
            </div>
          </div>
        )}

        {/* DISCLAIMER */}
        <div className={styles.disclaimer}>
          <span className={styles.disclaimerIcon}>
            <CircleDollarSign size={17} />
          </span>

          <p>
            Las cifras mostradas son estimaciones referenciales
            para fines informativos. La rentabilidad, plazo,
            utilidad, condiciones de rescate y demás términos
            aplicables serán los establecidos en la documentación
            contractual correspondiente.
          </p>
        </div>
      </div>
    </section>
  );
}

interface ComparisonRowProps {
  label: string;
  value: number;
  base: number;
  rate: number;
  highlight?: boolean;
}

function ComparisonRow({
  label,
  value,
  base,
  rate,
  highlight = false,
}: ComparisonRowProps) {
  const percentage =
    base > 0 ? Math.min((value / base) * 100, 100) : 0;

  return (
    <div
      className={`${styles.comparisonRow} ${
        highlight ? styles.comparisonHighlight : ""
      }`}
    >
      <div className={styles.comparisonName}>
        <span>{label}</span>
        <small>{rate}% referencial</small>
      </div>

      <div className={styles.comparisonBar}>
        <span style={{ width: `${percentage}%` }} />
      </div>

      <strong>{formatCurrency(value)}</strong>
    </div>
  );
}