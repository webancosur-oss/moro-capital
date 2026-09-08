import {
  Building2,
  ChartNoAxesCombined,
  Landmark,
} from "lucide-react";

import Reveal from "../Reveal";
import styles from "./InvestmentProof.module.css";

export default function InvestmentProof() {
  return (
    <section
      className={styles.investorProof}
      id="inversion"
      aria-label="Inversión inmobiliaria"
    >
      <div className={styles.investorContainer}>
        <div className={styles.investorProofGrid}>

          {/* =====================================
              CONTENIDO
          ===================================== */}

          <Reveal
            className={styles.investorProofContent}
          >
            <p className={styles.investorEyebrow}>
              INVERSIÓN INMOBILIARIA
            </p>

            <h2 className={styles.investorProofTitle}>
              Invierte en
              <br />
              proyectos reales.
            </h2>

            <p className={styles.investorLead}>
              Una oportunidad para participar
              en el desarrollo de activos
              inmobiliarios respaldados por
              proyectos, ejecución y una
              estrategia orientada a la
              generación de valor.
            </p>

            <div className={styles.investorProofItems}>

              <div className={styles.investorProofItem}>
                <div className={styles.investorProofItemIcon}>
                  <Building2
                    size={17}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </div>

                <div className={styles.investorProofItemText}>
                  <span>
                    Activos inmobiliarios
                  </span>

                  <small>
                    Proyectos tangibles
                  </small>
                </div>
              </div>

              <div className={styles.investorProofItem}>
                <div className={styles.investorProofItemIcon}>
                  <Landmark
                    size={17}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </div>

                <div className={styles.investorProofItemText}>
                  <span>
                    Desarrollo de proyectos
                  </span>

                  <small>
                    Ejecución y crecimiento
                  </small>
                </div>
              </div>

              <div className={styles.investorProofItem}>
                <div className={styles.investorProofItemIcon}>
                  <ChartNoAxesCombined
                    size={17}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </div>

                <div className={styles.investorProofItemText}>
                  <span>
                    Gestión y estrategia
                  </span>

                  <small>
                    Visión orientada a valor
                  </small>
                </div>
              </div>

            </div>
          </Reveal>

          {/* =====================================
              VISUAL
          ===================================== */}

          <Reveal
            className={styles.investorProofVisual}
            delay={0.1}
          >
            <div
              className={styles.investorProofGlow}
              aria-hidden="true"
            />

            <div
              className={styles.investorProofTower}
              aria-hidden="true"
            />

            <div className={styles.investorProofCaption}>
              <span>
                MORO 416
              </span>

              <small>
                HUANCAYO · PERÚ
              </small>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}