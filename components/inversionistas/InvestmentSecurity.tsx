import {
  FileSignature,
  ScrollText,
} from "lucide-react";

import Reveal from "./Reveal";

export default function InvestmentSecurity() {
  return (
    <section
      className="investorSection investorLight investorSecurity"
      id="seguridad"
    >
      <div className="investorContainer investorSecurityGrid">
        <Reveal className="investorSecurityIntro">
          <p className="investorEyebrow">
            SEGURIDAD Y DOCUMENTACIÓN
          </p>

          <h2>
            Transparencia desde
            <br />
            el contrato.
          </h2>

          <p className="investorLead">
            La estructura presentada
            contempla documentación
            específica para formalizar
            la relación entre el
            inversionista y la
            compañía.
          </p>

          <a
            href="#formulario"
            className="investorDarkButton"
          >
            Solicitar información
          </a>
        </Reveal>

        <div className="investorSecurityDocuments">
          <Reveal className="investorSecurityCard">
            <FileSignature
              size={27}
              strokeWidth={1.4}
            />

            <div>
              <span>
                DOCUMENTO 01
              </span>

              <h3>
                Acuerdo notarial de
                mutuo
              </h3>

              <p>
                Instrumento contractual
                utilizado dentro de la
                estructura de inversión
                presentada.
              </p>
            </div>
          </Reveal>

          <Reveal
            className="investorSecurityCard"
            delay={0.08}
          >
            <ScrollText
              size={27}
              strokeWidth={1.4}
            />

            <div>
              <span>
                DOCUMENTO 02
              </span>

              <h3>
                Letra de cambio
              </h3>

              <p>
                Documento contemplado
                dentro de las garantías
                indicadas para la
                inversión.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}