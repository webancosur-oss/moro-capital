"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Handshake,
  Flame,
  TrendingUp,
  ShieldCheck,
  Leaf,
} from "lucide-react";

import Container from "@/components/layout/Container/Container";
import Reveal from "@/components/ui/Reveal/Reveal";
import styles from "./page.module.css";

const stats = [
  {
    value: "+10",
    label: "años de experiencia",
  },
  {
    value: "+500",
    label: "hogares entregados",
  },
  {
    value: "+60 mil",
    label: "m² de construcción",
  },
  {
    value: "+50",
    label: "inversionistas",
  },
];

const values = [
  {
    icon: CheckCircle2,
    title: "Disciplina",
    text: "Hacemos lo que tenemos que hacer, cuando tengamos que hacerlo, tengamos ganas o no.",
    detail: "Organización · Limpieza · Puntualidad",
  },
  {
    icon: TrendingUp,
    title: "Espíritu de superación",
    text: "Nunca nos rendimos; siempre estamos tratando de ser mejores y queremos hacer algo muy importante en nuestra vida profesional.",
    detail: "Mejora continua · Ambición",
  },
  {
    icon: Handshake,
    title: "Trabajo en equipo",
    text: "Compartimos conocimientos e información y disfrutamos nuestros roles. El objetivo siempre es que el equipo gane, no el individuo.",
    detail: "Colaboración · Comunicación",
  },
  {
    icon: ShieldCheck,
    title: "Transparencia",
    text: "No tenemos como persona ni como equipo agendas ocultas.",
    detail: "Claridad · Integridad",
  },
  {
    icon: Flame,
    title: "Actitud positiva",
    text: "La buena actitud define a los ganadores; creemos que es la mejor manera de abordar la vida.",
    detail: "Energía · Determinación",
  },
];

const groupLines = [
  {
    icon: Leaf,
    title: "Resort Club",
    text: "Un moderno Resort Club en la Selva Central, con un modelo de comercialización por suscriptores.",
  },
  {
    icon: Building2,
    title: "Proyectos exclusivos",
    text: "Proyectos exclusivos con alto valor arquitectónico.",
  },
  {
    icon: Building2,
    title: "Departamentos",
    text: "Departamentos accesibles en ubicaciones estratégicas.",
  },
  {
    icon: Building2,
    title: "Lotes",
    text: "Lotes residenciales y de inversión en zonas de alto crecimiento.",
  },
  {
    icon: Building2,
    title: "Constructora",
    text: "Más de 10 años de experiencia desarrollando y ejecutando proyectos en la ciudad.",
  },
  {
    icon: Building2,
    title: "Ancosur",
    text: "Más de 10 años de experiencia en el sector inmobiliario, desarrollando proyectos innovadores y sostenibles.",
  },
  {
    icon: Leaf,
    title: "Sulpaa",
    text: "Marca dedicada a la venta de productos agroindustriales naturales.",
  },
];

