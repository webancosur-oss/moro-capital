"use client";

import {
  ArrowRightIcon,
  CheckCircleIcon,
  ChartLineUpIcon,
  ChatCircleDotsIcon,
  XIcon,
} from "@phosphor-icons/react";

import {
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  CONTACT,
} from "@/data/investors";

import styles from "./FloatingActions.module.css";

type Interest =
  | "oportunidad"
  | "planes"
  | "asesor";

type ChatStep =
  | "welcome"
  | "phone"
  | "success";

const optionLabels: Record<
  Interest,
  string
> = {
  oportunidad:
    "Conocer oportunidades de inversión",

  planes:
    "Conocer alternativas de inversión",

  asesor:
    "Hablar con un asesor",
};

export default function FloatingActions() {
  const [isOpen, setIsOpen] =
    useState(false);

  const [step, setStep] =
    useState<ChatStep>("welcome");

  const [interest, setInterest] =
    useState<Interest | null>(null);

  const [phone, setPhone] =
    useState("");

  const [phoneError, setPhoneError] =
    useState("");

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const inputRef =
    useRef<HTMLInputElement>(null);

  /* =========================================
     ESC
  ========================================= */

  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, []);

  /* =========================================
     FOCUS INPUT
  ========================================= */

  useEffect(() => {
    if (
      isOpen &&
      step === "phone"
    ) {
      const timer =
        window.setTimeout(() => {
          inputRef.current?.focus();
        }, 150);

      return () =>
        window.clearTimeout(timer);
    }
  }, [isOpen, step]);

  /* =========================================
     SELECT INTEREST
  ========================================= */

  const handleInterest = (
    selectedInterest: Interest,
  ) => {
    setInterest(
      selectedInterest,
    );

    setPhone("");
    setPhoneError("");

    setStep("phone");
  };

  /* =========================================
     PHONE
  ========================================= */

  const handlePhoneChange = (
    value: string,
  ) => {
    const digits = value
      .replace(/\D/g, "")
      .slice(0, 9);

    setPhone(digits);
    setPhoneError("");
  };

  const validatePhone = () => {
    if (!/^\d{9}$/.test(phone)) {
      setPhoneError(
        "Ingresa un número celular válido de 9 dígitos.",
      );

      return false;
    }

    return true;
  };

  /* =========================================
     SUBMIT
  ========================================= */

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (
      !interest ||
      !validatePhone()
    ) {
      return;
    }

    try {
      setIsSubmitting(true);

      const message = [
        "Hola, Moro Capital.",
        "",
        `Estoy interesado(a) en: ${
          optionLabels[interest]
        }.`,
        `Mi número celular es: ${phone}.`,
        "",
        "Quisiera recibir información sobre las oportunidades de inversión disponibles.",
      ].join("\n");

      const whatsappUrl =
        `https://wa.me/${
          CONTACT.phoneWhatsapp
        }?text=${encodeURIComponent(
          message,
        )}`;

      window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer",
      );

      setStep("success");
    } catch (error) {
      console.error(
        "Error abriendo WhatsApp:",
        error,
      );

      setPhoneError(
        "No pudimos abrir WhatsApp. Inténtalo nuevamente.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* =========================================
     RESET
  ========================================= */

  const resetChat = () => {
    if (isSubmitting) {
      return;
    }

    setStep("welcome");
    setInterest(null);
    setPhone("");
    setPhoneError("");
  };

  return (
    <div className={styles.wrapper}>
      {/* =====================================
          CHAT
      ===================================== */}

      {isOpen && (
        <section
          className={styles.chatWindow}
          role="dialog"
          aria-label="Asistente de Moro Capital"
          aria-modal="false"
        >
          {/* =================================
              HEADER
          ================================= */}

          <header
            className={styles.chatHeader}
          >
            <div
              className={
                styles.chatIdentity
              }
            >
              <div
                className={
                  styles.chatAvatar
                }
              >
                <ChartLineUpIcon
                  size={21}
                  weight="regular"
                />
              </div>

              <div
                className={
                  styles.chatIdentityText
                }
              >
                <strong>
                  Moro Capital
                </strong>

                <span>
                  Inversión inmobiliaria
                </span>
              </div>
            </div>

            <button
              type="button"
              className={
                styles.closeButton
              }
              onClick={() =>
                setIsOpen(false)
              }
              aria-label="Cerrar asistente"
            >
              <XIcon
                size={18}
                weight="bold"
              />
            </button>
          </header>

          {/* =================================
              BODY
          ================================= */}

          <div
            className={styles.chatBody}
          >
            {/* ===============================
                WELCOME
            =============================== */}

            {step === "welcome" && (
              <>
                <div
                  className={
                    styles.messageGroup
                  }
                >
                  <span
                    className={
                      styles.messageBubble
                    }
                  >
                    Hola. ¿Qué información
                    te gustaría conocer
                    sobre nuestras
                    oportunidades de
                    inversión?
                  </span>
                </div>

                <div
                  className={
                    styles.optionList
                  }
                >
                  <button
                    type="button"
                    className={
                      styles.optionButton
                    }
                    onClick={() =>
                      handleInterest(
                        "oportunidad",
                      )
                    }
                  >
                    <span>
                      Conocer oportunidades
                    </span>

                    <ArrowRightIcon
                      size={17}
                      weight="bold"
                    />
                  </button>

                  <button
                    type="button"
                    className={
                      styles.optionButton
                    }
                    onClick={() =>
                      handleInterest(
                        "planes",
                      )
                    }
                  >
                    <span>
                      Ver alternativas
                    </span>

                    <ArrowRightIcon
                      size={17}
                      weight="bold"
                    />
                  </button>

                  <button
                    type="button"
                    className={
                      styles.optionButton
                    }
                    onClick={() =>
                      handleInterest(
                        "asesor",
                      )
                    }
                  >
                    <span>
                      Hablar con un asesor
                    </span>

                    <ArrowRightIcon
                      size={17}
                      weight="bold"
                    />
                  </button>
                </div>
              </>
            )}

            {/* ===============================
                PHONE
            =============================== */}

            {step === "phone" &&
              interest && (
                <>
                  <div
                    className={
                      styles.messageGroup
                    }
                  >
                    <span
                      className={
                        styles.messageBubble
                      }
                    >
                      Perfecto. Has elegido{" "}
                      <strong>
                        {
                          optionLabels[
                            interest
                          ]
                        }
                      </strong>
                      .
                    </span>
                  </div>

                  <div
                    className={
                      styles.messageGroup
                    }
                  >
                    <span
                      className={
                        styles.messageBubble
                      }
                    >
                      Déjanos tu número
                      celular y
                      continuaremos la
                      conversación por
                      WhatsApp.
                    </span>
                  </div>

                  <form
                    className={
                      styles.phoneForm
                    }
                    onSubmit={
                      handleSubmit
                    }
                  >
                    <label
                      htmlFor="moro-phone"
                      className={
                        styles.phoneLabel
                      }
                    >
                      Número celular
                    </label>

                    <div
                      className={`${styles.phoneInputWrap} ${
                        phoneError
                          ? styles.phoneInputError
                          : ""
                      }`}
                    >
                      <span
                        className={
                          styles.countryPrefix
                        }
                      >
                        +51
                      </span>

                      <input
                        ref={inputRef}
                        id="moro-phone"
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel"
                        value={phone}
                        onChange={(
                          event,
                        ) =>
                          handlePhoneChange(
                            event.target
                              .value,
                          )
                        }
                        placeholder="999 999 999"
                        maxLength={9}
                        aria-invalid={Boolean(
                          phoneError,
                        )}
                      />
                    </div>

                    {phoneError && (
                      <span
                        className={
                          styles.errorMessage
                        }
                      >
                        {phoneError}
                      </span>
                    )}

                    <button
                      type="submit"
                      className={
                        styles.submitButton
                      }
                      disabled={
                        isSubmitting
                      }
                    >
                      <span>
                        {isSubmitting
                          ? "Abriendo WhatsApp..."
                          : "Continuar"}
                      </span>

                      {!isSubmitting && (
                        <ArrowRightIcon
                          size={17}
                          weight="bold"
                        />
                      )}
                    </button>

                    <button
                      type="button"
                      className={
                        styles.backButton
                      }
                      onClick={resetChat}
                      disabled={
                        isSubmitting
                      }
                    >
                      Cambiar opción
                    </button>
                  </form>
                </>
              )}

            {/* ===============================
                SUCCESS
            =============================== */}

            {step === "success" && (
              <div
                className={
                  styles.successState
                }
              >
                <div
                  className={
                    styles.successIcon
                  }
                >
                  <CheckCircleIcon
                    size={30}
                    weight="fill"
                  />
                </div>

                <strong>
                  ¡Listo!
                </strong>

                <p>
                  Hemos preparado tu
                  solicitud. Continúa la
                  conversación con Moro
                  Capital por WhatsApp.
                </p>

                <button
                  type="button"
                  className={
                    styles.restartButton
                  }
                  onClick={resetChat}
                >
                  Hacer otra consulta
                </button>
              </div>
            )}
          </div>

          {/* =================================
              FOOTER
          ================================= */}

          <footer
            className={
              styles.chatFooter
            }
          >
            MORO CAPITAL · INVERSIÓN
            INMOBILIARIA
          </footer>
        </section>
      )}

      {/* =====================================
          FLOATING BUTTON
      ===================================== */}

      <button
        type="button"
        className={`${styles.floatingButton} ${
          isOpen
            ? styles.floatingButtonOpen
            : ""
        }`}
        onClick={() =>
          setIsOpen(
            (previous) => !previous,
          )
        }
        aria-label={
          isOpen
            ? "Cerrar contacto"
            : "Abrir contacto"
        }
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <XIcon
            className={
              styles.closeFloatingIcon
            }
            size={23}
            weight="bold"
          />
        ) : (
          <>
            <div
              className={
                styles.floatingIcon
              }
            >
              <ChatCircleDotsIcon
                size={22}
                weight="regular"
              />
            </div>

            <span
              className={
                styles.floatingText
              }
            >
              <small>
                ¿Quieres invertir?
              </small>

              <strong>
                Hablemos
              </strong>
            </span>
          </>
        )}
      </button>
    </div>
  );
}