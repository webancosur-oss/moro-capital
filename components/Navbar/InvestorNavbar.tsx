"use client";

import Image from "next/image";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import {
  useEffect,
  useState,
  type MouseEvent,
} from "react";
import { usePathname } from "next/navigation";

import styles from "./InvestorNavbar.module.css";
import { CONTACT } from "@/data/investors";

const navigation = [
  {
    label: "Cómo funciona",
    href: "#modelo",
  },
  // {
  //   label: "Nosotros",
  //   href: "/nosotros",
  // },
  {
    label: "Trayectoria",
    href: "#trayectoria",
  },
  {
    label: "Moro 416",
    href: "#moro416",
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
    label: "FAQ",
    href: "#faq",
  },
];

const homeSections = navigation.filter(
  (item) => item.href.startsWith("#")
);

export default function InvestorNavbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] =
    useState("#oportunidad");

  /*
   * Define qué página debe aparecer activa.
   */
  const getPageActiveSection = () => {
    if (
      pathname === "/nosotros" ||
      pathname.startsWith("/nosotros/")
    ) {
      return "/nosotros";
    }

    if (pathname.startsWith("/legal")) {
      return "";
    }

    return "";
  };

  /*
   * Seguimiento del scroll.
   *
   * Solo se ejecuta sobre la landing principal.
   */
  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY;

      setScrolled(scrollPosition > 24);

      /*
       * Páginas internas.
       */
      if (pathname !== "/") {
        setActiveSection(
          getPageActiveSection()
        );

        return;
      }

      /*
       * Landing principal.
       */
      const navbarHeight =
        window.innerWidth <= 900
          ? 72
          : 82;

      let currentSection =
        "#oportunidad";

      for (const item of homeSections) {
        const id =
          item.href.substring(1);

        const section =
          document.getElementById(id);

        if (!section) continue;

        const sectionTop =
          section.getBoundingClientRect()
            .top + window.scrollY;

        if (
          scrollPosition >=
          sectionTop -
            navbarHeight -
            120
        ) {
          currentSection =
            item.href;
        }
      }

      setActiveSection(
        currentSection
      );
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
  }, [pathname]);

  /*
   * Bloquea el scroll cuando
   * el menú móvil está abierto.
   */
  useEffect(() => {
    document.body.style.overflow =
      open ? "hidden" : "";

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [open]);

  /*
   * Navegación centralizada.
   */
  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setOpen(false);

    /*
     * Ruta normal:
     * /nosotros
     */
    if (!href.startsWith("#")) {
      setActiveSection(href);
      return;
    }

    const id =
      href.substring(1);

    /*
     * Si estamos en una página interna,
     * primero vamos a la landing.
     */
    if (pathname !== "/") {
      event.preventDefault();

      window.location.href =
        `/${href}`;

      return;
    }

    /*
     * Estamos en la landing.
     */
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

    /*
     * Actualiza el hash sin
     * recargar la página.
     */
    window.history.replaceState(
      null,
      "",
      href
    );
  };

  const isActive = (
    href: string
  ) => {
    return (
      activeSection === href
    );
  };

  return (
    <header
      className={`${styles.navbar} ${
        scrolled
          ? styles.navbarScrolled
          : ""
      }`}
    >
      <div
        className={`container ${styles.navbarInner}`}
      >
        {/* LOGO */}

        <a
          href="/"
          className={styles.logo}
          aria-label="Moro Capital - Inicio"
          onClick={() =>
            setOpen(false)
          }
        >
          <Image
            src="/assets/inversionistas/logos/moro-capital.svg"
            alt="Moro Capital"
            width={150}
            height={42}
            priority
          />
        </a>

        {/* DESKTOP NAVIGATION */}

        <nav
          className={styles.navigation}
          aria-label="Navegación principal"
        >
          {navigation.map(
            (item) => {
              const active =
                isActive(
                  item.href
                );

              const destination =
                item.href.startsWith(
                  "#"
                ) &&
                pathname !== "/"
                  ? `/${item.href}`
                  : item.href;

              return (
                <a
                  key={item.label}
                  href={destination}
                  className={
                    active
                      ? styles.active
                      : ""
                  }
                  aria-current={
                    active
                      ? "page"
                      : undefined
                  }
                  onClick={(
                    event
                  ) =>
                    handleNavigation(
                      event,
                      item.href
                    )
                  }
                >
                  {item.label}
                </a>
              );
            }
          )}
        </nav>

        {/* CTA DESKTOP */}

        <a
          href="#formulario"
          rel="noopener noreferrer"
          className={
            styles.desktopCta
          }
        >
          <span>
            Hablar con un asesor
          </span>

          <ArrowUpRight
            size={16}
            strokeWidth={1.6}
          />
        </a>

        {/* MENU MOBILE */}

        <button
          type="button"
          className={
            styles.menuButton
          }
          onClick={() =>
            setOpen(
              (value) => !value
            )
          }
          aria-label={
            open
              ? "Cerrar menú"
              : "Abrir menú"
          }
          aria-expanded={open}
        >
          {open ? (
            <X
              size={22}
              strokeWidth={1.5}
            />
          ) : (
            <Menu
              size={22}
              strokeWidth={1.5}
            />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}

      <div
        className={`${styles.mobileMenu} ${
          open
            ? styles.mobileMenuOpen
            : ""
        }`}
        aria-hidden={!open}
      >
        <div
          className={
            styles.mobileMenuInner
          }
        >
          <nav
            className={
              styles.mobileNavigation
            }
            aria-label="Navegación móvil"
          >
            {navigation.map(
              (item, index) => {
                const active =
                  isActive(
                    item.href
                  );

                const destination =
                  item.href.startsWith(
                    "#"
                  ) &&
                  pathname !== "/"
                    ? `/${item.href}`
                    : item.href;

                return (
                  <a
                    key={item.label}
                    href={destination}
                    className={
                      active
                        ? styles.mobileActive
                        : ""
                    }
                    tabIndex={
                      open
                        ? 0
                        : -1
                    }
                    aria-current={
                      active
                        ? "page"
                        : undefined
                    }
                    onClick={(
                      event
                    ) =>
                      handleNavigation(
                        event,
                        item.href
                      )
                    }
                  >
                    <span
                      className={
                        styles.mobileNumber
                      }
                    >
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <span
                      className={
                        styles.mobileLabel
                      }
                    >
                      {
                        item.label
                      }
                    </span>

                    <span
                      className={
                        styles.mobileIndicator
                      }
                      aria-hidden="true"
                    />
                  </a>
                );
              }
            )}
          </nav>

          <a
            href={`https://wa.me/${CONTACT.whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className={
              styles.mobileCta
            }
            tabIndex={
              open
                ? 0
                : -1
            }
            onClick={() =>
              setOpen(false)
            }
          >
            <span>
              Hablar con un asesor
            </span>

            <ArrowUpRight
              size={18}
              strokeWidth={1.5}
            />
          </a>
        </div>
      </div>
    </header>
  );
}