export default function QuienesSomosPage() {
  return (
    <main className={styles.page}>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>

        <Container>

          <div className={styles.heroGrid}>

            <Reveal className={styles.heroText}>

              <h1>
                Somos
                <br />
                <strong>Moro Capital</strong>
              </h1>

              <div className={styles.heroLine} />

              <p>
                Un holding inmobiliario dedicado a la creación y desarrollo
                de proyectos innovadores que transforman el mercado.
              </p>

            </Reveal>


            <Reveal className={styles.heroVisual}>

              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90"
                alt="Arquitectura contemporánea"
              />

              <div className={styles.heroVisualText}>
                <span>Moro Capital</span>
                <p>Desarrollo · Inversión · Futuro</p>
              </div>

            </Reveal>

          </div>

        </Container>

      </section>


      {/* =====================================================
          WHO WE ARE
      ===================================================== */}

      <section className={styles.who}>

        <Container>

          <Reveal className={styles.whoGrid}>

            <div className={styles.whoTitle}>
              <h2>
                Un grupo que
                <br />
                <em>transforma.</em>
              </h2>
            </div>


            <div className={styles.whoCopy}>

              <p className={styles.whoLead}>
                Moro Capital es un holding inmobiliario dedicado a la
                creación y desarrollo de proyectos innovadores que
                transforman el mercado.
              </p>

              <p>
                Nuestra estructura reúne diferentes capacidades y líneas
                de negocio alrededor del desarrollo, permitiéndonos
                participar en proyectos inmobiliarios desde distintas
                perspectivas.
              </p>

              <p>
                Desarrollamos departamentos, lotes y proyectos exclusivos,
                además de integrar capacidades de construcción, propuestas
                vinculadas al turismo y otras actividades que forman parte
                de nuestro grupo.
              </p>

            </div>

          </Reveal>


          <Reveal className={styles.stats}>

            {stats.map((stat) => (
              <div
                className={styles.stat}
                key={stat.label}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}

          </Reveal>


          <div className={styles.trust}>

            <div className={styles.trustText}>
              <span>Sistema integrado de gestión</span>
              <strong>ISO 14001 · ISO 9001</strong>
            </div>

            <div className={styles.trustDivider} />

            <p>
              Una estructura orientada a gestionar nuestros proyectos
              bajo estándares de calidad y sostenibilidad.
            </p>

          </div>

        </Container>

      </section>


      {/* =====================================================
          MISSION / VISION
      ===================================================== */}

      <section className={styles.purpose}>

        <div className={styles.purposeImage}>

          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=90"
            alt="Construcción y desarrollo inmobiliario"
          />

        </div>


        <div className={styles.purposeContent}>

          <Reveal>

            <div className={styles.purposeBlock}>

              <h2>
                Misión
              </h2>

              <p className={styles.purposeMain}>
                Hacemos realidad el sueño de la vivienda ideal de nuestros
                clientes, sin descuidar el espacio donde se diseña.
              </p>

              <p className={styles.purposeSecondary}>
                Nuestra mirada parte de las personas y de los espacios
                que habitan, entendiendo cada proyecto como una oportunidad
                para crear valor más allá de la construcción.
              </p>

            </div>


            <div className={styles.purposeSeparator} />


            <div className={styles.purposeBlock}>

              <h2>
                Visión
              </h2>

              <p className={styles.purposeMain}>
                Para 2030 nos vemos desarrollando proyectos inmobiliarios
                de gran envergadura a nivel nacional, que tengan como
                corazón la sustentabilidad del medio ambiente.
              </p>

              <div className={styles.visionWords}>

                <span>2030</span>
                <span>Nacional</span>
                <span>Sostenible</span>

              </div>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className={styles.values}>

        <Container>

          <Reveal className={styles.valuesHeader}>

            <div>
              <h2>
                Todo puede cambiar.
              </h2>

              <h3>
                Menos <em>nuestros valores.</em>
              </h3>
            </div>

            <p>
              Los principios que definen nuestra manera de trabajar,
              relacionarnos y enfrentar cada nuevo desafío.
            </p>

          </Reveal>


          <div className={styles.valuesList}>

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <Reveal
                  className={styles.valueRow}
                  key={value.title}
                >

                  <div className={styles.valueIcon}>
                    <Icon
                      size={21}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className={styles.valueTitle}>
                    <h3>{value.title}</h3>
                  </div>

                  <div className={styles.valueText}>
                    <p>{value.text}</p>
                    <span>{value.detail}</span>
                  </div>

                

                </Reveal>
              );
            })}

          </div>

        </Container>

      </section>


      {/* =====================================================
          CULTURE
      ===================================================== */}

      <section className={styles.culture}>

        <Container>

          <Reveal className={styles.cultureGrid}>

            <div className={styles.cultureVisual}>

              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=90"
                alt="Arquitectura y planificación"
              />

            </div>


            <div className={styles.cultureText}>

              <h2>
                Servimos
                <br />
                y soñamos
                <br />
                <em>en grande.</em>
              </h2>

              <p>
                Creemos que hacer empresa también significa tener una
                forma de trabajar. Una forma de relacionarnos. Una forma
                de asumir los desafíos.
              </p>

              <p>
                Por eso nuestros valores no son solamente declaraciones:
                son la manera en que buscamos construir nuestros proyectos,
                nuestros equipos y nuestro futuro.
              </p>

            </div>

          </Reveal>

        </Container>

      </section>


      {/* =====================================================
          GROUP
      ===================================================== */}

      <section className={styles.group}>

        <Container>

          <Reveal className={styles.groupHeader}>

            <h2>
              Diferentes líneas.
              <br />
              <em>Una misma visión.</em>
            </h2>

            <p>
              Moro Capital reúne diferentes negocios y capacidades
              alrededor de una misma visión de desarrollo.
            </p>

          </Reveal>


          <div className={styles.groupGrid}>

            {groupLines.map((line) => {
              const Icon = line.icon;

              return (
                <Reveal
                  className={styles.groupCard}
                  key={line.title}
                >

                  <div className={styles.groupCardTop}>

                    <div className={styles.groupIcon}>
                      <Icon
                        size={19}
                        strokeWidth={1.5}
                      />
                    </div>

                  </div>

                  <div>
                    <h3>{line.title}</h3>
                    <p>{line.text}</p>
                  </div>

                </Reveal>
              );
            })}

          </div>

        </Container>

      </section>


      {/* =====================================================
          FINAL
      ===================================================== */}

      <section className={styles.final}>

        <Container>

          <Reveal className={styles.finalContent}>

            <p>
              Seguimos construyendo
            </p>

            <h2>
              El futuro empieza
              <br />
              con una <em>visión.</em>
            </h2>

            <Link
              href="/contacto"
              className={styles.finalButton}
            >
              Hablemos

              <span>
                <ArrowUpRight size={17} />
              </span>
            </Link>

          </Reveal>

        </Container>

      </section>

    </main>
  );
}