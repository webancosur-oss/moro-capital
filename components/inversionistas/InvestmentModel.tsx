import {
  CONDITIONS,
  MODEL_STEPS,
} from "@/data/investors";

import Reveal from "./Reveal";

export default function InvestmentModel() {
  return (
    <>
      <section
        className="investorSection investorLight investorModel"
        id="modelo"
      >
        <div className="investorContainer">
          <Reveal className="investorSectionHeader">
            <p className="investorEyebrow">
              EL MODELO
            </p>

            <h2>
              Del capital al desarrollo
              inmobiliario.
            </h2>
          </Reveal>

          <div className="investorModelGrid">
            {MODEL_STEPS.map(
              (
                step,
                index
              ) => (
                <Reveal
                  key={
                    step.number
                  }
                  className="investorModelItem"
                  delay={
                    index *
                    0.045
                  }
                >
                  <span className="investorModelNumber">
                    {
                      step.number
                    }
                  </span>

                  <h3>
                    {
                      step.title
                    }
                  </h3>

                  <p>
                    {
                      step.description
                    }
                  </p>
                </Reveal>
              )
            )}
          </div>
        </div>
      </section>

      <section className="investorSection investorConditions">
        <div className="investorContainer">
          <Reveal className="investorSectionHeader">
            <p className="investorEyebrow">
              CONDICIONES
            </p>

            <h2>
              Una estructura clara
              desde el inicio.
            </h2>
          </Reveal>

          <div className="investorConditionsGrid">
            {CONDITIONS.map(
              (
                item,
                index
              ) => (
                <Reveal
                  key={
                    item.label
                  }
                  className="investorCondition"
                  delay={
                    index *
                    0.04
                  }
                >
                  <strong>
                    {
                      item.value
                    }
                  </strong>

                  <span>
                    {
                      item.label
                    }
                  </span>
                </Reveal>
              )
            )}
          </div>

          <p className="investorFinePrint">
            Las condiciones de
            inversión, rescate,
            liquidez, rentabilidad y
            pagos están sujetas a la
            documentación contractual
            vigente.
          </p>
        </div>
      </section>
    </>
  );
}