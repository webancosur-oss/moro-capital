import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import styles from "./LegalPage.module.css";

type LegalPageType =
  | "privacidad"
  | "datos"
  | "terminos";

type LegalPageProps = {
  type: LegalPageType;
};

const legalNavigation = [
  {
    id: "privacidad",
    number: "01",
    label: "Política de privacidad",
    href: "/legal/politica-de-privacidad",
  },
  {
    id: "datos",
    number: "02",
    label: "Tratamiento de datos",
    href: "/legal/tratamiento-de-datos",
  },
  {
    id: "terminos",
    number: "03",
    label: "Términos y condiciones",
    href: "/legal/terminos-y-condiciones",
  },
] as const;

const pageContent = {
  privacidad: {
    kicker: "POLÍTICA DE PRIVACIDAD",
    title: (
      <>
        Transparencia,
        <br />
        información y protección.
      </>
    ),
    description:
      "Conoce cómo Moro Capital recopila, utiliza, conserva y protege la información de los usuarios de este sitio web.",
    label: "PRIVACIDAD",
    aside: "Privacidad",
    heading: "Política de privacidad",
  },

  datos: {
    kicker: "PROTECCIÓN DE DATOS",
    title: (
      <>
        Protección y tratamiento
        <br />
        responsable de tus datos.
      </>
    ),
    description:
      "Información sobre el tratamiento de datos personales y los derechos de sus titulares conforme a la normativa aplicable.",
    label: "PROTECCIÓN",
    aside: "Datos personales",
    heading: "Tratamiento de datos personales",
  },

  terminos: {
    kicker: "TÉRMINOS Y CONDICIONES",
    title: (
      <>
        Condiciones claras para
        <br />
        una relación transparente.
      </>
    ),
    description:
      "Consulta las condiciones aplicables al uso de este sitio web y a la información presentada por Moro Capital.",
    label: "CONDICIONES",
    aside: "Términos",
    heading: "Términos y condiciones",
  },
};

function PrivacyContent() {
  return (
    <div className={styles.prose}>
      <h3>1. Identificación del responsable</h3>

      <p>
        La presente Política de Privacidad regula el
        tratamiento de la información recopilada a través
        del sitio web de Moro Capital y de los canales
        digitales vinculados a sus actividades.
      </p>

      <p>
        Para efectos de esta política, el responsable del
        tratamiento será la entidad que figure como titular
        de los servicios, formularios y canales utilizados
        para la recopilación de información.
      </p>

      <div className={styles.notice}>
        <strong>Responsable del tratamiento de datos personales</strong>

        <p>
          El responsable del tratamiento de los datos personales es
          <strong> MORO CAPITAL SOCIEDAD ANONIMA CERRADA</strong>,
          identificada con RUC N.° 20606690526, con domicilio legal en
          Av. San Carlos Nro. 1481, Urb. San Antonio, Huancayo, Junín,
          Perú.
        </p>

        <p>
          Para consultas relacionadas con el tratamiento de datos
          personales o el ejercicio de los derechos ARCO, puede
          comunicarse al correo{" "}
          <a href="mailto:info@ancosur.com">info@ancosur.com</a>.
        </p>
      </div>

      <h3>2. Información que podemos recopilar</h3>

      <p>
        Dependiendo de la interacción realizada en el
        sitio, podremos recopilar información proporcionada
        directamente por el usuario, como nombres,
        apellidos, teléfono, correo electrónico, monto
        referencial de inversión y preferencias de contacto.
      </p>

      <p>
        También podremos recopilar información técnica
        asociada a la navegación, como dirección IP,
        navegador, dispositivo, páginas visitadas y datos
        necesarios para garantizar el funcionamiento,
        seguridad y mejora del sitio.
      </p>

      <h3>3. Finalidades del tratamiento</h3>

      <p>
        La información podrá ser utilizada para:
      </p>

      <ul>
        <li>Atender solicitudes de información.</li>
        <li>
          Contactar a personas interesadas en las
          oportunidades presentadas por Moro Capital.
        </li>
        <li>
          Gestionar solicitudes realizadas mediante
          formularios digitales.
        </li>
        <li>
          Brindar información solicitada sobre proyectos y
          alternativas de inversión.
        </li>
        <li>
          Gestionar comunicaciones relacionadas con la
          relación establecida con el usuario.
        </li>
        <li>
          Mantener la seguridad y funcionamiento del sitio.
        </li>
        <li>
          Cumplir obligaciones legales aplicables.
        </li>
      </ul>

      <h3>4. Conservación de la información</h3>

      <p>
        Los datos personales serán conservados durante el
        tiempo necesario para cumplir las finalidades para
        las que fueron recopilados y, cuando corresponda,
        durante los plazos exigidos por la legislación
        aplicable.
      </p>

      <h3>5. Seguridad</h3>

      <p>
        Moro Capital adopta medidas razonables de carácter
        técnico, organizativo y administrativo orientadas a
        proteger la información frente a accesos no
        autorizados, pérdida, alteración, divulgación o
        tratamiento indebido.
      </p>

      <h3>6. Terceros y proveedores</h3>

      <p>
        Cuando sea necesario para prestar determinados
        servicios, la información podrá ser tratada por
        proveedores tecnológicos, operadores de comunicación
        u otros terceros que actúen conforme a las
        instrucciones correspondientes y dentro del marco
        legal aplicable.
      </p>

      <h3>7. Cambios en esta política</h3>

      <p>
        Moro Capital podrá actualizar esta Política de
        Privacidad cuando resulte necesario por cambios
        normativos, tecnológicos, operativos o en los
        servicios ofrecidos.
      </p>
    </div>
  );
}

