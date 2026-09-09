import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";


export const metadata: Metadata = {
  title: "Términos y Condiciones | Moro Capital",
  description:
    "Consulta los términos y condiciones aplicables al uso del sitio web y a la información presentada por Moro Capital.",
  alternates: {
    canonical: "/legal/terminos-y-condiciones",
  },
};

export default function TerminosYCondicionesPage() {
  return <LegalPage type="terminos" />;
}