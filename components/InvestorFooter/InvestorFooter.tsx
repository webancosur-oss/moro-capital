"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronUp,
} from "lucide-react";
import {
  useEffect,
  useState,
  type MouseEvent,
} from "react";
import { usePathname } from "next/navigation";

import styles from "./InvestorFooter.module.css";

const footerNavigation = [
  {
    title: "Moro Capital",
    links: [
      {
        label: "Cómo funciona",
        href: "#modelo",
      },
      {
        label: "Trayectoria",
        href: "#trayectoria",
      },
      {
        label: "Moro 416",
        href: "#moro416",
      },
      {
        label: "Contacto",
        href: "#formulario",
      },
    ],
  },
  {
    title: "Inversionistas",
    links: [
      {
        label: "Cómo funciona",
        href: "#modelo",
      },
      {
        label: "Alternativas",
        href: "#planes",
      },
      {
        label: "Transparencia y seguridad",
        href: "#seguridad",
      },
      {
        label: "Preguntas frecuentes",
        href: "#faq",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Política de privacidad",
        href: "/legal/politica-de-privacidad",
      },
      {
        label: "Tratamiento de datos",
        href: "/legal/tratamiento-de-datos",
      },
      {
        label: "Términos y condiciones",
        href: "/legal/terminos-y-condiciones",
      },
    ],
  },
];

const trackedSections = [
  "#oportunidad",
  "#modelo",
  "#trayectoria",
  "#moro416",
  "#planes",
  "#seguridad",
  "#faq",
  "#formulario",
];

export default function InvestorFooter() {
  const pathname = usePathname();

  const [activeSection, setActiveSection] =
    useState("#oportunidad");

  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("");
      return;
    }

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight;

      /*
       * Priorizar el formulario cuando
       * estamos llegando al final.
       */
      if (
        scrollPosition + viewportHeight >=
        documentHeight - 80
      ) {
        const formulario =
          document.getElementById("formulario");

        if (formulario) {
          const formularioTop =
            formulario.getBoundingClientRect().top +
            window.scrollY;

          if (
            scrollPosition >=
            formularioTop - 180
          ) {
            setActiveSection("#formulario");
            return;
          }
        }

        setActiveSection("#faq");
        return;
      }

      const navbarHeight =
        window.innerWidth <= 900
          ? 72
          : 82;

      const offset =
        navbarHeight + 100;

      let current =
        "#oportunidad";

      for (const href of trackedSections) {
        const id =
          href.substring(1);

        const section =
          document.getElementById(id);

        if (!section) continue;

        const sectionTop =
          section.getBoundingClientRect()
            .top +
          window.scrollY;

        if (
          scrollPosition >=
          sectionTop - offset
        ) {
          current = href;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();

    window.addEventListener(
      "scroll",
      updateActiveSection,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      updateActiveSection
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateActiveSection
      );

      window.removeEventListener(
        "resize",
        updateActiveSection
      );
    };
  }, [isHomePage]);

  const handleLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (!href.startsWith("#")) {
      return;
    }

    const id =
      href.substring(1);

    if (!isHomePage) {
      event.preventDefault();

      window.location.href =
        `/${href}`;

      return;
    }

    const target =
      document.getElementById(id);

    if (!target) {
      return;
    }

    event.preventDefault();

    setActiveSection(href);

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(
      null,
      "",
      href
    );
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname
      );
    }

    setActiveSection("#oportunidad");
  };

  const isLinkActive = (
    href: string
  ) => {
    if (href === "/nosotros") {
      return (
        pathname === "/nosotros" ||
        pathname.startsWith(
          "/nosotros/"
        )
      );
    }

    if (href.startsWith("/legal")) {
      return pathname === href;
    }

    if (href.startsWith("#")) {
      return (
        isHomePage &&
        activeSection === href
      );
    }

    return false;
  };

  return (
    <footer className={styles.footer}>
      {/* BOTÓN SUBIR */}

      <button
        type="button"
        className={styles.backToTop}
        onClick={handleBackToTop}
        aria-label="Volver al inicio"
        title="Volver al inicio"
      >
        <ChevronUp
          size={18}
          strokeWidth={1.7}
        />
      </button>

      <div
        className={`container ${styles.footerTop}`}
      >
        {/* BRAND */}

        <div className={styles.brand}>
          <Link
            href="/"
            className={styles.logo}
            aria-label="Moro Capital - Inicio"
            onClick={() => {
              setActiveSection(
                "#oportunidad"
              );
            }}
          >
            <Image
              src="/assets/inversionistas/logos/moro-capital_ligth.svg"
              alt="Moro Capital"
              width={154}
              height={42}
            />
          </Link>

          <p
            className={
              styles.brandDescription
            }
          >
            Capital orientado al desarrollo
            de oportunidades inmobiliarias
            privadas.
          </p>

          <div
            className={
              styles.contactInfo
            }
          >
            <a
              href="mailto:info@ancosur.com"
              className={
                styles.contactItem
              }
            >
              <span
                className={
                  styles.contactLabel
                }
              >
                Correo
              </span>

              <span>
                info@ancosur.com
              </span>
            </a>

            <div
              className={
                styles.contactItem
              }
            >
              <span
                className={
                  styles.contactLabel
                }
              >
                Oficina
              </span>

              <span>
                Av. San Carlos Nro. 1481,
                <br />
                Urb. San Antonio, Huancayo
              </span>
            </div>
          </div>
        </div>

        {/* NAVEGACIÓN */}

        {footerNavigation.map(
          (group) => (
            <nav
              key={group.title}
              className={styles.column}
              aria-label={group.title}
            >
              <strong
                className={
                  styles.columnTitle
                }
              >
                {group.title}
              </strong>

              <div
                className={
                  styles.columnLinks
                }
              >
                {group.links.map(
                  (link) => {
                    const active =
                      isLinkActive(
                        link.href
                      );

                    return (
                      <Link
                        key={link.label}
                        href={
                          link.href.startsWith(
                            "#"
                          ) &&
                          !isHomePage
                            ? `/${link.href}`
                            : link.href
                        }
                        className={`${styles.footerLink} ${
                          active
                            ? styles.footerLinkActive
                            : ""
                        }`}
                        aria-current={
                          active
                            ? "page"
                            : undefined
                        }
                        onClick={(
                          event
                        ) =>
                          handleLinkClick(
                            event,
                            link.href
                          )
                        }
                      >
                        <span>
                          {link.label}
                        </span>

                        {active && (
                          <span
                            className={
                              styles.activeIndicator
                            }
                            aria-hidden="true"
                          />
                        )}
                      </Link>
                    );
                  }
                )}
              </div>
            </nav>
          )
        )}
      </div>
    </footer>
  );
}