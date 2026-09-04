import { BRANDS } from "@/data/investors";

import Reveal from "./Reveal";

export default function InvestorEcosystem() {
  return (
    <section className="investorSection investorEcosystem">
      <div className="investorContainer">
        {/* =====================================
            HEADER
        ===================================== */}

        <Reveal className="investorSectionHeader">
          <p className="investorEyebrow">
            GRUPO MORO CAPITAL
          </p>

          <h2>
            Un ecosistema que
            <span>
              transforma capital en
              desarrollo inmobiliario.
            </span>
          </h2>

          <p className="investorLead">
            Una estructura empresarial que
            integra distintas especialidades
            para desarrollar, construir y
            gestionar oportunidades
            inmobiliarias en diferentes
            segmentos.
          </p>
        </Reveal>

        {/* =====================================
            MARCAS
        ===================================== */}

        <div className="investorBrands">
          {BRANDS.map((brand, index) => (
            <Reveal
              key={brand.name}
              className="investorBrand"
              delay={index * 0.05}
            >
              <div className="investorBrandTop">
                <span className="investorBrandNumber">
                  {String(
                    index + 1,
                  ).padStart(2, "0")}
                </span>

                <span className="investorBrandLine" />
              </div>

              <div className="investorBrandContent">
                <strong>
                  {brand.name}
                </strong>

                <small>
                  {brand.type}
                </small>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}