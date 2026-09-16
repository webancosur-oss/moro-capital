"use client";

import {
  Palmtree,
  Landmark,
  Building2,
  Map,
  HardHat,
  Factory,
  Sprout,
  ArrowUpRight,
} from "lucide-react";

import Container from "@/components/layout/Container/Container";
import Reveal from "@/components/ui/Reveal/Reveal";
import styles from "./Group.module.css";

const groupLines = [
  {
    icon: Palmtree,
    title: "Resort Club",
    description:
      "Un moderno Resort Club en la Selva Central, con un modelo de comercialización por suscriptores.",
    image:
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1600&q=85",
  },
  {
    icon: Landmark,
    title: "Proyectos exclusivos",
    description:
      "Proyectos exclusivos con alto valor arquitectónico.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
  },
  {
    icon: Building2,
    title: "Departamentos",
    description:
      "Departamentos accesibles ubicados estratégicamente.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85",
  },
  {
    icon: Map,
    title: "Lotes",
    description:
      "Lotes residenciales y de inversión en zonas de alto crecimiento.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=85",
  },
  {
    icon: HardHat,
    title: "Constructora",
    description:
      "Más de 10 años de experiencia desarrollando y ejecutando proyectos en la ciudad.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85",
  },
  {
    icon: Factory,
    title: "Ancosur",
    description:
      "Más de 10 años de experiencia en el sector inmobiliario, desarrollando proyectos innovadores y sostenibles.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=85",
  },
  {
    icon: Sprout,
    title: "Sulpaa",
    description:
      "Marca dedicada a la venta de productos agroindustriales naturales.",
    image:
      "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=1600&q=85",
  },
];

export default function Group() {
  return (
    <section id="grupo" className={styles.group}>
      <Container>

        {/* =====================================
            INTRODUCCIÓN
        ===================================== */}

        <div className={styles.introduction}>

          <Reveal>
            <div className={styles.introContent}>

              <h2 className={styles.title}>
                Creamos.
                <br />
                <strong>Desarrollamos.</strong>
                <br />
                Transformamos.
              </h2>

              <div className={styles.accent} />

            </div>
          </Reveal>

          <Reveal>
            <div className={styles.copy}>

              <p>
                Moro Capital es un holding inmobiliario dedicado a la
                creación y desarrollo de proyectos innovadores que
                transforman el mercado.
              </p>

              <p>
                A través de sus diferentes marcas, desarrolla propuestas
                que combinan calidad, rentabilidad y modernidad.
              </p>

            </div>
          </Reveal>

        </div>


        {/* =====================================
            IMAGEN PRINCIPAL
        ===================================== */}

        <Reveal>
          <div className={styles.mainImage}>

            <img
              src={groupLines[1].image}
              alt="Grupo Moro Capital"
            />

            <div className={styles.mainOverlay} />

            <div className={styles.mainCaption}>

              <h3>
                <span>Diferentes líneas.</span>
                <span>Una misma visión.</span>
              </h3>

            </div>

          </div>
        </Reveal>


        {/* =====================================
            LÍNEAS DE NEGOCIO
        ===================================== */}

        <div className={styles.sectionHeader}>

          <Reveal>
            <h3>
              Las diferentes
              <br />
              <strong>líneas del grupo</strong>
            </h3>
          </Reveal>

        </div>


        {/* =====================================
            GRID
        ===================================== */}

        <div className={styles.grid}>

          {groupLines.map((item, index) => {

            const Icon = item.icon;

            return (
              <Reveal
                key={item.title}
                className={styles.cardReveal}
              >

                <article className={styles.card}>

                  <div className={styles.cardImage}>

                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                    />

                    <div className={styles.cardImageOverlay} />

                    <div className={styles.icon}>
                      <Icon
                        size={19}
                        strokeWidth={1.5}
                      />
                    </div>

                    <span className={styles.index}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>


                  <div className={styles.cardBody}>

                    <div className={styles.cardTitle}>

                      <h4>
                        {item.title}
                      </h4>

                      <span className={styles.arrow}>
                        <ArrowUpRight
                          size={17}
                          strokeWidth={1.6}
                        />
                      </span>

                    </div>

                    <p>
                      {item.description}
                    </p>

                  </div>

                </article>

              </Reveal>
            );
          })}

        </div>

      </Container>
    </section>
  );
}