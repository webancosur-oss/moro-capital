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
        {/* =====================================
            CONTENIDO
        ===================================== */}

        <Reveal className="investorProofContent">
          <p className="investorEyebrow">
            INVERSIÓN INMOBILIARIA
          </p>

          <h2>
            Invierte en
            <br />
            proyectos reales.
          </h2>

          <p className="investorLead">
            Una oportunidad para participar
            en el desarrollo de activos
            inmobiliarios respaldados por
            proyectos, ejecución y una
            estrategia orientada a la
            generación de valor.
          </p>

          <div className="investorProofItems">
            <div className="investorProofItem">
              <div className="investorProofItemIcon">
                <Building2
                  size={18}
                  strokeWidth={1.5}
                />
              </div>

              <div className="investorProofItemText">
                <span>
                  Activos inmobiliarios
                </span>

                <small>
                  Proyectos tangibles
                </small>
              </div>
            </div>

            <div className="investorProofItem">
              <div className="investorProofItemIcon">
                <Landmark
                  size={18}
                  strokeWidth={1.5}
                />
              </div>

              <div className="investorProofItemText">
                <span>
                  Desarrollo de proyectos
                </span>

                <small>
                  Ejecución y crecimiento
                </small>
              </div>
            </div>

            <div className="investorProofItem">
              <div className="investorProofItemIcon">
                <ChartNoAxesCombined
                  size={18}
                  strokeWidth={1.5}
                />
              </div>

              <div className="investorProofItemText">
                <span>
                  Gestión y estrategia
                </span>

                <small>
                  Visión orientada a valor
                </small>
              </div>
            </div>
          </div>
        </Reveal>

        {/* =====================================
            VISUAL
        ===================================== */}

        <Reveal
          className="investorProofVisual"
          delay={0.1}
        >
          <div className="investorProofGlow" />

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