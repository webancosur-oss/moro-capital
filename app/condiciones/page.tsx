import {
  ArrowUpRight,
  Check,
  Clock3,
  FileCheck2,
  FileText,
  Landmark,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

import styles from "./page.module.css";

const conditions = [
  {
    icon: FileText,
    title: "Acuerdo notarial de mutuo",
    text: "Contrato firmado ante notario que fija el monto, plazo y utilidad de la inversión.",
  },
  {
    icon: FileCheck2,
    title: "Letra de cambio a tu favor",
    text: "Título valor que respalda la obligación de pago del capital.",
  },
  {
    icon: Clock3,
    title: "Plazo mínimo de 18 meses",
    text: "La inversión es a plazo fijo; no está pensada para capital de corto plazo.",
  },
  {
    icon: RotateCcw,
    title: "Rescate anticipado",
    text: "Puede solicitarse con 30 días hábiles de anticipación. En ese caso, se renuncia a toda utilidad generada hasta esa fecha.",
  },
  {
    icon: ShieldCheck,
    title: "Prevención de lavado de activos",
    text: "Sobre S/ 30,000 se activa el procedimiento PLAFT y se debe completar el formulario correspondiente.",
  },
  {
    icon: Landmark,
    title: "Administración",
    text: "La administración del fondo está a cargo de Ancosur SAC. No contempla comisión por administración.",
  },
];

export default function CondicionesPage() {
  return (
    <main className={styles.page}>

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className={styles.hero}>
        <div className={styles.heroDecoration} />

        <div className={styles.container}>
          <div className={styles.heroGrid}>

            <div className={styles.heroTitle}>
              <h1>
                Antes de invertir,
                <br />
                <span>conoce las reglas.</span>
              </h1>
            </div>

            <div className={styles.heroInfo}>

              <div className={styles.heroIcon}>
                <ShieldCheck
                  size={24}
                  strokeWidth={1.5}
                />
              </div>

              <p>
                Una inversión clara comienza por conocer sus
                condiciones. Aquí encontrarás los principales
                aspectos que debes considerar antes de firmar.
              </p>

              <a
                href="#condiciones"
                className={styles.heroLink}
              >
                <span>Revisar condiciones</span>

                <span className={styles.heroLinkCircle}>
                  <ArrowUpRight size={15} />
                </span>
              </a>

            </div>

          </div>

          <div className={styles.heroFooter}>
            <span>Fondo de deuda privada</span>
            <span>Moro Capital</span>
          </div>
        </div>
      </section>


      {/* =====================================================
          INTRODUCCIÓN
      ===================================================== */}
      <section className={styles.introduction}>
        <div className={styles.container}>

          <div className={styles.introductionGrid}>

            <h2>
              La información
              <br />
              también es parte
              <br />
              de tu inversión.
            </h2>

            <div className={styles.introductionContent}>

              <p className={styles.introductionLead}>
                Moro Capital es un fondo de deuda privada dirigido
                a inversionistas privados.
              </p>

              <p>
                No es una sociedad administradora de fondos ni una
                oferta pública de valores. Por eso, antes de tomar
                una decisión, es importante entender cómo se
                estructura la inversión y qué documentos la respaldan.
              </p>

              <div className={styles.introductionLine} />

              <p className={styles.introductionNote}>
                La documentación contractual correspondiente establece
                las condiciones aplicables a cada inversión.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          AVISO LEGAL
      ===================================================== */}
      <section className={styles.noticeSection}>
        <div className={styles.container}>

          <div className={styles.notice}>

            <div className={styles.noticeIcon}>
              <ShieldCheck
                size={24}
                strokeWidth={1.5}
              />
            </div>

            <div className={styles.noticeMain}>

              <h2>
                Moro Capital no está
                <br />
                supervisada por la SMV.
              </h2>

              <p>
                Es un fondo de deuda privada dirigido a
                inversionistas privados, no una sociedad
                administradora de fondos ni una oferta pública
                de valores.
              </p>

            </div>

            <div className={styles.noticeSecondary}>

              <div className={styles.noticeSecondaryLine} />

              <p>
                Tu respaldo son los documentos que firmas y el
                patrimonio del holding inmobiliario.
              </p>

              <p>
                La inversión inmobiliaria implica riesgos y las
                condiciones aplicables se encuentran establecidas
                en la documentación contractual correspondiente.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CONDICIONES
      ===================================================== */}
      <section
        id="condiciones"
        className={styles.conditions}
      >
        <div className={styles.container}>

          <div className={styles.conditionsHeader}>

            <h2>
              Lo que debes
              <br />
              tener claro.
            </h2>

            <p>
              Estos son los principales puntos que debes conocer
              sobre la estructura y operación de la inversión.
            </p>

          </div>


          <div className={styles.conditionsList}>

            {conditions.map((condition) => {
              const Icon = condition.icon;

              return (
                <article
                  className={styles.condition}
                  key={condition.title}
                >

                  <div className={styles.conditionIcon}>
                    <Icon
                      size={21}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className={styles.conditionContent}>

                    <h3>{condition.title}</h3>

                    <p>{condition.text}</p>

                  </div>

                  <div className={styles.conditionCheck}>
                    <Check size={14} />
                  </div>

                </article>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          RIESGO
      ===================================================== */}
      <section className={styles.risk}>
        <div className={styles.container}>

          <div className={styles.riskGrid}>

            <div className={styles.riskTitle}>
              <h2>
                Toda inversión
                <br />
                inmobiliaria
                <br />
                <em>tiene riesgo.</em>
              </h2>
            </div>

            <div className={styles.riskContent}>

              <div className={styles.riskQuote}>
                “
              </div>

              <p className={styles.riskLead}>
                El repago depende del ritmo de venta de los
                proyectos, y esas ventas pueden tomar más tiempo
                del previsto.
              </p>

              <p>
                Los factores de riesgo y liquidez están detallados
                en el contrato de mutuo dinerario.
              </p>

              <div className={styles.riskAdvice}>

                <div className={styles.riskCheck}>
                  <Check size={15} />
                </div>

                <p>
                  Revisa la documentación contractual antes de
                  tomar una decisión de inversión.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CIERRE
      ===================================================== */}
      <section className={styles.final}>
        <div className={styles.container}>

          <div className={styles.finalGrid}>

            <div className={styles.finalTitle}>
              <h2>
                Entender antes.
                <br />
                <em>Invertir después.</em>
              </h2>
            </div>

            <div className={styles.finalContent}>

              <p>
                Conoce las condiciones, comprende los riesgos y
                revisa la documentación que respalda tu inversión.
              </p>

              <div className={styles.finalBrand}>
                <span className={styles.finalBrandMark}>
                  <Check size={15} />
                </span>

                <span>Moro Capital</span>
              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}