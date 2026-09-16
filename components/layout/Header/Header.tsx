"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, X } from "lucide-react";

import Container from "../Container/Container";
import styles from "./Header.module.css";

/* =========================================================

   El estado ACTIVE se detectará automáticamente.
========================================================= */

const navigation = [
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
] as const;


/* =========================================================
   NORMALIZAR RUTAS
========================================================= */

function normalizePath(path: string) {
  if (!path) return "/";

  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }

  return path;
}


/* =========================================================
   HEADER
========================================================= */

export default function Header() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);


  /* =======================================================
     CERRAR MENÚ
  ======================================================= */

  const closeMenu = () => {
    setMenuOpen(false);
  };


  /* =======================================================
     DETECTAR RUTA ACTIVA
  ======================================================= */

  const isActive = (href: string) => {
    const currentPath = normalizePath(pathname);
    const targetPath = normalizePath(href);

    /* Home */
    if (targetPath === "/") {
      return currentPath === "/";
    }

    /* Ruta exacta */
    if (currentPath === targetPath) {
      return true;
    }

    /* Subrutas */
    return currentPath.startsWith(`${targetPath}/`);
  };


  /* =======================================================
     BLOQUEAR SCROLL CUANDO MOBILE ESTÁ ABIERTO
  ======================================================= */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);


  /* =======================================================
     ESC PARA CERRAR
  ======================================================= */

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);


  /* =======================================================
     CERRAR MENÚ AL CAMBIAR DE RUTA
  ======================================================= */

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);


  /* =======================================================
     NAVEGACIÓN
  ======================================================= */

  const handleNavigation = () => {
    closeMenu();
  };


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <header
      className={styles.header}
      data-menu-open={menuOpen}
    >
      <Container className={styles.container}>

        {/* =================================================
            LOGO
        ================================================== */}

        <Link
          href="/"
          className={styles.logo}
          aria-label="Moro Capital - Inicio"
          onClick={closeMenu}
        >
          <Image
            src="/logos/moro-capital-logo.svg"
            alt="Moro Capital"
            width={180}
            height={55}
            priority
            className={styles.logoImage}
          />
        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <nav
          className={styles.navigation}
          aria-label="Navegación principal"
        >
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${
                  active ? styles.navLinkActive : ""
                }`}
                aria-current={
                  active ? "page" : undefined
                }
                onClick={handleNavigation}
              >
                <span>{item.label}</span>

                {active && (
                  <span
                    className={styles.activeDot}
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>


        {/* =================================================
            MOBILE BUTTON

            ESTE ES EL ÚNICO BOTÓN DE CIERRE.
            Cuando menuOpen = true muestra X.
        ================================================== */}

        <button
          type="button"
          className={`${styles.menuButton} ${
            menuOpen ? styles.menuButtonOpen : ""
          }`}
          onClick={() => {
            setMenuOpen((current) => !current);
          }}
          aria-label={
            menuOpen
              ? "Cerrar menú"
              : "Abrir menú"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <X
              size={21}
              strokeWidth={1.5}
            />
          ) : (
            <span className={styles.menuLines}>
              <span />
              <span />
            </span>
          )}
        </button>

      </Container>


      {/* ===================================================
          MOBILE MENU
      ==================================================== */}

      <div
        id="mobile-navigation"
        className={`${styles.mobileMenu} ${
          menuOpen
            ? styles.mobileMenuOpen
            : ""
        }`}
        aria-hidden={!menuOpen}
      >

        {/* =================================================
            BACKDROP
        ================================================== */}

        <button
          type="button"
          className={styles.mobileBackdrop}
          aria-label="Cerrar menú"
          onClick={closeMenu}
          tabIndex={menuOpen ? 0 : -1}
        />


        {/* =================================================
            PANEL
        ================================================== */}

        <div className={styles.mobilePanel}>

          {/* ===============================================
              TOP

              Se eliminó el segundo botón X.
              El cierre ahora se hace únicamente desde
              el botón circular del Header.
          ================================================ */}

          <div className={styles.mobilePanelTop}>
            <span>Moro Capital</span>
          </div>


          {/* ===============================================
              MOBILE NAVIGATION
          ================================================ */}

          <nav
            className={styles.mobileNavigation}
            aria-label="Navegación móvil"
          >
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.mobileNavLink} ${
                    active
                      ? styles.mobileNavLinkActive
                      : ""
                  }`}
                  aria-current={
                    active ? "page" : undefined
                  }
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={handleNavigation}
                >
                  <span>{item.label}</span>

                  <span
                    className={
                      styles.mobileNavArrow
                    }
                  >
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                    />
                  </span>
                </Link>
              );
            })}
          </nav>


          {/* ===============================================
              MOBILE BOTTOM
          ================================================ */}

          <div className={styles.mobileBottom}>
            <p>
              Capital que transforma.
              <br />
              Proyectos que trascienden.
            </p>

            <Link
              href="/fondos"
              className={styles.mobileCta}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span>
                Conoce nuestros fondos
              </span>

              <span
                className={styles.mobileCtaIcon}
              >
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                />
              </span>
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}