"use client";

import {
  Building2,
  ChartNoAxesCombined,
  Landmark,
  Layers3,
  WalletCards,
} from "lucide-react";

import { MODEL_STEPS } from "@/data/investors";
import styles from "./InvestmentModel.module.css";
import Reveal from "../Reveal";

const modelIcons = [
  WalletCards,
  Layers3,
  Building2,
  Landmark,
  ChartNoAxesCombined,
];

const modelLabels = [
  "CAPITAL",
  "ESTRUCTURACIÓN",
  "DESARROLLO",
  "GESTIÓN",
  "RESULTADO",
];

const cardClasses = [
  styles.cardCapital,
  styles.cardStructure,
  styles.cardDevelopment,
  styles.cardManagement,
  styles.cardResult,
];

const revealDelays = [0.08, 0.14, 0.2, 0.26, 0.32];

export default function InvestmentModel() {
  return (
    <section
      id="modelo"
      className={styles.investmentModel}
      aria-labelledby="investment-model-title"
    >
      <div className={styles.container}>
        <div className={styles.mosaic}>

          {/* =================================================
              INTRO
          ================================================= */}

          <Reveal
            className={styles.intro}
            delay={0.04}
          >
            <div className={styles.introInner}>
              <h2 id="investment-model-title">
                Del capital al
                <br />
                desarrollo
                <br />
                inmobiliario.
              </h2>

              <p>
                Una estructura que conecta capital, selección de proyectos,
                desarrollo inmobiliario y generación de valor.
              </p>
            </div>
          </Reveal>

          {/* =================================================
              CARDS
          ================================================= */}

          {MODEL_STEPS.slice(0, 5).map((step, index) => {
            const Icon = modelIcons[index];

            return (
              <Reveal
                key={`${step.title}-${index}`}
                className={`${styles.card} ${cardClasses[index]}`}
                delay={revealDelays[index]}
              >
                <div className={styles.cardInner}>

                  <div className={styles.cardTop}>
                    <div
                      className={styles.cardIcon}
                      aria-hidden="true"
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.55}
                      />
                    </div>

                    <span className={styles.cardLabel}>
                      {modelLabels[index]}
                    </span>
                  </div>

                  <div className={styles.cardContent}>
                    <h3>{step.title}</h3>

                    <p>{step.description}</p>
                  </div>

                </div>
              </Reveal>
            );
          })}

          {/* =================================================
              DECORACIÓN
          ================================================= */}

          <div
            className={styles.decor}
            aria-hidden="true"
          >
            <span className={styles.decorBlocks}>
              <i />
              <i />
              <i />
              <i />
            </span>

            <span className={styles.decorOrganicTop} />

            <span className={styles.decorOrganicBottom} />
          </div>

        </div>
      </div>
    </section>
  );
}