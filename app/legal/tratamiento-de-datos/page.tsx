import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";


export const metadata: Metadata = {
  title: "Tratamiento de Datos Personales | Moro Capital",
  description:
    "Información sobre el tratamiento de datos personales y los derechos de sus titulares conforme a la normativa aplicable.",
  alternates: {
    canonical: "/legal/tratamiento-de-datos",
  },
};

export default function TratamientoDeDatosPage() {
  return <LegalPage type="datos" />;
}