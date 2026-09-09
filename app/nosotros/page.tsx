import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Leaf,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

import Reveal from "@/components/Reveal";
import styles from "./Nosotros.module.css";

export const metadata: Metadata = {
  title: "Nosotros | Moro Capital",
  description:
    "Conoce Moro Capital, su trayectoria, grupo empresarial, misión, visión, valores y experiencia en el desarrollo inmobiliario.",
  alternates: {
    canonical: "/nosotros",
  },
};

const brands = [
  {
    number: "01",
    name: "Moro Capital",
    description:
      "Holding inmobiliario dedicado a la creación y desarrollo de proyectos innovadores que transforman el mercado.",
  },
  {
    number: "02",
    name: "Straton",
    description:
      "Constructora con más de 10 años de experiencia desarrollando y ejecutando proyectos en la ciudad.",
  },
  {
    number: "03",
    name: "ANCOSUR",
    description:
      "Empresa especializada en el desarrollo de proyectos inmobiliarios innovadores y sostenibles.",
  },
  {
    number: "04",
    name: "Zagari Resort Club",
    description:
      "Moderno Resort Club en la Selva Central, con un modelo de comercialización por suscriptores.",
  },
  {
    number: "05",
    name: "Sulpaa",
    description:
      "Marca dedicada a la venta de productos agroindustriales naturales.",
  },
];

const figures = [
  {
    value: "+10 MM",
    label: "de inversión captada",
  },
  {
    value: "+60 mil",
    label: "m² de construcción",
  },
  {
    value: "+50 mil",
    label: "m² desarrollados",
  },
  {
    value: "+200 MM",
    label: "en ventas",
  },
  {
    value: "+500",
    label: "hogares entregados",
  },
  {
    value: "+50",
    label: "inversionistas",
  },
];

const values = [
  {
    number: "01",
    title: "Disciplina",
    description:
      "Hacemos lo que tenemos que hacer, cuando tenemos que hacerlo, tengamos ganas o no.",
    icon: Check,
  },
  {
    number: "02",
    title: "Espíritu de superación",
    description:
      "Nunca nos rendimos; siempre buscamos ser mejores y hacer algo importante en nuestra vida profesional.",
    icon: Target,
  },
  {
    number: "03",
    title: "Trabajo en equipo",
    description:
      "Compartimos conocimientos e información. El objetivo siempre es que gane el equipo, no el individuo.",
    icon: Users,
  },
  {
    number: "04",
    title: "Transparencia",
    description:
      "No tenemos como persona ni como equipo agendas ocultas.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Actitud positiva",
    description:
      "La buena actitud define a los ganadores; creemos que es la mejor manera de abordar la vida.",
    icon: ArrowUpRight,
  },
];

const apartments = [
  ["2015–2019", "+20 Viviendas Unifamiliares", "Huancayo"],
  ["2019", "Il Dolve", "San Carlos"],
  ["2020", "Admant", "San Carlos"],
  ["2022", "Vita", "San Carlos"],
  ["2023", "Zenda", "San Carlos"],
  ["2023", "Senea", "Palian"],
  ["2023", "Altaluz", "San Carlos"],
  ["2023", "Neo 18", "San Carlos"],
  ["2023", "Neo Emperatriz", "San Carlos"],
  ["2023", "Moro 416", "Huancayo"],
  ["2024", "Origen", "El Tambo"],
  ["2024", "Distrito San Carlos", "Huancayo"],
];

const lots = [
  ["2020–2022", "Mi Huerta", "Chupaca"],
  ["2022", "Las Terrazas de Concepción", "Concepción"],
  ["2023", "Las Colinas de Moro", "La Huaycha"],
  ["2024", "Camino Real", "El Tambo"],
];

const trackRecord = [
  ["Las Terrazas de Concepción", "2022–2025", "Liquidado", "100%"],
  ["Las Colinas de Moro", "2023–2025", "Vigente", "60%"],
  ["Neo Emperatriz", "2024–2025", "Cierre", "62%"],
  ["Zagari Resort", "2023–2027", "Vigente", "37%"],
  ["Camino Real", "2024–2026", "Vigente", "21%"],
  ["Moro 416", "2023–2026", "Lanzamiento", "58%"],
  ["Origen", "2024–2026", "Lanzamiento", "46%"],
];

