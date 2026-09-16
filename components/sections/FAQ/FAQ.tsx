"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import Reveal from "@/components/ui/Reveal/Reveal";
import styles from "./FAQ.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "¿Estoy comprando un departamento o prestando dinero?",
    answer:
      "Prestando. Firmas un contrato de mutuo dinerario con Ancosur SAC: entregas capital por un plazo definido y recibes el capital más una utilidad pactada. No adquieres la propiedad de ninguna unidad ni cuotas de participación de un fondo regulado.",
  },
  {
    question: "¿Qué pasa si un proyecto se vende más lento de lo previsto?",
    answer:
      "El repago está ligado al desarrollo de los proyectos, así que un retraso en ventas puede afectar los plazos. Por eso el capital se reparte entre nueve proyectos en distintas etapas y el grupo mantiene preventas por encima del 60% antes de comprometer financiamiento. Aun así, el riesgo existe y está descrito en el contrato.",
  },
  {
    question: "¿Puedo retirar mi dinero antes del plazo?",
    answer:
      "Sí. Debes solicitarlo con un mínimo de 30 días hábiles de anticipación y coordinarlo con tu asesor. La condición es que renuncias a toda la utilidad generada hasta la fecha del retiro: recuperas el capital, no el rendimiento.",
  },
  {
    question: "¿Por qué la rentabilidad es mayor que la de un banco?",
    answer:
      "Porque el riesgo es distinto. Un depósito bancario está cubierto por el Fondo de Seguro de Depósitos y tiene una estructura de riesgo diferente. En este caso, el capital financia directamente el desarrollo de proyectos inmobiliarios, sin la cobertura de un seguro de depósito, y esa diferencia de riesgo está relacionada con el rendimiento.",
  },
  {
    question: "¿En qué moneda invierto y cuál es el mínimo?",
    answer:
      "En soles, desde S/ 10,000. Pueden invertir personas naturales o jurídicas. El tamaño objetivo de la captación actual es de S/ 7,500,000.",
  },
  {
    question: "¿Cuándo recibo la utilidad?",
    answer:
      "Al cumplirse el plazo definido en tu contrato, según los flujos que generen los proyectos. Durante la vigencia recibes un reporte mensual con el estado de tu inversión.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className={styles.section} id="preguntas-frecuentes">
      <div className={styles.container}>

        <Reveal>
          <header className={styles.header}>
            <div className={styles.heading}>
              <h2>
                Preguntas que
                <br />
                <strong>merecen respuesta.</strong>
              </h2>
            </div>

            <p>
              Antes de invertir, queremos que tengas claridad
              sobre cómo funciona la inversión, sus plazos y
              los principales aspectos que debes considerar.
            </p>
          </header>
        </Reveal>

        <Reveal>
          <div className={styles.faqList}>
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={item.question}
                  className={`${styles.item} ${
                    isOpen ? styles.open : ""
                  }`}
                >
                  <button
                    type="button"
                    className={styles.question}
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span>{item.question}</span>

                    <span
                      className={styles.icon}
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <Minus
                          size={15}
                          strokeWidth={1.5}
                        />
                      ) : (
                        <Plus
                          size={15}
                          strokeWidth={1.5}
                        />
                      )}
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className={styles.answerWrapper}
                    aria-hidden={!isOpen}
                  >
                    <div className={styles.answer}>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>

        <Reveal>
          <div className={styles.bottom}>
            <p>
              ¿No encuentras lo que buscas?
            </p>

            <a href="/contacto">
              Conversa con nuestro equipo
              <span>↗</span>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}