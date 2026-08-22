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
  const [open, setOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 30
      );
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

  const whatsapp = `https://wa.me/${
    CONTACT.phoneWhatsapp
  }?text=${encodeURIComponent(
    CONTACT.whatsappMessage
  )}`;

  return (
    <header
      className={`investorNavbar ${
        scrolled
          ? "investorNavbarScrolled"
          : ""
      }`}
    >
      <div className="investorContainer investorNavbarInner">
        <Link
          href="/inversionistas"
          className="investorNavbarLogo"
          aria-label="Moro Capital"
        >
          <Image
            src="/assets/inversionistas/logos/moro-capital.svg"
            alt="Moro Capital"
            width={150}
            height={40}
            priority
          />
        </Link>

        <nav className="investorNavbarLinks">
          {navigation.map(
            (item) => (
              <a
                key={item.href}
                href={item.href}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="investorNavbarActions">

          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="investorButton"
          >
            Hablar con un asesor
          </a>
        </div>

        <button
          type="button"
          className="investorMenuButton"
          aria-label={
            open
              ? "Cerrar menú"
              : "Abrir menú"
          }
          onClick={() =>
            setOpen(
              (previous) =>
                !previous
            )
          }
        >
          {open ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>
      </div>

      <div
        className={`investorMobileMenu ${
          open
            ? "investorMobileMenuOpen"
            : ""
        }`}
      >
        <div className="investorContainer investorMobileMenuInner">
          {navigation.map(
            (item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() =>
                  setOpen(false)
                }
              >
                {item.label}
              </a>
            )
          )}

          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="investorMobileMenuContact"
          >
            Hablar con un asesor
          </a>
        </div>
      </div>
    </header>
  );
}