function DataContent() {
  return (
    <div className={styles.prose}>
      <h3>1. Marco normativo</h3>

      <p>
        El tratamiento de datos personales realizado a
        través de este sitio se efectúa de acuerdo con la
        legislación peruana aplicable en materia de
        protección de datos personales, incluyendo la Ley
        N.° 29733 y su Reglamento.
      </p>

      <h3>2. Consentimiento</h3>

      <p>
        Cuando corresponda, el tratamiento de datos
        personales se realizará sobre la base del
        consentimiento del titular, de acuerdo con las
        finalidades informadas al momento de recopilar la
        información.
      </p>

      <p>
        El usuario podrá retirar su consentimiento cuando
        corresponda, sin perjuicio de la licitud de los
        tratamientos realizados con anterioridad a dicho
        retiro.
      </p>

      <h3>3. Derechos del titular</h3>

      <p>
        El titular de los datos personales podrá ejercer,
        conforme a la normativa aplicable, los derechos que
        correspondan respecto de sus datos personales,
        incluyendo los derechos de acceso, rectificación,
        cancelación y oposición, además de aquellos
        reconocidos por la legislación vigente.
      </p>

      <h3>4. Ejercicio de derechos</h3>

      <p>
        Para ejercer sus derechos, el titular podrá
        presentar una solicitud a través del canal habilitado
        por Moro Capital, proporcionando la información
        necesaria para verificar su identidad y atender la
        solicitud.
      </p>

      <div className={styles.notice}>
        <strong>Solicitudes de derechos ARCO</strong>

        <p>
          Las solicitudes para el ejercicio de los derechos ARCO pueden
          ser enviadas al correo <a href="mailto:info@ancosur.com">
          info@ancosur.com</a>.
        </p>

        <p>
          <strong>Dirección:</strong> Av. San Carlos 1481, San Antonio,
          Huancayo.
        </p>
      </div>

      <h3>5. Uso de formularios</h3>

      <p>
        Los formularios disponibles en el sitio podrán
        solicitar información necesaria para atender
        consultas, solicitudes de contacto o manifestaciones
        de interés.
      </p>

      <p>
        El usuario debe proporcionar información verdadera,
        exacta y actualizada. El suministro de datos de
        terceros requiere contar con la autorización o base
        legítima correspondiente.
      </p>

      <h3>6. Comunicaciones comerciales</h3>

      <p>
        Cuando corresponda y exista una base legal válida,
        Moro Capital podrá utilizar los datos proporcionados
        para enviar comunicaciones relacionadas con sus
        servicios, oportunidades, actividades o novedades.
      </p>

      <p>
        El usuario podrá solicitar dejar de recibir
        determinadas comunicaciones de carácter comercial
        mediante los mecanismos habilitados para tal efecto.
      </p>

      <h3>7. Transferencias</h3>

      <p>
        Cuando resulte necesario para las finalidades
        informadas, podrán intervenir proveedores o terceros
        relacionados con servicios tecnológicos, comunicación,
        almacenamiento, gestión de contactos u otros
        servicios necesarios para la operación.
      </p>

      <p>
        Cualquier transferencia o flujo de datos se realizará
        conforme a las condiciones y requisitos establecidos
        por la normativa aplicable.
      </p>
    </div>
  );
}

