"use client";

import Image from "next/image";

import Container from "@/components/layout/Container/Container";
import Reveal from "@/components/ui/Reveal/Reveal";
import styles from "./Group.module.css";

const companies = [
  {
    name: "Moro Capital",
    category: "Holding y captación",
    logo: "/logos/moro-capital-logo.svg",
    description:
      "Holding inmobiliario dedicado a la creación y desarrollo de proyectos, y a la captación de capital privado.",
    stats: [
      {
        value: "+10 MM",
        label: "de inversión captada",
      },
      {
        value: "+50",
        label: "inversionistas",
      },
    ],
  },
  {
    name: "Straton",
    category: "Constructora · Lean Construction",
    logo: "/logos/straton_logo.svg",
    description:
      "Más de 10 años desarrollando y ejecutando obras en la ciudad. Es quien construye los proyectos del grupo.",
    stats: [
      {
        value: "+60 mil",
        label: "m² de construcción",
      },
      {
        value: "+500",
        label: "hogares entregados",
      },
    ],
  },
  {
    name: "Ancosur",
    category: "Inmobiliaria · Administra el fondo",
    logo: "/logos/ancosur-logo.svg",
    description:
      "Más de 10 años en el sector, especializada en proyectos innovadores y sostenibles.",
    stats: [
      {
        value: "+50 mil",
        label: "m² desarrollados",
      },
      {
        value: "+200 MM",
        label: "en ventas",
      },
    ],
  },
  {
    name: "Zagari",
    category: "Resort Club",
    logo: "/logos/zagari_logo.svg",
    description:
      "Resort Club en la Selva Central con un modelo de comercialización por suscriptores. Proyectos en San Ramón y Oxapampa.",
    stats: [
      {
        value: "San Ramón",
        label: "2023",
      },
      {
        value: "Oxapampa",
        label: "2025",
      },
    ],
  },
  {
    name: "Sulppa",
    category: "Agroindustrial",
    logo: "/logos/sulpaa_logo.svg",
    description:
      "Marca dedicada a la venta de productos agroindustriales naturales.",
    stats: [
      {
        value: "Diversificación",
        label: "del grupo",
      },
    ],
  },
];

const ancosurLines = [
  {
    name: "Ancosur Premium",
    description:
      "Proyectos exclusivos con alto valor arquitectónico.",
  },
  {
    name: "Ancosur Urban",
    description:
      "Departamentos accesibles en ubicaciones estratégicas.",
  },
  {
    name: "Ancosur Terra",
    description:
      "Lotes residenciales y de inversión en zonas de alto crecimiento.",
  },
];

export default function Group() {
  return (
    <section id="grupo" className={styles.group}>
      <Container>

        {/* =====================================================
            INTRODUCCIÓN
        ====================================================== */}

        <div className={styles.introduction}>

          <Reveal>
            <div className={styles.introductionMain}>

              <h2>
                Un grupo de cinco
                <br />
                empresas, cuatro
                <br />
                <strong>socios directores.</strong>
              </h2>

            </div>
          </Reveal>


          <Reveal>
            <div className={styles.introductionCopy}>

              <p>
                Moro Capital no invierte en terceros: financia
                los proyectos de sus propias empresas, que
                construyen, desarrollan y venden.
              </p>

              <p>
                Un sistema integrado de gestión que articula
                distintas especialidades dentro de un mismo
                grupo empresarial.
              </p>

              <div className={styles.certifications}>
                <span>ISO 14001</span>
                <span>ISO 9001</span>
              </div>

            </div>
          </Reveal>

        </div>


        {/* =====================================================
            EMPRESAS
        ====================================================== */}

        <div className={styles.companies}>

          {companies.map((company) => (
            <Reveal
              key={company.name}
              className={styles.companyReveal}
            >
              <article className={styles.company}>

                <div className={styles.logoArea}>
                  <Image
                    src={company.logo}
                    alt={`Logo de ${company.name}`}
                    width={220}
                    height={80}
                    className={styles.logo}
                  />
                </div>


                <div className={styles.companyCategory}>
                  {company.category}
                </div>


                <div className={styles.companyDescription}>
                  <p>
                    {company.description}
                  </p>
                </div>


                <div className={styles.stats}>

                  {company.stats.map((stat) => (
                    <div
                      key={`${company.name}-${stat.value}`}
                      className={styles.stat}
                    >
                      <strong>
                        {stat.value}
                      </strong>

                      <span>
                        {stat.label}
                      </span>
                    </div>
                  ))}

                </div>

              </article>
            </Reveal>
          ))}

        </div>


        {/* =====================================================
            LÍNEAS ANCOSUR
        ====================================================== */}

        <Reveal>
          <div className={styles.ancosur}>

        


            <div className={styles.ancosurLines}>

              {ancosurLines.map((line) => (
                <article
                  key={line.name}
                  className={styles.ancosurLine}
                >
                  <h4>
                    {line.name}
                  </h4>

                  <p>
                    {line.description}
                  </p>
                </article>
              ))}

            </div>

          </div>
        </Reveal>


        {/* =====================================================
            CIERRE
        ====================================================== */}

        <Reveal>
          <div className={styles.closing}>

            <p>
              Una estructura integrada para desarrollar,
              construir, comercializar y administrar
              oportunidades inmobiliarias.
            </p>

          </div>
        </Reveal>

      </Container>
    </section>
  );
}