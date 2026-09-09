import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";


export const metadata: Metadata = {
  title: "Política de Privacidad | Moro Capital",
  description:
    "Conoce cómo Moro Capital recopila, utiliza, conserva y protege la información de los usuarios de este sitio web.",
  alternates: {
    canonical: "/legal/politica-de-privacidad",
  },
};

export default function PoliticaDePrivacidadPage() {
  return <LegalPage type="privacidad" />;
}