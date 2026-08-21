"use client";

import {
  FormEvent,
  useState,
} from "react";

import {
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import {
  CONTACT,
} from "@/data/investors";

export default function InvestorLeadForm() {
  const [
    sent,
    setSent,
  ] = useState(false);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form =
      new FormData(
        event.currentTarget
      );

    const name =
      String(
        form.get("name") ||
          ""
      );

    const amount =
      String(
        form.get("amount") ||
          ""
      );

    const time =
      String(
        form.get("time") ||
          ""
      );

    const message = `
Hola, soy ${name}.

Vi la página de inversionistas de Moro Capital.

Estoy considerando invertir:
${amount}

Momento estimado:
${time}

Quisiera recibir mayor información sobre las oportunidades disponibles.
    `.trim();

    const url = `https://wa.me/${
      CONTACT.phoneWhatsapp
    }?text=${encodeURIComponent(
      message
    )}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );

    setSent(true);
  };

  return (
    <section
      className="investorSection investorFormSection"
      id="formulario"
    >
      <div className="investorContainer investorFormGrid">
        <div className="investorFormIntro">
          <p className="investorEyebrow">
            CONTACTO
          </p>

          <h2>
            Conversemos
            <br />
            sobre tu inversión.
          </h2>

          <p className="investorLead">
            Déjanos tus datos y conoce
            las alternativas de
            inversión disponibles,
            condiciones y proyectos
            vinculados.
          </p>

          <div className="investorAdvisor">
            <span>
              ASESOR DE INVERSIONES
            </span>

            <strong>
              {CONTACT.name}
            </strong>

            <p>
              {CONTACT.role}
            </p>

            <a
              href={`tel:+51${CONTACT.phoneDisplay.replace(
                /\s/g,
                ""
              )}`}
            >
              +51{" "}
              {
                CONTACT.phoneDisplay
              }
            </a>
          </div>
        </div>

        <form
          className="investorForm"
          onSubmit={
            handleSubmit
          }
        >
          <div className="investorFormFields">
            <label>
              <span>
                Nombre completo
              </span>

              <input
                name="name"
                required
                placeholder="Tu nombre"
              />
            </label>

            <label>
              <span>
                Teléfono /
                WhatsApp
              </span>

              <input
                name="phone"
                required
                inputMode="tel"
                placeholder="+51 999 999 999"
              />
            </label>

            <label>
              <span>
                Correo electrónico
              </span>

              <input
                name="email"
                type="email"
                required
                placeholder="correo@ejemplo.com"
              />
            </label>

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
                  disabled
                  value=""
                >
                  Selecciona
                </option>

                <option value="S/ 10,000 – S/ 30,000">
                  S/ 10,000 –
                  S/ 30,000
                </option>

                <option value="S/ 30,000 – S/ 50,000">
                  S/ 30,000 –
                  S/ 50,000
                </option>

                <option value="S/ 50,000 – S/ 100,000">
                  S/ 50,000 –
                  S/ 100,000
                </option>

                <option value="S/ 100,000 – S/ 300,000">
                  S/ 100,000 –
                  S/ 300,000
                </option>

                <option value="Más de S/ 300,000">
                  Más de
                  S/ 300,000
                </option>
              </select>
            </label>

            <label className="investorFormFull">
              <span>
                ¿Cuándo te gustaría
                invertir?
              </span>

              <select
                name="time"
                required
                defaultValue=""
              >
                <option
                  disabled
                  value=""
                >
                  Selecciona
                </option>

                <option value="Ahora">
                  Ahora
                </option>

                <option value="Próximos 30 días">
                  En los próximos
                  30 días
                </option>

                <option value="1 a 3 meses">
                  En 1 a 3 meses
                </option>

                <option value="Solo estoy evaluando">
                  Solo estoy
                  evaluando
                </option>
              </select>
            </label>
          </div>

          <label className="investorFormConsent">
            <input
              type="checkbox"
              required
            />

            <span>
              Acepto el tratamiento de
              mis datos para recibir
              información relacionada
              con oportunidades de
              inversión.
            </span>
          </label>

          <button
            type="submit"
            className="investorButton investorFormSubmit"
          >
            Solicitar información

            <ArrowUpRight
              size={16}
            />
          </button>

          {sent && (
            <div className="investorFormSuccess">
              <CheckCircle2
                size={17}
              />

              <span>
                Se abrió WhatsApp
                para continuar con
                tu solicitud.
              </span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}