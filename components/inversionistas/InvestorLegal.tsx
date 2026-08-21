import {
  ShieldAlert,
} from "lucide-react";

import Reveal from "./Reveal";

export default function InvestorLegal() {
  return (
    <section className="investorLegal">
      <div className="investorContainer">
        <Reveal className="investorLegalInner">
          <div className="investorLegalIcon">
            <ShieldAlert
              size={21}
            />
          </div>

          <div>
            <p className="investorEyebrow">
              INFORMACIÓN IMPORTANTE
            </p>

            <h2>
              Información que todo
              inversionista debe
              conocer.
            </h2>

            <p>
              Moro Capital corresponde
              a una alternativa privada
              de inversión y, de
              acuerdo con la
              documentación
              proporcionada, no se
              encuentra supervisada por
              la Superintendencia del
              Mercado de Valores
              (SMV).
            </p>

            <p>
              Los factores de riesgo,
              liquidez, rentabilidad,
              plazos y condiciones
              aplicables deben ser
              revisados en la
              documentación contractual
              antes de invertir.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}