"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal/Reveal";
import { TrajectoryProject } from "./trajectory.data";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: TrajectoryProject;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Reveal>
      <article className={styles.card}>
        <div className={styles.imageWrap}>
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="
              (max-width: 700px) 100vw,
              (max-width: 1100px) 50vw,
              33vw
            "
            className={styles.image}
            unoptimized
          />

          <div className={styles.imageOverlay} />

          <span className={styles.status}>
            {project.status}
          </span>

          <div className={styles.imageBottom}>
            <span>{project.period}</span>

            <div className={styles.icon}>
              <ArrowUpRight size={17} strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div>
            <h3>{project.name}</h3>
            <span>{project.location}</span>
          </div>

          <p>{project.description}</p>
        </div>
      </article>
    </Reveal>
  );
}