function TermsContent() {
  return (
    <div className={styles.prose}>
      <h3>1. Aceptación</h3>

      <p>
        El acceso y uso de este sitio web implica la
        aceptación de los presentes Términos y Condiciones.
        Si el usuario no está de acuerdo con alguna de sus
        disposiciones, deberá abstenerse de utilizar el sitio.
      </p>

      <h3>2. Naturaleza de la información</h3>

      <p>
        La información publicada en este sitio tiene carácter
        informativo y está destinada a presentar información
        general sobre Moro Capital, su estructura, proyectos
        y alternativas de inversión.
      </p>

      <p>
        La información disponible en el sitio no constituye
        por sí misma una recomendación financiera
        personalizada, asesoría financiera ni una oferta
        pública de valores.
      </p>

      <h3>3. Inversiones</h3>

      <p>
        Las oportunidades de inversión presentadas por Moro
        Capital se encuentran sujetas a condiciones,
        requisitos, documentación y evaluación
        correspondientes.
      </p>

      <p>
        De acuerdo con la documentación corporativa
        suministrada, Moro Capital se presenta como un fondo
        de deuda privada dirigido a inversionistas privados
        o personas que cumplan los criterios establecidos.
      </p>

      <p>
        Moro Capital declara en su documentación que no se
        encuentra supervisada por la Superintendencia del
        Mercado de Valores (SMV).
      </p>

      <h3>4. Condiciones de inversión</h3>

      <p>
        La documentación de inversión suministrada establece,
        entre otras condiciones generales:
      </p>

      <ul>
        <li>Ticket mínimo de inversión de S/ 10,000.</li>
        <li>Inversiones denominadas en soles.</li>
        <li>Dirigido a personas naturales o jurídicas.</li>
        <li>
          Financiamiento destinado al desarrollo
          inmobiliario.
        </li>
        <li>Plazos generales de 18 a 36 meses.</li>
        <li>
          Alternativas referenciales de 18%, 26% y 45%
          según el plazo y alternativa indicada en la
          presentación.
        </li>
        <li>
          Distribución de utilidad de acuerdo con los
          flujos generados por los proyectos.
        </li>
      </ul>

      <p>
        Las cifras, rentabilidades, plazos y demás
        condiciones publicadas en este sitio son únicamente
        referenciales cuando así se indique. Las condiciones
        definitivas serán aquellas establecidas en la
        documentación contractual suscrita por las partes.
      </p>

      <h3>5. Rescate anticipado</h3>

      <p>
        La documentación de inversión contempla una opción de
        rescate de capital antes del vencimiento, sujeta a
        solicitud con una anticipación mínima de 30 días
        hábiles.
      </p>

      <p>
        De acuerdo con las condiciones suministradas, el
        rescate anticipado implica la renuncia a los
        intereses y/o utilidades asociados al período de
        inversión.
      </p>

      <h3>6. Prevención de lavado de activos</h3>

      <p>
        De acuerdo con la documentación proporcionada, las
        inversiones superiores a S/ 30,000 requieren el
        llenado del formulario correspondiente de prevención
        de lavado de activos, conforme a las obligaciones
        aplicables.
      </p>

      <h3>7. Riesgos</h3>

      <p>
        Toda inversión implica riesgos. Los principales
        factores de riesgo y liquidez aplicables a la
        inversión deberán revisarse en la documentación
        contractual correspondiente.
      </p>

      <p>
        El contenido de este sitio no debe interpretarse como
        una garantía de rentabilidad, recuperación de capital
        o ausencia de riesgo.
      </p>

      <h3>8. Propiedad intelectual</h3>

      <p>
        Los textos, fotografías, gráficos, logotipos,
        elementos visuales, diseños y demás contenidos
        publicados en este sitio pertenecen a Moro Capital o
        son utilizados con autorización de sus respectivos
        titulares.
      </p>

      <p>
        No se permite reproducir, modificar, distribuir o
        utilizar comercialmente dichos contenidos sin la
        autorización correspondiente.
      </p>

      <h3>9. Información de terceros</h3>

      <p>
        El sitio podrá contener enlaces o referencias a
        plataformas, servicios o sitios de terceros. Moro
        Capital no controla necesariamente el contenido,
        disponibilidad o políticas de dichos terceros.
      </p>

      <h3>10. Disponibilidad del sitio</h3>

      <p>
        Moro Capital procurará mantener disponible y
        actualizado el sitio; sin embargo, no garantiza que
        permanezca libre de interrupciones, errores o
        indisponibilidad temporal.
      </p>

      <h3>11. Modificaciones</h3>

      <p>
        Moro Capital podrá modificar, actualizar o retirar
        contenidos del sitio y modificar estos Términos y
        Condiciones cuando resulte necesario.
      </p>

      <h3>12. Legislación aplicable</h3>

      <p>
        Los presentes Términos y Condiciones se interpretan
        conforme a las leyes de la República del Perú, sin
        perjuicio de los derechos que correspondan a los
        usuarios conforme a la normativa aplicable.
      </p>
    </div>
  );
}

