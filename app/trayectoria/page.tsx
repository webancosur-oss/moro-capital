"use client";

import Reveal from "@/components/ui/Reveal/Reveal";

import styles from "./page.module.css";
import TrajectoryHero from "@/components/sections/Trajectory/TrajectoryHero";
import TrackRecord from "@/components/sections/Trajectory/TrackRecord";
import ProjectTimeline from "@/components/sections/Trajectory/ProjectTimeline";
import ProjectCard from "@/components/sections/Trajectory/ProjectCard";
import { trajectoryProjects } from "@/components/sections/Trajectory/trajectory.data";

export default function Trajectory() {
  return (
    <main className={styles.page}>
      <TrajectoryHero />

      <TrackRecord />

      <ProjectTimeline />

      <section className={styles.projects}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.projectsHeader}>
              <h2>
                Proyectos que
                <br />
                <strong>dejan huella.</strong>
              </h2>

              <p>
                Una selección de desarrollos que representan la
                capacidad del grupo para transformar capital en
                proyectos inmobiliarios.
              </p>
            </div>
          </Reveal>

          <div className={styles.grid}>
            {trajectoryProjects.map((project) => (
              <ProjectCard
                key={project.name}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.closing}>
        <div className={styles.closingInner}>
          <Reveal>
            <h2>
              El capital importa.
              <br />
              <strong>Lo que construimos con él, más.</strong>
            </h2>
          </Reveal>
        </div>
      </section>
    </main>
  );
}