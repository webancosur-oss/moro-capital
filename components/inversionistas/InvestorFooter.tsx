import Image from "next/image";

import {
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function InvestorFooter() {
  return (
    <footer className="investorFooter">
      <div className="investorContainer investorFooterTop">
        {/* BRAND */}
        <div className="investorFooterBrand">
          <Image
            src="/assets/inversionistas/logos/moro-capital.svg"
            alt="Moro Capital"
            width={154}
            height={42}
          />

          <p>
            Capital orientado al desarrollo de
            oportunidades inmobiliarias privadas.
          </p>

          <div className="investorFooterSocials">
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

        {/* MORO CAPITAL */}
        <div className="investorFooterColumn">
          <strong>Moro Capital</strong>

          <a href="#oportunidad">
            Oportunidad
          </a>

          <a href="#trayectoria">
            Trayectoria
          </a>

          <a href="#moro416">
            Moro 416
          </a>

          <a href="#formulario">
            Contacto
          </a>
        </div>

        {/* INVERSIONISTAS */}
        <div className="investorFooterColumn">
          <strong>Inversionistas</strong>

          <a href="#modelo">
            Cómo funciona
          </a>

          <a href="#planes">
            Alternativas
          </a>

          <a href="#seguridad">
            Seguridad
          </a>

          <a href="#faq">
            Preguntas frecuentes
          </a>
        </div>

        {/* LEGAL */}
        <div className="investorFooterColumn">
          <strong>Legal</strong>

          <a href="#">
            Política de privacidad
          </a>

          <a href="#">
            Tratamiento de datos
          </a>

          <a href="#">
            Términos y condiciones
          </a>
        </div>
      </div>

      {/* LEGAL BOTTOM */}
      <div className="investorContainer investorFooterLegal">
        <p>
          La información contenida en este sitio es de
          carácter informativo y no constituye asesoría
          financiera, recomendación personalizada ni
          oferta pública de valores. Las condiciones
          finales de cada inversión se establecen en la
          documentación contractual correspondiente.
        </p>

        <p>
          Moro Capital no está supervisada por la
          Superintendencia del Mercado de Valores (SMV),
          de acuerdo con la información corporativa
          suministrada.
        </p>

        <div className="investorFooterBottom">
          <span>
            © 2026 Moro Capital
          </span>

          <span>
            Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}