"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Menu,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  CONTACT,
} from "@/data/investors";

import styles from "./InvestorNavbar.module.css";

const navigation = [
  {
    label: "Oportunidad",
    href: "#oportunidad",
  },
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
    label: "Seguridad",
    href: "#seguridad",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

export default function InvestorNavbar() {
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  /* =====================================================
     SCROLL
     ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =====================================================
     WHATSAPP
     ===================================================== */

  const whatsapp = `https://wa.me/${
    CONTACT.phoneWhatsapp
  }?text=${encodeURIComponent(
    CONTACT.whatsappMessage
  )}`;

  /* =====================================================
     CLOSE MOBILE MENU
     ===================================================== */

  const handleNavigation = () => {
    setOpen(false);
  };

  return (
    <header
      className={`${styles.investorNavbar} ${
        scrolled
          ? styles.investorNavbarScrolled
          : ""
      }`}
    >
      {/* =================================================
          NAVBAR INNER
          ================================================= */}

      <div
        className={`${styles.investorContainer} ${styles.investorNavbarInner}`}
      >
        {/* =================================================
            LOGO
            ================================================= */}

        <Link
          href="/inversionistas"
          className={styles.investorNavbarLogo}
          aria-label="Moro Capital"
          onClick={handleNavigation}
        >
          <Image
            src="/assets/inversionistas/logos/moro-capital.svg"
            alt="Moro Capital"
            width={150}
            height={40}
            priority
          />
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
            ================================================= */}

        <nav
          className={styles.investorNavbarLinks}
          aria-label="Navegación principal"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* =================================================
            DESKTOP ACTION
            ================================================= */}

        <div
          className={styles.investorNavbarActions}
        >
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className={styles.investorButton}
          >
            Hablar con un asesor
          </a>
        </div>

        {/* =================================================
            MOBILE MENU BUTTON
            ================================================= */}

        <button
          type="button"
          className={styles.investorMenuButton}
          aria-label={
            open
              ? "Cerrar menú"
              : "Abrir menú"
          }
          aria-expanded={open}
          aria-controls="investor-mobile-menu"
          onClick={() =>
            setOpen(
              (previous) => !previous
            )
          }
        >
          {open ? (
            <X
              size={21}
              strokeWidth={1.7}
            />
          ) : (
            <Menu
              size={21}
              strokeWidth={1.7}
            />
          )}
        </button>
      </div>

      {/* =================================================
          MOBILE MENU
          ================================================= */}

      <div
        id="investor-mobile-menu"
        className={`${styles.investorMobileMenu} ${
          open
            ? styles.investorMobileMenuOpen
            : ""
        }`}
      >
        <div
          className={`${styles.investorContainer} ${styles.investorMobileMenuInner}`}
        >
          {/* =============================================
              MOBILE LINKS
              ============================================= */}

          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavigation}
            >
              {item.label}
            </a>
          ))}

          {/* =============================================
              MOBILE CONTACT
              ============================================= */}

          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className={
              styles.investorMobileMenuContact
            }
            onClick={handleNavigation}
          >
            Hablar con un asesor
          </a>
        </div>
      </div>
    </header>
  );
}