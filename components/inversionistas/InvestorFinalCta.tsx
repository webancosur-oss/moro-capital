import {
  ArrowUpRight,
} from "lucide-react";

import {
  CONTACT,
} from "@/data/investors";

import Reveal from "./Reveal";

export default function InvestorFinalCta() {
  const whatsapp = `https://wa.me/${
    CONTACT.phoneWhatsapp
  }?text=${encodeURIComponent(
    CONTACT.whatsappMessage
  )}`;

  return (
    <section className="investorFinalCta">
      <div className="investorFinalCtaGradient" />

      <div className="investorContainer investorFinalCtaInner">
        <Reveal>
          <p className="investorEyebrow">
            MORO CAPITAL
          </p>

          <h2>
            Tu próxima inversión puede
            construir algo real.
          </h2>

          <p>
            Conoce nuestras
            oportunidades
            inmobiliarias y recibe
            información sobre montos,
            plazos y condiciones.
          </p>

          <div className="investorHeroActions">
            <a
              href="#formulario"
              className="investorButton"
            >
              Quiero invertir

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
              Hablar por WhatsApp

              <ArrowUpRight
                size={16}
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}