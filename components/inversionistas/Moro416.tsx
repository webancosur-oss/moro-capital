import {
  Check,
} from "lucide-react";

import {
  MORO_416_STATS,
} from "@/data/investors";

import Reveal from "./Reveal";

const progressItems = [
  "Resultado comercial exitoso",

  "Contrato de construcción firmado",

  "Inicio de construcción",

  "Financiamiento y aporte completados",
];

export default function Moro416() {
  return (
    <section
      className="investorMoro416"
      id="moro416"
    >
      <div className="investorMoro416Hero">
        <div className="investorMoro416Gradient" />

        <div className="investorContainer investorMoro416HeroContent">
          <Reveal>
            <p className="investorEyebrow">
              CASO DE INVERSIÓN
            </p>

            <h2>
              MORO
              <span>416</span>
            </h2>

            <p>
              Av. Giráldez y
              Ferrocarril · Huancayo
            </p>
          </Reveal>
        </div>
      </div>

      <div className="investorContainer investorMoro416Content">
        <div className="investorMoro416Stats">
          {MORO_416_STATS.map(
            (
              statistic,
              index
            ) => (
              <Reveal
                key={
                  statistic.label
                }
                className="investorMoro416Stat"
                delay={
                  index *
                  0.025
                }
              >
                <strong>
                  {
                    statistic.value
                  }
                </strong>

                <span>
                  {
                    statistic.label
                  }
                </span>
              </Reveal>
            )
          )}
        </div>

        <div className="investorMoro416Progress">
          <Reveal className="investorProgressCircleWrapper">
            <div className="investorProgressCircle">
              <div>
                <strong>
                  55%
                </strong>

                <span>
                  vendido
                </span>
              </div>
            </div>

            <small>
              Información al
              30/04/2025
            </small>
          </Reveal>

          <Reveal
            className="investorMoro416ProgressContent"
            delay={0.08}
          >
            <p className="investorEyebrow">
              AVANCE GLOBAL
            </p>

            <h3>
              Del papel a la
              ejecución.
            </h3>

            <div className="investorMoro416Checklist">
              {progressItems.map(
                (item) => (
                  <div
                    key={item}
                  >
                    <span>
                      <Check
                        size={
                          14
                        }
                      />
                    </span>

                    <p>
                      {
                        item
                      }
                    </p>
                  </div>
                )
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}