"use client";

import {
  Building2,
  Check,
  Construction,
  Landmark,
  MapPin,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

import Button from "../Button/Button";
import Reveal from "../Reveal";
import styles from "./Moro416.module.css";

const projectFacts = [
  {
    value: "80",
    label: "Departamentos",
  },
  {
    value: "36",
    label: "Oficinas",
  },
  {
    value: "37",
    label: "Cocheras",
  },
  {
    value: "2",
    label: "Locales comerciales",
  },
];

const technicalFacts = [
  {
    label: "Área del terreno",
    value: "571 m²",
  },
  {
    label: "Área promedio",
    value: "88 m²",
  },
  {
    label: "Área techada vendible",
    value: "9,953.2 m²",
  },
  {
    label: "Área techada construida",
    value: "10,700 m²",
  },
  {
    label: "Duración del proyecto",
    value: "35 meses",
  },
  {
    label: "Precio promedio*",
    value: "PEN 250,000",
  },
];

const progressItems = [
  {
    title: "Resultado comercial exitoso",
    description: "Subida de precio en 20%.",
    icon: TrendingUp,
  },
  {
    title: "Contrato de construcción firmado",
    description: "Contrato de construcción firmado.",
    icon: Construction,
  },
  {
    title: "Inicio de construcción",
    description: "Inicio de construcción.",
    icon: Building2,
  },
  {
    title: "Financiamiento y aporte completados",
    description: "Financiamiento y aporte completados.",
    icon: Landmark,
  },
];

export default function Moro416() {
  return (
    <section
      id="moro416"
      className={styles.section}
    >
      {/* HERO */}

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <Reveal className={styles.heroCopy}>

                <h2 className={styles.heroTitle}>
                  MORO<span>416</span>
                </h2>

                <div className={styles.heroLocation}>
                  <MapPin
                    size={18}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />

                  <div>
                    <strong>
                      Av. Giráldez y Ferrocarril
                    </strong>

                    <span>
                      Huancayo
                    </span>
                  </div>
                </div>

                <p className={styles.heroText}>
                  Proyecto inmobiliario con
                  departamentos, oficinas, cocheras y
                  locales comerciales.
                </p>

                <div className={styles.heroActions}>
                  <Button
                    href="#formulario"
                    text="Solicitar información"
                    suffixIcon="arrow-up-right"
                    variant="light"
                    size="md"
                    width="auto"
                    height={54}
                    ariaLabel="Solicitar información sobre Moro 416"
                  />
                </div>

                <div className={styles.heroBottomInfo}>
                  <div>
                    <span>LANZAMIENTO</span>
                    <strong>2023</strong>
                  </div>

                  <div>
                    <span>UBICACIÓN</span>
                    <strong>HUANCAYO</strong>
                  </div>
                </div>
              </Reveal>

              <Reveal
                className={styles.heroImageWrap}
                delay={0.08}
              >
                <div className={styles.heroImage}>
                  <Image
                    src="/assets/inversionistas/projects/moro-tower.webp"
                    alt="Edificio MORO 416 en Huancayo"
                    fill
                    priority
                    sizes="
                      (max-width: 800px) 100vw,
                      52vw
                    "
                    className={styles.heroImageElement}
                  />

                  <div className={styles.imageShade} />

                  <div className={styles.imageProject}>
                    <span>MORO</span>
                    <strong>416</strong>
                  </div>

                  <div className={styles.imageBadge}>
                    <span>FRENTE A</span>
                    <strong>REAL PLAZA</strong>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className={styles.heroProgress}>
          <div className={styles.container}>
            <div className={styles.progressBar}>
              <span />

              <div className={styles.progressLabels}>
                <span>
                  AVANCE DE VENTAS
                </span>

                <strong>
                  55% VENDIDO
                </strong>

                <span>
                  45% DISPONIBLE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECT NUMBERS */}

      <section className={styles.numbers}>
        <div className={styles.container}>
          <Reveal className={styles.sectionIntro}>
            <div>
              <span className={styles.label}>
                MORO 416
              </span>

              <h3>
                Una operación
                <br />
                de escala real.
              </h3>
            </div>

            <p>
              Un proyecto de uso mixto desarrollado en
              Huancayo, con una propuesta que integra
              diferentes unidades inmobiliarias.
            </p>
          </Reveal>

          <Reveal
            className={styles.numberGrid}
            delay={0.08}
          >
            {projectFacts.map((fact) => (
              <article
                key={fact.label}
                className={styles.numberCard}
              >
                <strong>
                  {fact.value}
                </strong>

                <span>
                  {fact.label}
                </span>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* PROJECT INFORMATION */}

      <section className={styles.information}>
        <div className={styles.container}>
          <div className={styles.informationGrid}>
            <Reveal className={styles.informationCopy}>
              <span className={styles.label}>
                DATOS DEL PROYECTO
              </span>

              <h3>
                La dimensión detrás
                <br />
                de MORO 416.
              </h3>

              <p>
                Información correspondiente a la ficha
                del proyecto presentada en el material
                corporativo.
              </p>
            </Reveal>

            <Reveal
              className={styles.technicalGrid}
              delay={0.08}
            >
              {technicalFacts.map((fact) => (
                <article
                  key={fact.label}
                  className={styles.technicalCard}
                >
                  <span>
                    {fact.label}
                  </span>

                  <strong>
                    {fact.value}
                  </strong>
                </article>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* SALES PROGRESS */}

      <section className={styles.progressSection}>
        <div className={styles.container}>
          <div className={styles.progressLayout}>
            <Reveal className={styles.progressVisual}>
              <div className={styles.progressCard}>
                <div className={styles.progressTop}>
                  <span>
                    AVANCE GLOBAL
                  </span>

                  <span>
                    30.04.2025
                  </span>
                </div>

                <div className={styles.progressRing}>
                  <svg
                    viewBox="0 0 220 220"
                    aria-hidden="true"
                  >
                    <circle
                      className={styles.ringTrack}
                      cx="110"
                      cy="110"
                      r="91"
                    />

                    <circle
                      className={styles.ringValue}
                      cx="110"
                      cy="110"
                      r="91"
                    />
                  </svg>

                  <div className={styles.ringText}>
                    <strong>
                      55%
                    </strong>

                    <span>
                      vendido
                    </span>
                  </div>
                </div>

                <div className={styles.progressSummary}>
                  <div>
                    <span>
                      VENDIDO
                    </span>

                    <strong>
                      55%
                    </strong>
                  </div>

                  <div>
                    <span>
                      DISPONIBLE
                    </span>

                    <strong>
                      45%
                    </strong>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal
              className={styles.progressCopy}
              delay={0.1}
            >
              <span className={styles.label}>
                EVOLUCIÓN
              </span>

              <h3>
                Del resultado
                <br />
                a la construcción.
              </h3>

              <p>
                MORO 416 registra hitos concretos en su
                evolución comercial y constructiva.
              </p>

              <div className={styles.timeline}>
                {progressItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className={styles.timelineItem}
                    >
                      <div className={styles.timelineIcon}>
                        <Icon
                          size={17}
                          strokeWidth={1.6}
                          aria-hidden="true"
                        />
                      </div>

                      <div className={styles.timelineText}>
                        <h4>
                          {item.title}
                        </h4>

                        <p>
                          {item.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className={styles.progressAction}>
                <Button
                  href="#formulario"
                  text="Conocer oportunidad"
                  suffixIcon="arrow-up-right"
                  variant="olive"
                  size="md"
                  width="auto"
                  height={54}
                  ariaLabel="Conocer oportunidad de inversión en Moro 416"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL SCALE */}

      <section className={styles.finalSection}>
        <div className={styles.container}>
          <Reveal className={styles.finalCard}>
            <div className={styles.finalMain}>
              <span className={styles.label}>
                ESCALA DEL PROYECTO
              </span>

              <strong>
                10,700 m²
              </strong>

              <p>
                Área techada construida.
              </p>
            </div>

            <div className={styles.finalDetails}>
              <div>
                <span>
                  ÁREA TECHADA VENDIBLE
                </span>

                <strong>
                  9,953.2 m²
                </strong>
              </div>

              <div>
                <span>
                  PRECIO PROMEDIO*
                </span>

                <strong>
                  PEN 250,000
                </strong>
              </div>

              <div>
                <span>
                  DURACIÓN
                </span>

                <strong>
                  35 meses
                </strong>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NOTE */}

      <footer className={styles.note}>
        <div className={styles.container}>
          <div className={styles.noteInner}>
            <span>
              MORO CAPITAL
            </span>

            <p>
              Información referencial según presentación
              corporativa. Datos correspondientes a la
              información disponible en el brochure.
              Información del proyecto indicada a febrero
              de 2025 y avance de ventas al 30/04/2025,
              según corresponda.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}