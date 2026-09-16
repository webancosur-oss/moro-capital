"use client";

import Reveal from "@/components/ui/Reveal/Reveal";
import styles from "./TrackRecord.module.css";

const stats = [
  {
    value: "S/ 100 MM",
    label: "de capital invertido a través de fondos propios, ventas directas e inversionistas.",
  },
  {
    value: "9",
    label: "proyectos financiados por el grupo.",
  },
  {
    value: "212",
    label: "propiedades dentro del portafolio.",
  },
];

export default function TrackRecord() {
  return (
    <section id="track-record" className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.header}>
            <div>
              <h2>
                Capital que se
                <br />
                convierte en <strong>desarrollo.</strong>
              </h2>
            </div>

            <p>
              La trayectoria de Moro Capital se refleja en los proyectos
              desarrollados y en el capital movilizado para hacerlos
              realidad.
            </p>
          </div>
        </Reveal>

        <div className={styles.stats}>
          {stats.map((stat) => (
            <Reveal key={stat.value}>
              <article className={styles.stat}>
                <strong>{stat.value}</strong>
                <p>{stat.label}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}