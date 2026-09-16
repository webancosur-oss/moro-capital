"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import styles from "./Footer.module.css";

const footerNavigation = [
  {
    label: "Quiénes somos",
    href: "/quienes-somos",
  },
  {
    label: "Fondos",
    href: "/fondos",
  },
  {
    label: "Trayectoria",
    href: "/trayectoria",
  },
  {
    label: "Condiciones",
    href: "/condiciones",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];

const legalLinks = [
  {
    label: "Línea ética",
    href: "/linea-etica",
  },
  {
    label: "Libro de reclamaciones",
    href: "/libro-reclamaciones",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Av.+San+Carlos+1481%2C+Huancayo+12001%2C+Per%C3%BA";

  return (
    <footer className={styles.footer}>

      {/* =====================================================
          CONTACT SECTION
      ====================================================== */}
      <section className={styles.contactSection}>
        <div className={styles.contactGlow} />

        <div className={styles.contactContainer}>

          <div className={styles.contactIntro}>
            <span className={styles.contactLine} />

            <p>Conversemos</p>

            <h2>
              Hagamos que las
              <br />
              oportunidades sucedan.
            </h2>
          </div>


          <div className={styles.contactGrid}>

            {/* UBICACIÓN */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.contactCard} ${styles.contactLink}`}
              aria-label="Ver ubicación en Google Maps"
            >
              <div className={styles.iconWrapper}>
                <MapPin
                  size={22}
                  strokeWidth={1.6}
                />
              </div>

              <div className={styles.contactContent}>
                <span className={styles.contactLabel}>
                  Ubicación
                </span>

                <span className={styles.contactValue}>
                  Av. San Carlos 1481
                </span>

                <span className={styles.contactSecondary}>
                  Huancayo 12001 · Perú
                </span>
              </div>

              <ArrowUpRight
                className={styles.cardArrow}
                size={18}
                strokeWidth={1.5}
              />
            </a>


            {/* CORREO */}
            <a
              href="mailto:ancosur@gmail.com"
              className={`${styles.contactCard} ${styles.contactLink}`}
            >
              <div className={styles.iconWrapper}>
                <Mail
                  size={22}
                  strokeWidth={1.6}
                />
              </div>

              <div className={styles.contactContent}>
                <span className={styles.contactLabel}>
                  Escríbenos
                </span>

                <span className={styles.contactValue}>
                  ancosur@gmail.com
                </span>
              </div>

              <ArrowUpRight
                className={styles.cardArrow}
                size={18}
                strokeWidth={1.5}
              />
            </a>


            {/* TELÉFONO */}
            <a
              href="tel:+51904239657"
              className={`${styles.contactCard} ${styles.contactLink}`}
            >
              <div className={styles.iconWrapper}>
                <Phone
                  size={22}
                  strokeWidth={1.6}
                />
              </div>

              <div className={styles.contactContent}>
                <span className={styles.contactLabel}>
                  Llámanos
                </span>

                <span className={styles.contactValue}>
                  +51 904 239 657 
                </span>
              </div>

              <ArrowUpRight
                className={styles.cardArrow}
                size={18}
                strokeWidth={1.5}
              />
            </a>

          </div>
        </div>
      </section>


      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <section className={styles.mainFooter}>
        <div className={styles.footerContainer}>

          {/* =================================================
              BRAND + STATEMENT
          ================================================== */}
          <div className={styles.brandRow}>

            <Link
              href="/"
              className={styles.logoLink}
              aria-label="Moro Capital - Inicio"
            >
              <Image
                src="/logos/moro-capital-logo.svg"
                alt="Moro Capital"
                width={240}
                height={80}
                className={styles.logo}
              />
            </Link>

            <p className={styles.brandStatement}>
              Capital que impulsa
              <br />
              el desarrollo.
            </p>

          </div>


          {/* =================================================
              NAVIGATION
          ================================================== */}
          <div className={styles.navigationSection}>

            <div className={styles.navigationHeading}>
              <span />
              <p>Navegación</p>
            </div>

            <nav
              className={styles.navigationGrid}
              aria-label="Navegación principal"
            >
              {footerNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.navigationLink}
                >
                  <span>{item.label}</span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                  />
                </Link>
              ))}
            </nav>

          </div>


          {/* =================================================
              LEGAL
          ================================================== */}
          {/* <div className={styles.legalSection}>

            <div className={styles.legalHeading}>
              <span />
              <p>Información legal</p>
            </div>

            <nav
              className={styles.legalNav}
              aria-label="Información legal"
            >
              {legalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={styles.legalLink}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

          </div> */}


          {/* =================================================
              DIVIDER
          ================================================== */}
          <div className={styles.divider} />


          {/* =================================================
              BOTTOM
          ================================================== */}
          <div className={styles.footerBottom}>

            <p className={styles.copyright}>
              © {currentYear} Moro Capital.
              <span>
                Todos los derechos reservados.
              </span>
            </p>

            <p className={styles.footerBrand}>
              Moro Capital
            </p>

            <button
              type="button"
              className={styles.backToTop}
              onClick={handleBackToTop}
              aria-label="Volver arriba"
            >
              <ArrowUp
                size={18}
                strokeWidth={1.6}
              />
            </button>

          </div>

        </div>
      </section>

    </footer>
  );
}