export default function NosotrosPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}

      <section className={styles.hero}>
        <div className="container">
          <Link href="/" className={styles.back}>
            <ArrowLeft
              size={16}
              strokeWidth={1.25}
              aria-hidden="true"
            />
            <span>Volver</span>
          </Link>

          <div className={styles.heroGrid}>
            <Reveal className={styles.heroContent}>
              <span className={styles.label}>NOSOTROS</span>

              <h1>
                Un holding inmobiliario
                <span>que transforma el mercado.</span>
              </h1>

              <p>
                Moro Capital es un holding inmobiliario dedicado a la
                creación y desarrollo de proyectos innovadores que
                transforman el mercado.
              </p>

              <Link href="#grupo" className={styles.heroAction}>
                <span>Conoce nuestro grupo</span>

                <span className={styles.actionIcon}>
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.3}
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>

            <Reveal
              className={styles.heroStatement}
              delay={0.12}
            >
              <span>GRUPO</span>

              <strong>MORO</strong>
              <strong>CAPITAL</strong>

              <div className={styles.heroLine} />

              <small>
                CALIDAD · RENTABILIDAD · MODERNIDAD
              </small>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GRUPO */}

      <section className={styles.group} id="grupo">
        <div className="container">
          <Reveal className={styles.sectionHeader}>
            <div>
              <span className={styles.labelDark}>
                GRUPO MORO CAPITAL
              </span>

              <h2>
                Un ecosistema que
                <span>desarrolla oportunidades.</span>
              </h2>
            </div>

            <p>
              A través de nuestras marcas desarrollamos distintas
              especialidades vinculadas al sector inmobiliario.
            </p>
          </Reveal>

          <div className={styles.brandGrid}>
            {brands.map((brand, index) => (
              <Reveal
                key={brand.name}
                className={`${styles.brandCard} ${
                  index === 0 ? styles.brandMain : ""
                }`}
                delay={index * 0.04}
              >
                <div className={styles.brandTop}>

                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                </div>

                <div className={styles.brandContent}>
                  <h3>{brand.name}</h3>
                  <p>{brand.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CIFRAS */}

      <section className={styles.figures}>
        <div className="container">
          <Reveal className={styles.sectionHeaderLight}>
            <span className={styles.label}>NUESTRA TRAYECTORIA</span>

            <h2>
              Experiencia que se
              <span>construye con resultados.</span>
            </h2>
          </Reveal>

          <div className={styles.figureGrid}>
            {figures.map((figure) => (
              <div
                className={styles.figure}
                key={figure.label}
              >
                <strong>{figure.value}</strong>
                <span>{figure.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.iso}>
            <ShieldCheck
              size={22}
              strokeWidth={1.2}
              aria-hidden="true"
            />

            <div>
              <strong>Sistema Integrado de Gestión</strong>
              <span>ISO 14001 · ISO 9001</span>
            </div>
          </div>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}

      <section className={styles.missionVision}>
        <div className="container">
          <div className={styles.missionGrid}>
            <Reveal className={styles.missionCard}>

              <span className={styles.labelDark}>MISIÓN</span>

              <h2>
                Hacemos realidad el sueño de la vivienda ideal.
              </h2>

              <p>
                Hacemos realidad el sueño de la vivienda ideal de
                nuestros clientes, sin descuidar el espacio donde se
                diseña.
              </p>
            </Reveal>

            <Reveal
              className={styles.visionCard}
              delay={0.1}
            >

              <span className={styles.label}>VISIÓN</span>

              <h2>
                Proyectos de gran envergadura con sustentabilidad.
              </h2>

              <p>
                Para 2030 nos vemos desarrollando proyectos inmobiliarios
                de gran envergadura a nivel nacional, que tengan como
                corazón la sustentabilidad del medio ambiente.
              </p>

              <Leaf
                className={styles.leaf}
                size={120}
                strokeWidth={0.55}
                aria-hidden="true"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALORES */}

      <section className={styles.values}>
        <div className="container">
          <Reveal className={styles.sectionHeader}>
            <div>
              <span className={styles.labelDark}>
                NUESTROS VALORES
              </span>

              <h2>
                Todo puede cambiar.
                <span>Menos nuestros valores.</span>
              </h2>
            </div>

            <p>
              Principios que orientan nuestra forma de trabajar y
              desarrollar cada proyecto.
            </p>
          </Reveal>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <Reveal
                  className={styles.valueCard}
                  key={value.title}
                  delay={index * 0.04}
                >
                  <div className={styles.valueTop}>

                    <Icon
                      size={20}
                      strokeWidth={1.25}
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <h3>{value.title}</h3>

                    <p>{value.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}

      <section className={styles.experience}>
        <div className="container">
          <Reveal className={styles.sectionHeader}>
            <div>
              <span className={styles.labelDark}>
                EXPERIENCIA
              </span>

              <h2>
                Una trayectoria en
                <span>distintos segmentos.</span>
              </h2>
            </div>

            <p>
              Experiencia en departamentos, lotizaciones y proyectos
              Resort Club en diferentes ubicaciones.
            </p>
          </Reveal>

          {/* DEPARTAMENTOS */}

          <div className={styles.experienceSection}>
            <div className={styles.experienceTitle}>
              <span>01</span>
              <h3>Departamentos</h3>
              <small>2015 — 2025</small>
            </div>

            <div className={styles.projectGrid}>
              {apartments.map((project) => (
                <div
                  className={styles.projectItem}
                  key={`${project[0]}-${project[1]}`}
                >
                  <span>{project[0]}</span>

                  <strong>{project[1]}</strong>

                  <small>{project[2]}</small>
                </div>
              ))}
            </div>
          </div>

          {/* LOTIZACIONES */}

          <div className={styles.experienceSection}>
            <div className={styles.experienceTitle}>
              <span>02</span>
              <h3>Lotizaciones</h3>
              <small>2020 — 2024</small>
            </div>

            <div className={styles.lotGrid}>
              {lots.map((project) => (
                <div
                  className={styles.lotCard}
                  key={project[1]}
                >
                  <span>{project[0]}</span>

                  <strong>{project[1]}</strong>

                  <small>{project[2]}</small>
                </div>
              ))}
            </div>
          </div>

          {/* RESORT CLUB */}

          <div className={styles.resort}>
            <div>
              <span className={styles.label}>
                03 · RESORT CLUB
              </span>

              <h3>
                Unimos vivienda y naturaleza
                <span>para un mundo mejor.</span>
              </h3>

              <p>
                Zagari Resort Club presenta proyectos en la Selva
                Central, con presencia en San Ramón y Oxapampa
                próximamente.
              </p>
            </div>

            <div className={styles.resortPlaces}>
              <div>
                <span>2023</span>
                <strong>San Ramón</strong>
              </div>

              <div>
                <span>2025</span>
                <strong>Oxapampa</strong>
                <small>Próximamente</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACK RECORD */}

      <section className={styles.track}>
        <div className="container">
          <Reveal className={styles.sectionHeader}>
            <div>
              <span className={styles.labelDark}>
                TRACK RECORD
              </span>

              <h2>
                Capital convertido en
                <span>proyectos reales.</span>
              </h2>
            </div>

            <p>
              A través de fondos propios, ventas directas e inversionistas,
              se han financiado proyectos inmobiliarios desarrollados
              por el grupo.
            </p>
          </Reveal>

          <div className={styles.trackStats}>
            <div>
              <strong>S/ 100 MM</strong>
              <span>capital invertido</span>
            </div>

            <div>
              <strong>9</strong>
              <span>proyectos financiados</span>
            </div>

            <div>
              <strong>212</strong>
              <span>propiedades</span>
            </div>

            <div>
              <strong>+60%</strong>
              <span>
                preventas en proyectos gestionados por ANCOSUR
              </span>
            </div>
          </div>

          <div className={styles.trackTable}>
            <div className={styles.trackHeader}>
              <span>Proyecto</span>
              <span>Periodo</span>
              <span>Etapa</span>
              <span>Avance</span>
            </div>

            {trackRecord.map((project) => (
              <div
                className={styles.trackRow}
                key={project[0]}
              >
                <strong>{project[0]}</strong>
                <span>{project[1]}</span>
                <span>{project[2]}</span>
                <strong>{project[3]}</strong>
              </div>
            ))}
          </div>

          <p className={styles.sourceNote}>
            Información según track record presentado en el brochure.
            Información a febrero de 2025.
          </p>
        </div>
      </section>

      {/* CIERRE */}

      <section className={styles.closing}>
        <div className="container">
          <Reveal className={styles.closingInner}>
            <span className={styles.label}>MORO CAPITAL</span>

            <h2>
              Construimos proyectos.
              <span>Desarrollamos oportunidades.</span>
            </h2>

            <p>
              Una trayectoria inmobiliaria orientada a crear proyectos
              innovadores y oportunidades con visión de futuro.
            </p>

            <Link
              href="/#oportunidad"
              className={styles.closingButton}
            >
              <span>Conoce nuestras oportunidades</span>

              <ArrowUpRight
                size={18}
                strokeWidth={1.3}
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}