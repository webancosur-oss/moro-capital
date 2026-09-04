"use client";

import {
  FormEvent,
  useState,
} from "react";

import {
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

import { CONTACT } from "@/data/investors";

export default function InvestorLeadForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const form = new FormData(
      event.currentTarget,
    );

    const name = String(
      form.get("name") || "",
    );

    const phone = String(
      form.get("phone") || "",
    );

    const email = String(
      form.get("email") || "",
    );

    const amount = String(
      form.get("amount") || "",
    );

    const time = String(
      form.get("time") || "",
    );

    const message = `
Hola, soy ${name}.

Vi la página de inversión inmobiliaria de Moro Capital.

Mis datos:
Teléfono / WhatsApp: ${phone}
Correo: ${email}

Capital estimado:
${amount}

Momento estimado para invertir:
${time}

Quisiera recibir información sobre las oportunidades de inversión disponibles.
    `.trim();

    const url = `https://wa.me/${
      CONTACT.phoneWhatsapp
    }?text=${encodeURIComponent(
      message,
    )}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer",
    );

    setSent(true);

    event.currentTarget.reset();
  };

  return (
    <section
      className="investorSection investorFormSection"
      id="formulario"
    >
      <div className="investorContainer investorFormGrid">
        {/* =====================================
            INTRO
        ===================================== */}

        <div className="investorFormIntro">
          <p className="investorEyebrow">
            CONTACTO
          </p>

          <h2>
            Hablemos de
            <br />
            tu inversión.
          </h2>

          <p className="investorLead">
            Déjanos tus datos y recibe
            información sobre las
            oportunidades de inversión,
            condiciones y proyectos
            disponibles.
          </p>

          {/* =================================
              CONTACTO
          ================================= */}

          <div className="investorContactBlock">
            <div className="investorContactIcon">
              <MessageCircle
                size={18}
                strokeWidth={1.4}
              />
            </div>

            <div className="investorContactContent">
              <span>
                CONTÁCTANOS
              </span>

              <strong>
                Conversemos sobre tu inversión
              </strong>

              <p>
                Nuestro equipo puede orientarte
                sobre las oportunidades
                disponibles.
              </p>

              <a
                href={`tel:+51${CONTACT.phoneDisplay.replace(
                  /\s/g,
                  "",
                )}`}
              >
                +51 {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* =====================================
            FORMULARIO
        ===================================== */}

        <form
          className="investorForm"
          onSubmit={handleSubmit}
        >
          <div className="investorFormHeading">
            <span>
              SOLICITA INFORMACIÓN
            </span>

            <p>
              Completa tus datos para conocer
              las alternativas disponibles.
            </p>
          </div>

          <div className="investorFormFields">
            {/* NOMBRE */}

            <label>
              <span>
                Nombre completo
              </span>

              <input
                name="name"
                required
                autoComplete="name"
                placeholder="Tu nombre"
              />
            </label>

            {/* TELÉFONO */}

            <label>
              <span>
                Teléfono / WhatsApp
              </span>

              <input
                name="phone"
                required
                inputMode="tel"
                autoComplete="tel"
                placeholder="+51 999 999 999"
              />
            </label>

            {/* EMAIL */}

            <label>
              <span>
                Correo electrónico
              </span>

              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="correo@ejemplo.com"
              />
            </label>

            {/* CAPITAL */}

            <label>
              <span>
                Capital estimado
              </span>

              <select
                name="amount"
                required
                defaultValue=""
              >
                <option
                  value=""
                  disabled
                >
                  Selecciona una opción
                </option>

                <option value="S/ 10,000 – S/ 30,000">
                  S/ 10,000 – S/ 30,000
                </option>

                <option value="S/ 30,000 – S/ 50,000">
                  S/ 30,000 – S/ 50,000
                </option>

                <option value="S/ 50,000 – S/ 100,000">
                  S/ 50,000 – S/ 100,000
                </option>

                <option value="S/ 100,000 – S/ 300,000">
                  S/ 100,000 – S/ 300,000
                </option>

                <option value="Más de S/ 300,000">
                  Más de S/ 300,000
                </option>
              </select>
            </label>

            {/* MOMENTO */}

            <label className="investorFormFull">
              <span>
                ¿Cuándo te gustaría invertir?
              </span>

              <select
                name="time"
                required
                defaultValue=""
              >
                <option
                  value=""
                  disabled
                >
                  Selecciona una opción
                </option>

                <option value="Ahora">
                  Ahora
                </option>

                <option value="Próximos 30 días">
                  En los próximos 30 días
                </option>

                <option value="1 a 3 meses">
                  En 1 a 3 meses
                </option>

                <option value="Solo estoy evaluando">
                  Solo estoy evaluando
                </option>
              </select>
            </label>
          </div>

          {/* =================================
              CONSENTIMIENTO
          ================================= */}

          <label className="investorFormConsent">
            <input
              type="checkbox"
              required
            />

            <span>
              Acepto el tratamiento de mis
              datos para recibir información
              relacionada con oportunidades
              de inversión.
            </span>
          </label>

          {/* =================================
              CTA
          ================================= */}

          <button
            type="submit"
            className="investorButton investorFormSubmit"
          >
            Solicitar información

            <ArrowUpRight
              size={17}
              strokeWidth={1.6}
            />
          </button>

          {/* =================================
              SUCCESS
          ================================= */}

          {sent && (
            <div className="investorFormSuccess">
              <CheckCircle2
                size={17}
                strokeWidth={1.5}
              />

              <span>
                Se abrió WhatsApp para
                continuar con tu solicitud.
              </span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}