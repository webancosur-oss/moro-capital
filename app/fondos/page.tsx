import InvestmentSimulator from "@/components/sections/InvestmentSimulator/InvestmentSimulator";
import styles from "./page.module.css";

export default function FondosPage() {
  return (
    <main className={styles.page}>

      {/* =====================================================
          CONTEXTO DEL MERCADO
      ===================================================== */}
      <section className={styles.marketSection}>
        <div className={styles.marketContainer}>

          <div className={styles.marketContent}>

            <div className={styles.marketTitle}>
              <span className={styles.marketKicker}>
                El contexto del mercado
              </span>

              <h1>
                Hay más demanda de
                <br />
                vivienda que oferta
                <br />
                disponible.
              </h1>
            </div>

            <div className={styles.marketText}>

              <p>
                El mercado inmobiliario peruano presenta una demanda
                significativa de vivienda que todavía no encuentra una
                oferta suficiente. Esta brecha representa una oportunidad
                para desarrollar proyectos en ubicaciones estratégicas y
                atender necesidades reales del mercado.
              </p>

              <p>
                De acuerdo con el estudio de mercado de edificaciones de
                CAPECO, la demanda efectiva de vivienda alcanza
                aproximadamente <strong>453,578 hogares</strong>. Frente a
                esta demanda, la oferta inmediata disponible resulta
                considerablemente menor.
              </p>

              <p>
                A esto se suma la evolución del acceso al financiamiento
                para vivienda. El crecimiento del crédito hipotecario
                amplía progresivamente la capacidad de compra y sostiene
                una demanda que requiere nuevos proyectos inmobiliarios.
              </p>

              <p className={styles.highlightText}>
                Esta diferencia entre demanda y oferta es uno de los
                factores que sostiene el desarrollo de nuevos proyectos
                inmobiliarios y genera oportunidades para el capital
                privado.
              </p>

            </div>
          </div>

          {/* =================================================
              DATA CARD
          ================================================= */}
          <div className={styles.marketData}>

            <div className={styles.mainData}>
              <strong>453,578</strong>

              <span>
                viviendas de demanda efectiva
                insatisfecha, aproximadamente
              </span>
            </div>

            <div className={styles.divider} />

            <div className={styles.dataRows}>

              <div className={styles.dataRow}>
                <div className={styles.dataLabel}>
                  <span>Demanda potencial</span>
                </div>

                <div className={styles.dataBar}>
                  <span
                    className={styles.dataBarLarge}
                  />
                </div>

                <strong>913,986</strong>
              </div>

              <div className={styles.dataRow}>
                <div className={styles.dataLabel}>
                  <span>Demanda efectiva</span>
                </div>

                <div className={styles.dataBar}>
                  <span
                    className={styles.dataBarMedium}
                  />
                </div>

                <strong>483,824</strong>
              </div>

              <div className={styles.dataRow}>
                <div className={styles.dataLabel}>
                  <span>
                    Con acceso a
                    <br />
                    crédito
                  </span>
                </div>

                <div className={styles.dataBar}>
                  <span
                    className={styles.dataBarSmall}
                  />
                </div>

                <strong>58,000</strong>
              </div>

            </div>

            <div className={styles.dataFooter}>
              <span>Demanda inmobiliaria</span>

              <span>Mercado con oportunidad</span>
            </div>

          </div>
        </div>

        {/* =================================================
            BOTTOM INSIGHTS
        ================================================= */}
        <div className={styles.insightsContainer}>

          <div className={styles.insight}>
            <strong>453,578</strong>

            <span>
              viviendas de demanda efectiva
              insatisfecha
            </span>
          </div>

          <div className={styles.insight}>
            <strong>+</strong>

            <span>
              crecimiento del acceso al
              financiamiento para vivienda
            </span>
          </div>

          <div className={styles.insight}>
            <strong>↗</strong>

            <span>
              nuevos proyectos para atender
              una demanda existente
            </span>
          </div>

        </div>
      </section>

      {/* =====================================================
          SIMULADOR
      ===================================================== */}
      <InvestmentSimulator />

    </main>
  );
}