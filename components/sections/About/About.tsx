"use client";

import Image from "next/image";
import {
  CalendarDays,
  Users,
  House,
  Building2,
  ArrowUpRight,
} from "lucide-react";

import Container from "@/components/layout/Container/Container";
import Reveal from "@/components/ui/Reveal/Reveal";
import styles from "./About.module.css";

const metrics = [
  {
    value: "+10",
    label: "Años de experiencia",
    icon: CalendarDays,
  },
  {
    value: "+50",
    label: "Inversionistas",
    icon: Users,
  },
  {
    value: "+500",
    label: "Hogares entregados",
    icon: House,
  },
  {
    value: "+60 mil",
    label: "m² de construcción",
    icon: Building2,
  },
];

export default function About() {
  return (
    <section id="nosotros" className={styles.about}>
      <Container>
        <div className={styles.card}>
          {/* =========================
              IMAGEN
          ========================== */}
          <Reveal className={styles.imageReveal}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/about/moro416.webp"
                alt="Moro Capital"
                fill
                sizes="(max-width: 850px) 100vw, 45vw"
                className={styles.image}
              />

              <div className={styles.imageOverlay} />
            </div>
          </Reveal>

          {/* =========================
              CONTENIDO
          ========================== */}
          <div className={styles.content}>
            <Reveal>

              <h2 className={styles.title}>
                Somos
                <br />
                <strong>Moro Capital</strong>
              </h2>

              <div className={styles.line} />

              <div className={styles.text}>
                <p>
                  Moro Capital es un holding inmobiliario dedicado a
                  la creación y desarrollo de proyectos innovadores
                  que transforman el mercado.
                </p>

                <p>
                  A través de nuestras marcas, diseñamos espacios que
                  combinan calidad, rentabilidad y modernidad,
                  ofreciendo oportunidades para quienes buscan
                  invertir con visión de futuro.
                </p>
              </div>

              {/* =========================
                  MÉTRICAS
              ========================== */}
              <div className={styles.metrics}>
                {metrics.map((metric) => {
                  const Icon = metric.icon;

                  return (
                    <div
                      className={styles.metric}
                      key={metric.label}
                    >
                      <div className={styles.metricIcon}>
                        <Icon
                          size={19}
                          strokeWidth={1.6}
                        />
                      </div>

                      <div className={styles.metricInfo}>
                        <span className={styles.metricValue}>
                          {metric.value}
                        </span>

                        <span className={styles.metricLabel}>
                          {metric.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* =========================
                  BOTÓN
              ========================== */}
              <a
                href="/quienes-somos"
                className={styles.button}
              >
                <span>Conoce nuestra experiencia</span>

                <span className={styles.arrow}>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.8}
                  />
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}