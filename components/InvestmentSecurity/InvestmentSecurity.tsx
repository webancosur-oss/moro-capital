"use client";

import Button from "../Button/Button";
import Reveal from "../Reveal";
import styles from "./InvestmentSecurity.module.css";

const guarantees = [
  {
    number: "01",
    title: "Acuerdo notarial de mutuo",
    description:
      "Instrumento contractual que formaliza la relación de inversión y establece las condiciones acordadas.",
  },
  {
    number: "02",
    title: "Letra de cambio",
    description:
      "Documento contemplado dentro de la estructura de garantías indicada para la inversión.",
  },
];

const backing = [
  {
    value: "10",
    suffix: " años",
    label: "experiencia inmobiliaria",
  },
  {
    value: "9",
    suffix: "",
    label: "proyectos en ejecución",
  },
  {
    value: "200+",
    suffix: "",
    label: "propiedades en garantía",
  },
];

export default function InvestmentSecurity() {
  return (
    <section
      id="seguridad"
      className={styles.section}
    >
      <div className={styles.container}>
        <div className={styles.intro}>
          <Reveal className={styles.introMain}>
            <span className={styles.label}>
              SEGURIDAD Y TRANSPARENCIA
            </span>

            <h2>
              Una inversión
              <br />
              con respaldo documental.
            </h2>
          </Reveal>

          <Reveal
            className={styles.introSide}
            delay={0.08}
          >
            <p>
              La estructura presentada por MORO CAPITAL
              contempla instrumentos contractuales que
              formalizan la inversión.
            </p>

            <Button
              href="#formulario"
              text="Solicitar información"
              suffixIcon="arrow-up-right"
              variant="olive"
              size="md"
              width="auto"
              height={54}
              ariaLabel="Solicitar información sobre MORO CAPITAL"
            />
          </Reveal>
        </div>

        <Reveal
          className={styles.guarantees}
          delay={0.05}
        >
          <div className={styles.guaranteesHeader}>
            <div>
              <span>
                GARANTÍAS DE INVERSIÓN
              </span>

              <h3>
                Documentación que
                <br />
                forma parte de la estructura.
              </h3>
            </div>

            <p>
              Instrumentos señalados en la propuesta
              de inversión de MORO CAPITAL.
            </p>
          </div>

          <div className={styles.guaranteesGrid}>
            {guarantees.map((guarantee) => (
              <article
                key={guarantee.number}
                className={styles.guarantee}
              >
                <div className={styles.guaranteeNumber}>
                  {guarantee.number}
                </div>

                <div className={styles.guaranteeContent}>
                  <h3>
                    {guarantee.title}
                  </h3>

                  <p>
                    {guarantee.description}
                  </p>
                </div>

                <div className={styles.guaranteeLine} />
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal
          className={styles.backing}
          delay={0.1}
        >
          <div className={styles.backingTitle}>
            <span>
              RESPALDO
            </span>

            <p>
              Un grupo económico con experiencia
              en el desarrollo inmobiliario.
            </p>
          </div>

          <div className={styles.backingStats}>
            {backing.map((item) => (
              <div
                key={item.label}
                className={styles.backingStat}
              >
                <strong>
                  {item.value}
                  {item.suffix && (
                    <small>{item.suffix}</small>
                  )}
                </strong>

                <span>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          className={styles.legal}
          delay={0.12}
        >
          <div className={styles.legalMark} />

          <div className={styles.legalContent}>
            <strong>
              Información relevante
            </strong>

            <p>
              MORO CAPITAL es un fondo de deuda privada
              dirigido a inversionistas privados o a
              quienes cumplan con lo establecido. No está
              supervisado por la SMV. Según el brochure,
              está respaldado por sus operaciones y por el
              patrimonio del holding inmobiliario. Los
              principales factores de riesgo y liquidez
              se encuentran en el contrato de mutuo
              dinerario.
            </p>
          </div>
        </Reveal>

        <div className={styles.footerNote}>
          <span>
            MORO CAPITAL
          </span>

          <p>
            Las condiciones finales de la inversión se
            determinan mediante la documentación
            contractual vigente.
          </p>
        </div>
      </div>
    </section>
  );
}