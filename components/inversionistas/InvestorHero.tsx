import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

import {
  CONTACT,
  HERO,
} from "@/data/investors";

import Reveal from "./Reveal";

export default function InvestorHero() {
  const whatsapp = `https://wa.me/${
    CONTACT.phoneWhatsapp
  }?text=${encodeURIComponent(
    CONTACT.whatsappMessage
  )}`;

  return (
    <section
      className="investorHero"
      id="oportunidad"
    >
      <div className="investorHeroBackground" />

      <div className="investorHeroGradient" />

      <div className="investorContainer investorHeroContent">
        <Reveal className="investorHeroMain">
          <p className="investorEyebrow">
            {HERO.eyebrow}
          </p>

          <h1>
            {HERO.title}

            <span>
              {HERO.secondTitle}
            </span>
          </h1>

          <p className="investorHeroDescription">
            {HERO.description}
          </p>

          <div className="investorHeroActions">
            <a
              href="#planes"
              className="investorButton"
            >
              Conocer la oportunidad

              <ArrowUpRight
                size={16}
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
              />
            </a>
          </div>

          <div className="investorHeroDetails">
            {HERO.details.map(
              (detail) => (
                <span key={detail}>
                  {detail}
                </span>
              )
            )}
          </div>
        </Reveal>

        <Reveal
          className="investorProfitability"
          delay={0.15}
        >
          <span>
            Rentabilidad estimada
          </span>

          <strong>
            {HERO.profitability}
          </strong>

          <p>
            {
              HERO.profitabilityDescription
            }
          </p>
        </Reveal>
      </div>

      <a
        href="#indicadores"
        className="investorHeroScroll"
      >
        <span>Descubrir</span>

        <ArrowDown size={15} />
      </a>
    </section>
  );
}