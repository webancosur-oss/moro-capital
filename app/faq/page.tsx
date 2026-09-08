"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

import { FAQS } from "@/data/investors";

import Reveal from "@/components/Reveal";
import styles from "./FaqPage.module.css";

export default function FaqPage() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <main className={styles.page}>

      {/* HERO */}

      <section className={styles.hero}>
        <div className="container">
          <Reveal className={styles.heroInner}>
            <Link
              href="/"
              className={styles.back}
            >
              <ArrowLeft
                size={17}
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <span>
                Volver
              </span>
            </Link>

            <div className={styles.heroContent}>
              <div className={styles.heroMain}>
                <span className={styles.label}>
                  MORO CAPITAL
                </span>

                <h1>
                  Preguntas
                  <br />
                  frecuentes.
                </h1>
              </div>

              <p className={styles.heroLead}>
                Encuentra información sobre la
                estructura, condiciones y
                funcionamiento de MORO CAPITAL
                antes de conversar con un asesor.
              </p>
            </div>
          </Reveal>
        </div>
      </section>


      {/* FAQ */}

      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqLayout}>

            <Reveal className={styles.side}>
              <span className={styles.sideNumber}>
                01
              </span>

              <div className={styles.sideContent}>
                <strong>
                  Información para
                  inversionistas.
                </strong>

                <p>
                  Revisa las principales preguntas
                  relacionadas con MORO CAPITAL y
                  su modelo de inversión.
                </p>
              </div>
            </Reveal>


            <Reveal
              className={styles.list}
              delay={0.08}
            >
              {FAQS.map((faq, index) => {
                const isOpen = active === index;

                return (
                  <article
                    key={faq.question}
                    className={`${styles.item} ${
                      isOpen
                        ? styles.itemOpen
                        : ""
                    }`}
                  >
                    <button
                      type="button"
                      className={styles.question}
                      onClick={() =>
                        setActive(
                          isOpen
                            ? null
                            : index
                        )
                      }
                      aria-expanded={isOpen}
                    >
                      <span
                        className={styles.number}
                      >
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span
                        className={
                          styles.questionText
                        }
                      >
                        {faq.question}
                      </span>

                      <span
                        className={styles.icon}
                      >
                        <ChevronDown
                          size={18}
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </span>
                    </button>

                    <div
                      className={styles.answer}
                    >
                      <div
                        className={
                          styles.answerInner
                        }
                      >
                        <p>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </Reveal>

          </div>
        </div>
      </section>


      {/* CTA */}

      <section className={styles.ctaSection}>
        <div className="container">
          <Reveal className={styles.ctaCard}>

            <div className={styles.ctaMain}>
              <span className={styles.ctaLabel}>
                ¿TIENES MÁS PREGUNTAS?
              </span>

              <h2>
                Conversemos sobre
                <br />
                tu inversión.
              </h2>
            </div>

            <div className={styles.ctaAside}>
              <p>
                Un asesor puede orientarte sobre
                las alternativas disponibles,
                condiciones y documentación
                correspondiente.
              </p>

              <Link
                href="/#formulario"
                className={styles.ctaButton}
              >
                <span>
                  Hablar con un asesor
                </span>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </Link>
            </div>

          </Reveal>

          <div className={styles.footer}>
            <span>
              MORO CAPITAL
            </span>

            <p>
              La información presentada es
              referencial. Las condiciones aplicables
              se encuentran sujetas a la documentación
              contractual vigente.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}