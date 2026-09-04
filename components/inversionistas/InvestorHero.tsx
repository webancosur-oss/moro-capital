import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

import {
  CONTACT,
} from "@/data/investors";

import Reveal from "./Reveal";

export default function InvestorHero() {
  const whatsapp = `https://wa.me/${
    CONTACT.phoneWhatsapp
  }?text=${encodeURIComponent(
    CONTACT.whatsappMessage,
  )}`;

  return (
    <section
      className="investorHero"
      id="oportunidad"
    >
      {/* =====================================
          FOTO
      ===================================== */}

      <div
        className="investorHeroBackground"
        aria-hidden="true"
      />

      {/* =====================================
          TRATAMIENTO OSCURO
      ===================================== */}

      <div
        className="investorHeroGradient"
        aria-hidden="true"
      />

      {/* =====================================
          CONTENIDO
      ===================================== */}

      <div className="investorContainer investorHeroContent">
        <Reveal className="investorHeroMain">
          <p className="investorEyebrow">
            MORO CAPITAL · INVERSIÓN INMOBILIARIA
          </p>

          <h1>
            Capital que construye.
            <span>
              Inversiones que generan valor.
            </span>
          </h1>

          <p className="investorHeroDescription">
            Participa en oportunidades
            privadas de inversión vinculadas
            al desarrollo de proyectos
            inmobiliarios respaldados por la
            experiencia del Grupo Moro Capital.
          </p>

          <div className="investorProfitability">
            <span>
              Rentabilidad estimada
            </span>

            <strong>
              Hasta 15% anual
            </strong>

            <p>
              Rentabilidad estimada según
              condiciones de inversión y
              documentación contractual.
            </p>
          </div>

          <div className="investorHeroDetails">
            <span>
              Inversión privada · Soles · Desde S/ 10,000
            </span>
          </div>
        </Reveal>

        {/* =====================================
            ACCIONES
        ===================================== */}

        <Reveal
          className="investorHeroActions"
          delay={0.12}
        >
          <a
            href="#planes"
            className="investorButton"
          >
            Conocer la oportunidad

            <ArrowUpRight
              size={17}
              strokeWidth={1.7}
            />
          </a>

          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="investorTextButton"
          >
            Hablar con un asesor

            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
            />
          </a>
        </Reveal>
      </div>

      {/* =====================================
          SCROLL
      ===================================== */}

      <a
        href="#indicadores"
        className="investorHeroScroll"
      >
        <span>
          SCROLL
        </span>

        <ArrowDown
          size={15}
          strokeWidth={1.4}
        />
      </a>
    </section>
  );
}