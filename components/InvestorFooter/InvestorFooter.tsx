import Image from "next/image";
import {
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import styles from "./InvestorFooter.module.css";

export default function InvestorFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerTop}`}>
        <div className={styles.brand}>
          <a href="/" className={styles.logo} aria-label="Moro Capital - Inicio">
            <Image
              src="/assets/inversionistas/logos/moro-capital.svg"
              alt="Moro Capital"
              width={154}
              height={42}
            />
          </a>

          <p className={styles.brandDescription}>
            Capital orientado al desarrollo de oportunidades
            inmobiliarias privadas.
          </p>

          <div className={styles.socials}>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Moro Capital"
            >
              <FaInstagram size={17} />
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Moro Capital"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

        <nav className={styles.column} aria-label="Moro Capital">
          <strong>Moro Capital</strong>

          <a href="#oportunidad">Oportunidad</a>
          <a href="#trayectoria">Trayectoria</a>
          <a href="#moro416">Moro 416</a>
          <a href="#formulario">Contacto</a>
        </nav>

        <nav className={styles.column} aria-label="Inversionistas">
          <strong>Inversionistas</strong>

          <a href="#modelo">Cómo funciona</a>
          <a href="#planes">Alternativas</a>
          <a href="#seguridad">Seguridad</a>
          <a href="#faq">Preguntas frecuentes</a>
        </nav>

        <nav className={styles.column} aria-label="Legal">
          <strong>Legal</strong>

          <a href="#">Política de privacidad</a>
          <a href="#">Tratamiento de datos</a>
          <a href="#">Términos y condiciones</a>
        </nav>
      </div>

      <div className={`container ${styles.legal}`}>
        <div className={styles.legalText}>
          <p>
            La información contenida en este sitio es de carácter
            informativo y no constituye asesoría financiera,
            recomendación personalizada ni oferta pública de valores.
            Las condiciones finales de cada inversión se establecen en
            la documentación contractual correspondiente.
          </p>

          <p>
            Moro Capital no está supervisada por la Superintendencia
            del Mercado de Valores (SMV), de acuerdo con la información
            corporativa suministrada.
          </p>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 Moro Capital</span>
          <span>Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}