import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

import styles from "./LegalPage.module.css";

export const metadata: Metadata = {
  title: "Información Legal | Moro Capital",
  description:
    "Consulta el tratamiento de datos personales, la política de privacidad y los términos y condiciones de Moro Capital.",
  alternates: {
    canonical: "/legal",
  },
};

const legalDocuments = [
  {
    number: "01",
    title: "Tratamiento de datos personales",
    description:
      "Conoce cómo se gestionan los datos personales y los derechos que corresponden a sus titulares conforme a la normativa aplicable.",
    href: "/legal/tratamiento-de-datos",
  },
  {
    number: "02",
    title: "Política de privacidad",
    description:
      "Conoce cómo Moro Capital recopila, utiliza, conserva y protege la información de los usuarios de este sitio web.",
    href: "/legal/politica-de-privacidad",
  },
  {
    number: "03",
    title: "Términos y condiciones",
    description:
      "Consulta las condiciones aplicables al uso del sitio web y a la información presentada por Moro Capital.",
    href: "/legal/terminos-y-condiciones",
  },
];

export default function LegalIndexPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <Link
            href="/"
            className={styles.back}
            aria-label="Volver a Moro Capital"
          >
            <ArrowLeft
              className={styles.backIcon}
              size={16}
              strokeWidth={1.25}
              aria-hidden="true"
            />

            <span>Volver</span>
          </Link>

          <div className={styles.heroGrid}>
            <div>
              <span className={styles.kicker}>
                INFORMACIÓN LEGAL
              </span>

              <h1>
                Transparencia,
                <br />
                información y protección.
              </h1>
            </div>

            <p className={styles.heroDescription}>
              Encuentra la documentación legal de Moro Capital
              relacionada con el tratamiento de datos personales,
              privacidad y condiciones de uso.
            </p>
          </div>
        </div>
      </header>

      <section className={styles.documents}>
        <div className="container">
          <div className={styles.documentsHeader}>
            <span className={styles.sectionLabel}>
              DOCUMENTACIÓN
            </span>

            <h2>
              Información legal
              <br />
              de Moro Capital.
            </h2>
          </div>

          <div className={styles.documentGrid}>
            {legalDocuments.map((document) => (
              <Link
                key={document.href}
                href={document.href}
                className={styles.documentCard}
              >
                <div className={styles.cardTop}>
                  

                  <span
                    className={styles.cardIcon}
                    aria-hidden="true"
                  >
                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.4}
                    />
                  </span>
                </div>

                <div className={styles.cardBody}>
                  <h3>{document.title}</h3>

                  <p>{document.description}</p>
                </div>

                <div className={styles.cardFooter}>
                  <span>Consultar documento</span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}