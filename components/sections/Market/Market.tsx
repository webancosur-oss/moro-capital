"use client";

import {
  Home,
  TrendingUp,
  Building2,
  ArrowUpRight,
} from "lucide-react";

import Container from "@/components/layout/Container/Container";
import Reveal from "@/components/ui/Reveal/Reveal";
import styles from "./Market.module.css";

const insights = [
  {
    icon: Home,
    value: "453,578",
    label: "viviendas aproximadamente",
    title: "Demanda insatisfecha",
    text:
      "El mercado presenta una importante demanda efectiva insatisfecha de vivienda.",
  },
  {
    icon: TrendingUp,
    value: "3.0%",
    label: "PIB proyectado 2024",
    title: "Crecimiento económico",
    text:
      "El análisis del sector proyectaba para Perú uno de los mayores crecimientos entre las principales economías de la región.",
  },
  {
    icon: Building2,
    value: "+",
    label: "crédito para vivienda",
    title: "Mayor acceso",
    text:
      "El crecimiento constante del crédito para vivienda contribuye a dinamizar el mercado inmobiliario.",
  },
];

export default function Market() {
  return (
    <section id="mercado" className={styles.market}>
      <Container>

        {/* =====================================
            INTRODUCCIÓN
        ===================================== */}

        <div className={styles.introduction}>

          <Reveal>
            <div className={styles.introContent}>

              <h2 className={styles.title}>
                Un mercado con
                <br />
                <strong>oportunidades por desarrollar.</strong>
              </h2>

              <div className={styles.accent} />

            </div>
          </Reveal>

          <Reveal>
            <div className={styles.copy}>

              <p>
                El sector inmobiliario peruano presenta una demanda
                habitacional significativa y un mercado impulsado por
                el crecimiento del crédito para vivienda.
              </p>

              <p>
                Este escenario genera oportunidades para el desarrollo
                de proyectos inmobiliarios y nuevas alternativas de
                inversión.
              </p>

            </div>
          </Reveal>

        </div>


        {/* =====================================
            IMAGEN / DATOS PRINCIPALES
        ===================================== */}

        <Reveal>
          <div className={styles.marketVisual}>

            <div className={styles.visualImage}>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=90"
                alt="Desarrollo inmobiliario y ciudad"
              />

              <div className={styles.visualOverlay} />

              <div className={styles.visualContent}>

                <span>
                  ANÁLISIS DEL SECTOR
                </span>

                <h3>
                  La vivienda continúa siendo
                  <br />
                  una necesidad estructural.
                </h3>

              </div>
            </div>


            <div className={styles.visualData}>

              <div className={styles.dataNumber}>
                453,578
              </div>

              <div className={styles.dataText}>
                <strong>
                  viviendas aproximadamente
                </strong>

                <p>
                  Demanda efectiva insatisfecha
                  identificada en el análisis
                  del mercado inmobiliario.
                </p>
              </div>

            </div>

          </div>
        </Reveal>


        {/* =====================================
            INSIGHTS
        ===================================== */}

        <div className={styles.insights}>

          {insights.map((item, index) => {

            const Icon = item.icon;

            return (
              <Reveal
                key={item.title}
                className={styles.insightReveal}
              >

                <article className={styles.insight}>

                  <div className={styles.insightTop}>

                    <div className={styles.icon}>
                      <Icon
                        size={21}
                        strokeWidth={1.5}
                      />
                    </div>

                    <span className={styles.index}>
                      0{index + 1}
                    </span>

                  </div>


                  <div className={styles.insightNumber}>
                    {item.value}
                  </div>

                  <span className={styles.insightLabel}>
                    {item.label}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </article>

              </Reveal>
            );
          })}

        </div>


        {/* =====================================
            CTA
        ===================================== */}

        <Reveal>
          <div className={styles.cta}>

            <div className={styles.ctaText}>

              <h3>
                Una oportunidad comienza
                <br />
                <strong>con una visión.</strong>
              </h3>

            </div>

            <a
              href="#contacto"
              className={styles.button}
            >
              <span>
                Convercemos
              </span>

              <span className={styles.buttonIcon}>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.7}
                />
              </span>
            </a>

          </div>
        </Reveal>

      </Container>
    </section>
  );
}