export default function LegalPage({
  type,
}: LegalPageProps) {
  const page = pageContent[type];

  const activeNumber =
    type === "privacidad"
      ? "01"
      : type === "datos"
        ? "02"
        : "03";

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <Link
            href="/legal"
            className={styles.back}
            aria-label="Volver a información legal"
          >
            <ArrowLeft
              className={styles.backIcon}
              size={16}
              strokeWidth={1.25}
              aria-hidden="true"
            />

            <span>Volver</span>
          </Link>

          <div className={styles.heroGrid}>
            <div>
              <span className={styles.kicker}>
                {page.kicker}
              </span>

              <h1>{page.title}</h1>
            </div>

            <p className={styles.heroDescription}>
              {page.description}
            </p>
          </div>

          <nav
            className={styles.sectionNavigation}
            aria-label="Documentación legal"
          >
            {legalNavigation.map((item) => {
              const isActive = item.id === type;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={
                    isActive
                      ? styles.navigationActive
                      : undefined
                  }
                  aria-current={
                    isActive ? "page" : undefined
                  }
                >
                  <strong>{item.label}</strong>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <div className={styles.content}>
        <div className="container">
          <section className={styles.legalSection}>
            <aside className={styles.sectionAside}>
            </aside>

            <article className={styles.article}>
              <header className={styles.articleHeader}>
                <span>{page.label}</span>

                <h2>{page.heading}</h2>

                <p>
                  Última actualización: septiembre de 2026
                </p>
              </header>

              {type === "privacidad" && (
                <PrivacyContent />
              )}

              {type === "datos" && (
                <DataContent />
              )}

              {type === "terminos" && (
                <TermsContent />
              )}
            </article>
          </section>
        </div>
      </div>
    </main>
  );
}