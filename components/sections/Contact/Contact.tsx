"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal/Reveal";
import styles from "./Contact.module.css";

const WHATSAPP_NUMBER = "51904239657";

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "+51 904 239 657",
    secondary: "César Matamoros",
    href: "tel:+51904239657",
  },
  {
    icon: Mail,
    label: "Correo",
    value: "ancosur@gmail.com",
    href: "mailto:ancosur@gmail.com",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Av. San Carlos 1481",
    secondary: "Huancayo 12001 · Junín · Perú",
    href: "https://www.google.com/maps/search/?api=1&query=Av.+San+Carlos+1481%2C+Huancayo+12001%2C+Per%C3%BA",
    external: true,
  },
];

const interests = [
  "Quiero conocer el fondo",
  "Quiero conocer las condiciones",
  "Quiero conversar con un asesor",
  "Otro motivo",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name =
      String(formData.get("name") || "").trim();

    const lastName =
      String(formData.get("lastName") || "").trim();

    const email =
      String(formData.get("email") || "").trim();

    const phone =
      String(formData.get("phone") || "").trim();

    const interest =
      String(formData.get("interest") || "").trim();

    const message =
      String(formData.get("message") || "").trim();

    const whatsappMessage = `
Hola César, quiero solicitar información sobre Moro Capital.

*DATOS DEL INTERESADO*

*Nombre:* ${name}
*Apellido:* ${lastName}
*Correo:* ${email}
*Teléfono:* ${phone}

*INTERÉS*

${interest}

*MENSAJE*

${message || "No se ingresó un mensaje adicional."}

Enviado desde la página web de Moro Capital.
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    setSubmitted(true);
  };

  return (
    <main className={styles.page}>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.container}>
          <Reveal>
            <div className={styles.heroContent}>
              <h1>
                Hablemos de
                <br />
                <strong>inversión.</strong>
              </h1>

              <p>
                Si quieres conocer el fondo, resolver una duda
                o conversar sobre una oportunidad de inversión,
                nuestro equipo está disponible para orientarte.
              </p>
            </div>
          </Reveal>
        </div>
      </section>


      {/* =====================================================
          CONTACTO
      ====================================================== */}

      <section className={styles.contactSection}>
        <div className={styles.container}>

          <div className={styles.contactGrid}>

            {/* =================================================
                INFORMACIÓN
            ================================================== */}

            <Reveal>
              <aside className={styles.contactInfo}>

                <div className={styles.infoIntro}>
                  <h2>
                    Conversemos
                    <br />
                    <strong>directamente.</strong>
                  </h2>

                  <p>
                    Queremos que tengas toda la información
                    necesaria antes de tomar una decisión.
                  </p>
                </div>


                <div className={styles.infoList}>
                  {contactInfo.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className={styles.infoItem}
                        target={
                          item.external
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          item.external
                            ? "noopener noreferrer"
                            : undefined
                        }
                        aria-label={
                          item.label === "Ubicación"
                            ? "Ver ubicación en Google Maps"
                            : item.label
                        }
                      >
                        <span className={styles.infoIcon}>
                          <Icon
                            size={17}
                            strokeWidth={1.5}
                          />
                        </span>

                        <span className={styles.infoText}>
                          <small>{item.label}</small>

                          <strong>
                            {item.value}
                          </strong>

                          {item.secondary && (
                            <span
                              className={
                                styles.infoSecondary
                              }
                            >
                              {item.secondary}
                            </span>
                          )}
                        </span>

                        <ArrowUpRight
                          className={styles.infoArrow}
                          size={16}
                          strokeWidth={1.5}
                        />
                      </a>
                    );
                  })}
                </div>


                <div className={styles.infoNote}>
                  <span />

                  <p>
                    Atención personalizada para consultas
                    relacionadas con inversión y fondos.
                  </p>
                </div>

              </aside>
            </Reveal>


            {/* =================================================
                FORMULARIO
            ================================================== */}

            <Reveal>
              <div className={styles.formCard}>

                {!submitted ? (
                  <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                  >

                    <div className={styles.formHeader}>
                      <h2>
                        Cuéntanos cómo
                        <br />
                        podemos ayudarte.
                      </h2>

                      <p>
                        Completa tus datos y nuestro equipo
                        se pondrá en contacto contigo.
                      </p>
                    </div>


                    <div className={styles.fieldsGrid}>

                      <label className={styles.field}>
                        <span>Nombre</span>

                        <input
                          type="text"
                          name="name"
                          placeholder="Tu nombre"
                          autoComplete="given-name"
                          required
                        />
                      </label>


                      <label className={styles.field}>
                        <span>Apellido</span>

                        <input
                          type="text"
                          name="lastName"
                          placeholder="Tu apellido"
                          autoComplete="family-name"
                          required
                        />
                      </label>


                      <label className={styles.field}>
                        <span>Correo electrónico</span>

                        <input
                          type="email"
                          name="email"
                          placeholder="tu@email.com"
                          autoComplete="email"
                          required
                        />
                      </label>


                      <label className={styles.field}>
                        <span>Teléfono</span>

                        <input
                          type="tel"
                          name="phone"
                          placeholder="+51"
                          autoComplete="tel"
                          required
                        />
                      </label>

                    </div>


                    <label className={styles.field}>
                      <span>¿Qué te interesa?</span>

                      <select
                        name="interest"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Selecciona una opción
                        </option>

                        {interests.map((interest) => (
                          <option
                            key={interest}
                            value={interest}
                          >
                            {interest}
                          </option>
                        ))}
                      </select>
                    </label>


                    <label className={styles.field}>
                      <span>Mensaje</span>

                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Cuéntanos un poco más..."
                      />
                    </label>


                    <div className={styles.formBottom}>

                      <label className={styles.checkbox}>
                        <input
                          type="checkbox"
                          defaultChecked
                          required
                        />

                        <span>
                          Acepto ser contactado para recibir
                          información relacionada con mi consulta.
                        </span>
                      </label>


                      <button
                        type="submit"
                        className={styles.submit}
                      >
                        <span>
                          Enviar
                        </span>

                        <span
                          className={styles.submitIcon}
                        >
                          <ArrowUpRight
                            size={17}
                            strokeWidth={1.6}
                          />
                        </span>
                      </button>

                    </div>

                  </form>
                ) : (
                  <div className={styles.success}>

                    <div className={styles.successIcon}>
                      <span>✓</span>
                    </div>

                    <h2>
                      Consulta
                      <br />
                      <strong>enviada.</strong>
                    </h2>

                    <p>
                      Se abrió WhatsApp con los datos que
                      ingresaste. Solo debes confirmar el envío
                      del mensaje para contactar a César
                      Matamoros.
                    </p>

                    <button
                      type="button"
                      className={styles.reset}
                      onClick={() => setSubmitted(false)}
                    >
                      Nueva consulta
                    </button>

                  </div>
                )}

              </div>
            </Reveal>

          </div>
        </div>
      </section>


      {/* =====================================================
          CIERRE
      ====================================================== */}

      <section className={styles.closing}>
        <div className={styles.container}>

          <Reveal>
            <div className={styles.closingContent}>

              <h2>
                Una conversación puede ser
                <br />
                el inicio de una nueva
                <br />
                <strong>oportunidad.</strong>
              </h2>

              <a
                href="https://wa.me/51904239657"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.closingButton}
              >
                <span>Hablar con un asesor</span>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.5}
                />
              </a>

            </div>
          </Reveal>

        </div>
      </section>

    </main>
  );
}