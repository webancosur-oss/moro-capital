"use client";

import { INVESTMENT_PLANS } from "@/data/investors";

import Reveal from "../Reveal";
import Button from "../Button/Button";

import styles from "./InvestmentPlans.module.css";

export default function InvestmentPlans() {
  return (
    <section id="planes" className={styles.plansSection}>
      <div className="container">
        <Reveal className={styles.header}>
          <div className={styles.headerMain}>
            <h2>
              Una alternativa para
              <br />
              cada horizonte.
            </h2>
          </div>

          <div className={styles.headerSide}>
            <div className={styles.headerMeta}>
              <span>FONDO DE RENTA FIJA</span>
              <span>S/ 10,000 MÍNIMO</span>
            </div>

            <p>
              Elige el plazo que mejor se adapte a tu estrategia.
              Todas las alternativas se estructuran bajo las
              condiciones establecidas en el contrato de inversión.
            </p>
          </div>
        </Reveal>

        <div className={styles.summary}>
          <div className={styles.summaryItem}>
            <span>TIPO DE FONDO</span>
            <strong>Renta fija</strong>
          </div>

          <div className={styles.summaryItem}>
            <span>MONEDA</span>
            <strong>Sol peruano</strong>
          </div>

          <div className={styles.summaryItem}>
            <span>TICKET MÍNIMO</span>
            <strong>S/ 10,000</strong>
          </div>

          <div className={styles.summaryItem}>
            <span>DURACIÓN</span>
            <strong>18 — 36 meses</strong>
          </div>
        </div>

        <div className={styles.plansGrid}>
          {INVESTMENT_PLANS.map((plan, index) => {
            const featured = plan.featured;

            return (
              <Reveal
                key={plan.id}
                className={`${styles.planCard} ${
                  featured ? styles.planCardFeatured : ""
                }`}
                delay={index * 0.08}
              >
                <div className={styles.cardAmbient} />

                <div className={styles.cardTop}>
                  <div className={styles.cardIdentity}>
                    <span className={styles.cardType}>
                      ALTERNATIVA
                    </span>

                    <h3>{plan.name}</h3>
                  </div>

                  {featured && (
                    <span className={styles.featuredBadge}>
                      Más solicitado
                    </span>
                  )}
                </div>

                <div className={styles.primaryMetric}>
                  <span>TIR</span>

                  <div className={styles.rate}>
                    <strong>{plan.rate}</strong>
                    <small>%</small>
                  </div>

                  <p>
                    TIR estimada según alternativa
                  </p>
                </div>

                <div className={styles.cardDivider}>
                  <span />
                </div>

                <div className={styles.details}>
                  <div className={styles.detail}>
                    <span>PLAZO</span>

                    <strong>
                      {plan.months}
                      <small> meses</small>
                    </strong>
                  </div>

                  <div className={styles.detail}>
                    <span>TICKET MÍNIMO</span>

                    <strong>S/ 10,000</strong>
                  </div>
                </div>

                <div className={styles.investmentInfo}>
                  <div className={styles.infoRow}>
                    <span>MONEDA</span>
                    <strong>PEN · Sol peruano</strong>
                  </div>

                  <div className={styles.infoRow}>
                    <span>PAGO DE UTILIDAD</span>
                    <strong>Al cumplimiento del plazo</strong>
                  </div>

                  <div className={styles.infoRow}>
                    <span>LIQUIDEZ</span>
                    <strong>
                      Rescate anticipado sujeto a condiciones
                    </strong>
                  </div>
                </div>

                <div className={styles.cardBottom}>
                  <div className={styles.bottomLabel}>
                    <span>CONDICIONES CONTRACTUALES</span>
                    <small>Consulta disponibilidad</small>
                  </div>

                  <Button
                    href="#formulario"
                    text="Consultar inversión"
                    suffixIcon="arrow-up-right"
                    variant={featured ? "light" : "outline"}
                    size="sm"
                    className={styles.planButton}
                    ariaLabel={`Consultar inversión ${plan.name}`}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className={styles.disclaimer}>
          <div className={styles.disclaimerMark}>
            MORO CAPITAL
          </div>

          <p>
            Las cifras mostradas corresponden a la información
            corporativa suministrada y son referenciales. La TIR,
            los plazos, el pago de utilidades y las condiciones de
            rescate están sujetos a la documentación contractual
            vigente.
          </p>
        </div>

        <div className={styles.legalNote}>
          <span>INFORMACIÓN PARA EL INVERSIONISTA</span>

          <p>
            MORO CAPITAL — Fondo de deuda privada dirigido a
            inversionistas privados o a quienes cumplan con las
            condiciones establecidas. El fondo no se encuentra
            supervisado por la SMV. Los principales factores de
            riesgo y liquidez se encuentran establecidos en el
            contrato de mutuo dinerario.
          </p>
        </div>
      </div>
    </section>
  );
}