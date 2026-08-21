import {
  BRANDS,
} from "@/data/investors";

import Reveal from "./Reveal";

export default function InvestorEcosystem() {
  return (
    <section className="investorSection investorEcosystem">
      <div className="investorContainer">
        <Reveal className="investorSectionHeader">
          <p className="investorEyebrow">
            GRUPO MORO CAPITAL
          </p>

          <h2>
            Un ecosistema que
            desarrolla valor
            inmobiliario.
          </h2>

          <p className="investorLead">
            Una estructura empresarial
            vinculada al desarrollo,
            construcción, vivienda,
            lotizaciones y proyectos de
            hospitalidad.
          </p>
        </Reveal>

        <div className="investorBrands">
          {BRANDS.map(
            (
              brand,
              index
            ) => (
              <Reveal
                key={
                  brand.name
                }
                className="investorBrand"
                delay={
                  index *
                  0.05
                }
              >
                <span>
                  0
                  {index + 1}
                </span>

                <div>
                  <strong>
                    {
                      brand.name
                    }
                  </strong>

                  <small>
                    {
                      brand.type
                    }
                  </small>
                </div>
              </Reveal>
            )
          )}
        </div>
      </div>
    </section>
  );
}