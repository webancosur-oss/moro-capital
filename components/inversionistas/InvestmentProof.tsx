import {
  Building2,
  ChartNoAxesCombined,
  Landmark,
} from "lucide-react";

import Reveal from "./Reveal";

export default function InvestmentProof() {
  return (
    <section className="investorSection investorProof">
      <div className="investorContainer investorProofGrid">
        <Reveal className="investorProofContent">
          <p className="investorEyebrow">
            INVERSIÓN INMOBILIARIA
          </p>

          <h2>
            Proyectos que
            <br />
            puedes ver.
          </h2>

          <p className="investorLead">
            Tu capital participa en
            proyectos reales de
            desarrollo inmobiliario,
            dentro de una estructura
            enfocada en crecimiento,
            ejecución y generación de
            valor.
          </p>

          <div className="investorProofItems">
            <div>
              <Building2
                size={18}
              />

              <span>
                Activos
                inmobiliarios
              </span>
            </div>

            <div>
              <Landmark
                size={18}
              />

              <span>
                Desarrollo de
                proyectos
              </span>
            </div>

            <div>
              <ChartNoAxesCombined
                size={18}
              />

              <span>
                Estrategia de
                renta fija
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal
          className="investorProofVisual"
          delay={0.1}
        >
          <div className="investorProofTower" />

          <div className="investorProofCaption">
            <span>
              MORO 416
            </span>

            <small>
              HUANCAYO · PERÚ
            </small>
          </div>
        </Reveal>
      </div>
    </section>
  );
}