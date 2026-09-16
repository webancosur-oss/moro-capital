"use client";

import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal/Reveal";
import styles from "./TrajectoryHero.module.css";

export default function TrajectoryHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground} />

      <div className={styles.heroOverlay} />

      <div className={styles.heroContent}>
        <Reveal>
          <h1>
            Dónde está
            <br />
            trabajando
            <br />
            <strong>el capital.</strong>
          </h1>
        </Reveal>

        <Reveal>
          <div className={styles.heroBottom}>
            <p>
              Una trayectoria construida a través de proyectos
              inmobiliarios desarrollados, financiados y gestionados
              por el grupo.
            </p>

            <Link href="#track-record" className={styles.scrollButton}>
              <span>Ver trayectoria</span>
              <ArrowDownRight size={18} strokeWidth={1.7} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}