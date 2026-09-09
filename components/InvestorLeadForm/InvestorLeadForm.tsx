"use client";

import {
  FormEvent,
  useRef,
  useState,
} from "react";

import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Loader2,
  MessageCircle,
} from "lucide-react";

import { CONTACT } from "@/data/investors";
import styles from "./InvestorLeadForm.module.css";



const SOURCE_ID = 4;

const CAMPAIGN = "Moro Capital";

const AD_NAME = "Formulario inversionistas";

const REQUEST_TIMEOUT = 20_000;

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export default function InvestorLeadForm() {
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const submitLockRef = useRef(false);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (
      isSending ||
      submitLockRef.current
    ) {
      return;
    }

    submitLockRef.current = true;

    const form = event.currentTarget;

    setSent(false);
    setErrorMessage("");

    if (!form.checkValidity()) {
      form.reportValidity();
      submitLockRef.current = false;
      return;
    }

    const formData = new FormData(form);

    const name = String(
      formData.get("name") ?? ""
    )
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 80);

    const phone = String(
      formData.get("phone") ?? ""
    )
      .replace(/\D/g, "")
      .slice(0, 9);

    const email = String(
      formData.get("email") ?? ""
    )
      .trim()
      .toLowerCase()
      .slice(0, 120);

    const amount = String(
      formData.get("amount") ?? ""
    ).trim();

    const time = String(
      formData.get("time") ?? ""
    ).trim();

    const consent =
      formData.get("consent") === "accepted";

    /* ================================
       VALIDACIONES
    ================================= */

    const nameRegex =
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s.'’-]{3,80}$/;

    const phoneRegex =
      /^9\d{8}$/;

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!nameRegex.test(name)) {
      setErrorMessage(
        "Ingresa tu nombre completo usando letras y espacios."
      );

      submitLockRef.current = false;
      return;
    }

    if (!phoneRegex.test(phone)) {
      setErrorMessage(
        "El celular debe tener 9 dígitos y comenzar con 9."
      );

      submitLockRef.current = false;
      return;
    }

    if (
      email &&
      !emailRegex.test(email)
    ) {
      setErrorMessage(
        "Ingresa un correo electrónico válido."
      );

      submitLockRef.current = false;
      return;
    }

    if (!amount) {
      setErrorMessage(
        "Selecciona tu capital estimado."
      );

      submitLockRef.current = false;
      return;
    }

    if (!time) {
      setErrorMessage(
        "Selecciona cuándo te gustaría invertir."
      );

      submitLockRef.current = false;
      return;
    }

    if (!consent) {
      setErrorMessage(
        "Debes aceptar el tratamiento de tus datos."
      );

      submitLockRef.current = false;
      return;
    }

    /* ================================
       MENSAJE DEL CLIENTE
    ================================= */

    const clientMessage = [
      `Capital estimado: ${amount}`,
      `Momento para invertir: ${time}`,
    ].join(" | ");

    /* ================================
       COMENTARIO
    ================================= */

    const comentario = [
      "Formulario de inversionistas",
      "Proyecto: Moro Capital",
    ].join(" | ");

    /* ================================
       UTM
    ================================= */

    const params =
      new URLSearchParams(
        window.location.search
      );

    const utmSource =
      params.get("utm_source") ?? "";

    const utmMedium =
      params.get("utm_medium") ?? "";

    const utmCampaign =
      params.get("utm_campaign") ?? "";

    const utmContent =
      params.get("utm_content") ?? "";

    const utmTerm =
      params.get("utm_term") ?? "";

    /* ================================
       PAYLOAD
    ================================= */

   const formularioData = {
  codigo_formulario: "moro_capital_inversionistas",
  nombre_formulario: "Formulario de inversionistas Moro Capital",
  tipo_formulario: "inversionistas",
  fuente_id: SOURCE_ID,

  nombre: name,

  telefono: phone,

  email,

  dni: "",

  campaña: CAMPAIGN,

  anuncio: AD_NAME,

  msj_client: clientMessage,

  comentario,
};

    const controller =
      new AbortController();

    const timeoutId =
      window.setTimeout(() => {
        controller.abort();
      }, REQUEST_TIMEOUT);

    try {
      setIsSending(true);

      const response =
        await fetch(
          "https://ancosur-api-production.up.railway.app/api/formularios",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",

              Accept:
                "application/json",
            },

            body:
              JSON.stringify(
                formularioData
              ),

            cache: "no-store",

            signal:
              controller.signal,
          }
        );

      const raw =
        await response.text();

      let result: any = {};

      if (raw) {
        try {
          result =
            JSON.parse(raw);
        } catch {
          console.error(
            "Respuesta no JSON:",
            raw
          );

          setErrorMessage(
            `La API respondió HTTP ${response.status}.`
          );

          return;
        }
      }

      /* ================================
         VALIDACIÓN API
      ================================= */

      if (
        !response.ok ||
        result.success !== true
      ) {
        console.error(
          "Error registrando lead:",
          {
            status:
              response.status,

            result,

            payload:
              formularioData,
          }
        );

        setErrorMessage(
          result.message ||
            result.error ||
            "No fue posible registrar tus datos."
        );

        return;
      }

      /* ================================
         GOOGLE TAG MANAGER
      ================================= */

      window.dataLayer =
        window.dataLayer || [];

      window.dataLayer.push({
        event:
          "lead_form_submit",

        form_name:
          "Moro Capital",

        form_code:
          "moro_capital_inversionistas",

        form_type:
          "inversionistas",

        lead_type:
          "inversion",

        project:
          "Moro Capital",

        campaign:
          CAMPAIGN,

        source_id:
          SOURCE_ID,

        page_path:
          window.location.pathname,

        local_saved:
          true,

        crm_sent:
          true,

        utm_source:
          utmSource,

        utm_medium:
          utmMedium,

        utm_campaign:
          utmCampaign,

        utm_content:
          utmContent,

        utm_term:
          utmTerm,
      });

      /* ================================
         ÉXITO
      ================================= */

      form.reset();

      setSent(true);

      setErrorMessage("");
    } catch (error) {
      console.error(
        "Error enviando lead:",
        error
      );

      if (
        error instanceof Error &&
        error.name === "AbortError"
      ) {
        setErrorMessage(
          "El servidor tardó demasiado en responder. Inténtalo nuevamente."
        );

        return;
      }

      setErrorMessage(
        "No pudimos conectar con el servidor. Comprueba tu conexión e inténtalo nuevamente."
      );
    } finally {
      window.clearTimeout(
        timeoutId
      );

      submitLockRef.current = false;

      setIsSending(false);
    }
  };

  return (
    <section
      className={styles.section}
      id="formulario"
    >
      <div className="container">
        <div className={styles.grid}>

          <div className={styles.intro}>
            <span className={styles.label}>
              CONTACTO
            </span>

            <h2>
              Hablemos de
              <br />
              tu inversión.
            </h2>

            <p className={styles.lead}>
              Déjanos tus datos y recibe
              información sobre las
              oportunidades de inversión,
              condiciones y proyectos
              disponibles.
            </p>

            <div className={styles.contact}>
              <div className={styles.contactIcon}>
                <MessageCircle
                  size={19}
                  strokeWidth={1.4}
                  aria-hidden="true"
                />
              </div>

              <div className={styles.contactContent}>
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
                    ""
                  )}`}
                >
                  +51 {CONTACT.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <div className={styles.formHeader}>
              <div>
                <span>
                  SOLICITA INFORMACIÓN
                </span>

                <h3>
                  Conoce las alternativas
                  disponibles.
                </h3>
              </div>

              <p>
                Completa tus datos para
                conocer las alternativas
                disponibles.
              </p>
            </div>

            <div className={styles.fields}>
              <label className={styles.field}>
                <span>
                  Nombre completo
                </span>

                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  autoComplete="name"
                  maxLength={80}
                  required
                  disabled={isSending}
                />
              </label>

              <label className={styles.field}>
                <span>
                  Teléfono / WhatsApp
                </span>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+51 999 999 999"
                  autoComplete="tel"
                  inputMode="numeric"
                  maxLength={9}
                  required
                  disabled={isSending}
                />
              </label>

              <label className={styles.field}>
                <span>
                  Correo electrónico
                </span>

                <input
                  type="email"
                  name="email"
                  placeholder="correo@ejemplo.com"
                  autoComplete="email"
                  maxLength={120}
                  required
                  disabled={isSending}
                />
              </label>

              <label className={styles.field}>
                <span>
                  Capital estimado
                </span>

                <select
                  name="amount"
                  defaultValue=""
                  required
                  disabled={isSending}
                >
                  <option
                    value=""
                    disabled
                  >
                    Selecciona una opción
                  </option>

                  <option value="S/ 10,000 - S/ 30,000">
                    S/ 10,000 — S/ 30,000
                  </option>

                  <option value="S/ 30,000 - S/ 50,000">
                    S/ 30,000 — S/ 50,000
                  </option>

                  <option value="S/ 50,000 - S/ 100,000">
                    S/ 50,000 — S/ 100,000
                  </option>

                  <option value="Más de S/ 100,000">
                    Más de S/ 100,000
                  </option>
                </select>
              </label>

              <label
                className={`${styles.field} ${styles.fieldFull}`}
              >
                <span>
                  ¿Cuándo te gustaría invertir?
                </span>

                <select
                  name="time"
                  defaultValue=""
                  required
                  disabled={isSending}
                >
                  <option
                    value=""
                    disabled
                  >
                    Selecciona una opción
                  </option>

                  <option value="En los próximos 30 días">
                    En los próximos 30 días
                  </option>

                  <option value="En 1 a 3 meses">
                    En 1 a 3 meses
                  </option>

                  <option value="En 3 a 6 meses">
                    En 3 a 6 meses
                  </option>

                  <option value="Estoy evaluando">
                    Estoy evaluando
                  </option>
                </select>
              </label>
            </div>

            <label className={styles.consent}>
              <input
                type="checkbox"
                name="consent"
                value="accepted"
                defaultChecked
                required
                disabled={isSending}
              />

              <span
                className={styles.checkmark}
              >
                <Check
                  size={13}
                  strokeWidth={2.4}
                  aria-hidden="true"
                />
              </span>

              <span
                className={styles.consentText}
              >
                Acepto el tratamiento de mis
                datos para recibir información
                relacionada con oportunidades
                de inversión.
              </span>
            </label>

            {errorMessage && (
              <div
                className={styles.success}
                role="alert"
              >
                <span>
                  {errorMessage}
                </span>
              </div>
            )}

            <button
              type="submit"
              className={styles.submit}
              disabled={isSending}
              aria-busy={isSending}
            >
              {isSending ? (
                <>
                  <span>
                    Enviando información...
                  </span>

                  <Loader2
                    size={18}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </>
              ) : (
                <>
                  <span>
                    Solicitar información
                  </span>

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </>
              )}
            </button>

            {sent && (
              <div
                className={styles.success}
                role="status"
              >
                <CheckCircle2
                  size={18}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                <span>
                  Solicitud enviada. Un asesor
                  se pondrá en contacto contigo.
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}