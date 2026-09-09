import { BRANDS } from "@/data/investors";

import styles from "./InvestorEcosystem.module.css";
import Reveal from "../Reveal";

export default function InvestorEcosystem() {
  const holding = BRANDS.find(
    (brand) => brand.name.toLowerCase() === "moro capital"
  );

  const brands = BRANDS.filter(
    (brand) => brand.name.toLowerCase() !== "moro capital"
  ).slice(0, 4);

  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal className={styles.header}>
          <div className={styles.headerMain}>
            <span className={styles.label}>
              GRUPO MORO CAPITAL
            </span>

            <h2>
              Un ecosistema que
              <span>
                transforma capital en
                desarrollo inmobiliario.
              </span>
            </h2>
          </div>

          <p className={styles.lead}>
            Una estructura empresarial que integra
            distintas especialidades para desarrollar,
            construir y gestionar oportunidades
            inmobiliarias en diferentes segmentos.
          </p>
        </Reveal>

        <div className={styles.flow}>
          {holding && (
            <Reveal className={styles.holding}>

              <div className={styles.holdingMain}>
                <div className={styles.holdingBrand}>
                  {holding.image ? (
                    <img
                      src={holding.image}
                      alt={`${holding.name} - Grupo Moro Capital`}
                    />
                  ) : (
                    <strong>{holding.name}</strong>
                  )}
                </div>

                <span>INVERSIONES</span>
              </div>

              <div className={styles.holdingConnector} />
            </Reveal>
          )}

          <div
            className={styles.flowConnector}
            aria-hidden="true"
          >
            <span />
          </div>

          <div className={styles.brands}>
            {brands.map((brand, index) => (
              <Reveal
                key={brand.name}
                className={styles.brand}
                delay={index * 0.07}
              >
                <span
                  className={styles.brandConnector}
                  aria-hidden="true"
                />

                <div className={styles.brandCard}>
                  <div className={styles.brandTop}>

                    <span className={styles.brandLine} />
                  </div>

                  <div className={styles.brandImage}>
                    {brand.image ? (
                      <img
                        src={brand.image}
                        alt={`${brand.name} - Grupo Moro Capital`}
                        loading="lazy"
                      />
                    ) : (
                      <span className={styles.brandFallback}>
                        {brand.name}
                      </span>
                    )}
                  </div>

                  <div className={styles.brandContent}>
                    <strong>{brand.name}</strong>

                    <small>{brand.type}</small>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}