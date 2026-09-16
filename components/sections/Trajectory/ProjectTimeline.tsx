"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal/Reveal";
import { trajectoryProjects } from "./trajectory.data";
import styles from "./ProjectTimeline.module.css";

function getStatusClass(status: string) {
  switch (status) {
    case "Liquidado":
      return styles.liquidated;

    case "Cierre":
      return styles.closing;

    default:
      return styles.active;
  }
}

export default function ProjectTimeline() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal>
          <div className={styles.heading}>
            <h2>
              Dónde está
              <br />
              <strong>trabajando.</strong>
            </h2>

            <p>
              Proyectos que forman parte del portafolio presentado
              en el track record de Moro Capital.
            </p>
          </div>
        </Reveal>

        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <span>Proyecto</span>
            <span>Periodo</span>
            <span>Estado</span>
            <span>Avance de ventas</span>
            <span />
          </div>

          {trajectoryProjects.map((project) => (
            <Reveal key={project.name}>
              <article className={styles.row}>
                <div className={styles.projectName}>
                  <strong>{project.name}</strong>
                  <span>{project.location}</span>
                </div>

                <div className={styles.period}>
                  <strong>{project.period}</strong>
                  <span>periodo</span>
                </div>

                <div>
                  <span
                    className={`${styles.status} ${getStatusClass(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className={styles.progress}>
                  <div className={styles.progressTop}>
                    <span>Avance de ventas</span>
                    <strong>{project.progress}%</strong>
                  </div>

                  <div className={styles.progressBar}>
                    <span
                      style={{
                        width: `${project.progress}%`,
                      }}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  className={styles.arrow}
                  aria-label={`Ver ${project.name}`}
                >
                  <ArrowUpRight size={17} strokeWidth={1.5} />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}