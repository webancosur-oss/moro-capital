"use client";

import {
  BadgeCheck,
  Building2,
  ChartNoAxesCombined,
  CircleDollarSign,
} from "lucide-react";



import styles from "./InvestmentPillars.module.css";
import Reveal from "../Reveal";
import Button from "../Button/Button";

const pillars = [
  {
    id: "group",
    title: "Respaldo empresarial",
    description:
      "Moro Capital cuenta con el respaldo de un grupo económico conformado por empresas vinculadas al desarrollo inmobiliario.",
    icon: Building2,
  },
  {
    id: "fixed",
    title: "Fondo de renta fija",
    description:
      "El fondo invierte en instrumentos de renta fija destinados a financiar la construcción de proyectos inmobiliarios de ANCOSUR.",
    icon: CircleDollarSign,
  },
  {
    id: "management",
    title: "Repago vinculado al proyecto",
    description:
      "El repago del capital está relacionado con el desarrollo de los proyectos, bajo una gestión financiera orientada a la eficiencia y transparencia.",
    icon: ChartNoAxesCombined,
  },
  {
    id: "assets",
    title: "Respaldo operativo y patrimonial",
    description:
      "Moro Capital está respaldado por sus operaciones y por el patrimonio del holding inmobiliario, según la documentación del fondo.",
    icon: BadgeCheck,
  },
];

export default function InvestmentPillars() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal className={styles.header}>
          <div className={styles.headerMain}>
            <h2>
              Invertimos en oportunidades.
              <span>Construimos valor.</span>
            </h2>
          </div>

          <div className={styles.headerSide}>
            <p>
              Una alternativa de inversión vinculada al desarrollo inmobiliario,
              con estructura de renta fija y respaldo empresarial.
            </p>

            <Button
              href="#formulario"
              text="Conocer la inversión"
              suffixIcon="arrow-up-right"
              variant="light"
              size="sm"
              ariaLabel="Conocer la inversión de Moro Capital"
            />
          </div>
        </Reveal>

        <div className={styles.grid}>
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <Reveal
                key={pillar.id}
                className={styles.card}
                delay={index * 0.05}
              >
                <div className={styles.cardTop}>
                  <div className={styles.icon}>
                    <Icon size={21} strokeWidth={1.5} />
                  </div>
                </div>

                <div className={styles.content}>
                  <h3>{pillar.title}</h3>

                  <p>{pillar.description}</p>
                </div>

                <span
                  className={styles.line}
                  aria-hidden="true"
                />
              </Reveal>
            );
          })}
        </div>

        <div className={styles.bottom}>
          <span>MORO CAPITAL</span>

          <p>
            Fondo de deuda privada dirigido a inversionistas privados. Las
            condiciones, riesgos y factores de liquidez se encuentran
            establecidos en la documentación contractual correspondiente.
          </p>
        </div>
      </div>
    </section>
  );
}