"use client";

import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";

import Container from "@/components/layout/Container/Container";
import Reveal from "@/components/ui/Reveal/Reveal";
import styles from "./FeaturedProject.module.css";

const facts = [
  {
    value: "80",
    label: "Departamentos",
  },
  {
    value: "36",
    label: "Oficinas",
  },
  {
    value: "37",
    label: "Estacionamientos",
  },
  {
    value: "02",
    label: "Locales comerciales",
  },
];

export default function FeaturedProject() {
  return (
    <section
      id="proyecto-destacado"
      className={styles.project}
    >
      <Container>

        {/* =====================================
            CABECERA
        ===================================== */}

        <div className={styles.header}>

          <Reveal>
            <div className={styles.heading}>

              <h2 className={styles.title}>
                Moro
                <br />
                <strong>416</strong>
              </h2>

              <div className={styles.accent} />

            </div>
          </Reveal>


          <Reveal>
            <div className={styles.location}>

              <div className={styles.locationIcon}>
                <MapPin
                  size={18}
                  strokeWidth={1.5}
                />
              </div>

              <div className={styles.locationContent}>

                <span>
                  HUANCAYO · JUNÍN
                </span>

                <p>
                  Av. Giráldez y Ferrocarril
                </p>

              </div>

            </div>
          </Reveal>

        </div>


        {/* =====================================
            IMAGEN PRINCIPAL
        ===================================== */}

        <Reveal>
          <div className={styles.visual}>

            <Image
              src="/images/projects/moro416-hero.webp"
              alt="Moro 416 - proyecto inmobiliario en Huancayo"
              fill
              sizes="(max-width: 850px) 100vw, 90vw"
              className={styles.image}
              priority
            />

            <div className={styles.overlay} />


            <div className={styles.visualContent}>

              <span className={styles.visualLabel}>
                PROYECTO DESTACADO
              </span>

              <h3>
                Un proyecto que
                <br />
                <strong>materializa una visión.</strong>
              </h3>

              <p>
                Un desarrollo de uso mixto que integra
                departamentos, oficinas y espacios comerciales
                en una ubicación estratégica de Huancayo.
              </p>

            </div>


            <a
              href="https://www.ancosur.com/moro416"
              className={styles.explore}
            >
              <span>
                Conocer Moro 416
              </span>

              <span className={styles.exploreIcon}>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.7}
                />
              </span>
            </a>

          </div>
        </Reveal>


        {/* =====================================
            PARTE INFERIOR
        ===================================== */}

        <div className={styles.bottom}>

          <Reveal>
            <div className={styles.statement}>

              <span>
                MORO 416
              </span>

              <h3>
                Experiencia que se
                <br />
                convierte en <strong>ejecución.</strong>
              </h3>

            </div>
          </Reveal>


          <div className={styles.facts}>

            {facts.map((fact) => (

              <Reveal key={fact.label}>

                <div className={styles.fact}>

                  <strong>
                    {fact.value}
                  </strong>

                  <span>
                    {fact.label}
                  </span>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}