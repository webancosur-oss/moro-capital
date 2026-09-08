"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

import { FAQS } from "@/data/investors";

import Reveal from "../Reveal";
import styles from "./InvestorFaq.module.css";

export default function InvestorFaq() {
  const [active, setActive] = useState<number | null>(0);

  const featuredFaqs = FAQS.slice(0, 5);

  return (
    <section
      className={styles.section}
      id="faq"
    >
      <div className="container">
        <div className={styles.grid}>

          <Reveal className={styles.intro}>
            <span className={styles.label}>
              PREGUNTAS FRECUENTES
            </span>

            <h2>
              Para
              <br />
              inversionistas.
            </h2>

            <p className={styles.lead}>
              Resuelve las principales dudas sobre
              MORO CAPITAL antes de conversar
              con un asesor.
            </p>

            <Link
              href="/faq"
              className={styles.cta}
            >
              <span>Ver todas las preguntas</span>

              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </Link>
          </Reveal>

          <Reveal
            className={styles.list}
            delay={0.08}
          >
            {featuredFaqs.map((faq, index) => {
              const isOpen = active === index;

              return (
                <article
                  key={faq.question}
                  className={`${styles.item} ${
                    isOpen ? styles.itemOpen : ""
                  }`}
                >
                  <button
                    type="button"
                    className={styles.question}
                    onClick={() =>
                      setActive(
                        isOpen ? null : index
                      )
                    }
                    aria-expanded={isOpen}
                  >
                    <span className={styles.number}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className={styles.questionText}>
                      {faq.question}
                    </span>

                    <span className={styles.icon}>
                      <ChevronDown
                        size={18}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </span>
                  </button>

                  <div className={styles.answer}>
                    <div className={styles.answerInner}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}

            <div className={styles.listFooter}>
              <span>
                ¿Tienes otra pregunta?
              </span>

              <Link href="/faq">
                <span>
                  Ver preguntas frecuentes
                </span>

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}