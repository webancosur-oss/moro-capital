"use client";

import { FormEvent, useState } from "react";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

import { CONTACT } from "@/data/investors";
import styles from "./InvestorLeadForm.module.css";

export default function InvestorLeadForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const amount = String(data.get("amount") || "");
    const time = String(data.get("time") || "");

    const message = [
      "Hola, quiero recibir información sobre MORO CAPITAL.",
      "",
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
      `Correo: ${email}`,
      `Capital estimado: ${amount}`,
      `Momento para invertir: ${time}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/51${CONTACT.phoneDisplay.replace(
      /\s/g,
      ""
    )}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSent(true);
    form.reset();
  };

  return (
    <section className={styles.section} id="formulario">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.intro}>
            <span className={styles.label}>CONTACTO</span>

            <h2>
              Hablemos de
              <br />
              tu inversión.
            </h2>

            <p className={styles.lead}>
              Déjanos tus datos y recibe información sobre las
              oportunidades de inversión, condiciones y proyectos
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
                <span>CONTÁCTANOS</span>

                <strong>Conversemos sobre tu inversión</strong>

                <p>
                  Nuestro equipo puede orientarte sobre las
                  oportunidades disponibles.
                </p>

                <a
                  href={`tel:+51${CONTACT.phoneDisplay.replace(/\s/g, "")}`}
                >
                  +51 {CONTACT.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formHeader}>
              <div>
                <span>SOLICITA INFORMACIÓN</span>

                <h3>Conoce las alternativas disponibles.</h3>
              </div>

              <p>
                Completa tus datos para conocer las alternativas
                disponibles.
              </p>
            </div>

            <div className={styles.fields}>
              <label className={styles.field}>
                <span>Nombre completo</span>

                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  autoComplete="name"
                  required
                />
              </label>

              <label className={styles.field}>
                <span>Teléfono / WhatsApp</span>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+51 999 999 999"
                  autoComplete="tel"
                  required
                />
              </label>

              <label className={styles.field}>
                <span>Correo electrónico</span>

                <input
                  type="email"
                  name="email"
                  placeholder="correo@ejemplo.com"
                  autoComplete="email"
                  required
                />
              </label>

              <label className={styles.field}>
                <span>Capital estimado</span>

                <select name="amount" defaultValue="" required>
                  <option value="" disabled>
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

              <label className={`${styles.field} ${styles.fieldFull}`}>
                <span>¿Cuándo te gustaría invertir?</span>

                <select name="time" defaultValue="" required>
                  <option value="" disabled>
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
                  checked={true}
                  readOnly
                  required
                />

              <span className={styles.checkmark}>
                <Check
                
                  size={13}
                  strokeWidth={2.4}
                  aria-hidden="true"
                />
              </span>

              <span className={styles.consentText}>
                Acepto el tratamiento de mis datos para recibir
                información relacionada con oportunidades de inversión.
              </span>
            </label>

            <button type="submit" className={styles.submit}>
              <span>Solicitar información</span>

              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </button>

            {sent && (
              <div className={styles.success} role="status">
                <CheckCircle2
                  size={18}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />

                <span>
                  Solicitud enviada. Un asesor se pondrá en contacto
                  contigo.
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}