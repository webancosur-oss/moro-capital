import type { Metadata } from "next";

import InvestmentProof from "@/components/Proof/InvestmentProof";
import InvestorStats from "@/components/Status/InvestorStats";

import InvestmentModel from "@/components/InvestModel/InvestmentModel";

import TrackRecord from "@/components/TrackRecord/TrackRecord";

import Moro416 from "@/components/Moro416/Moro416";

import InvestmentPlans from "@/components/InvestmentPlans/InvestmentPlans";
import InvestmentCalculator from "@/components/Calculator/InvestmentCalculator";

import InvestmentPillars from "@/components/InvestmentPillars/InvestmentPillars";
import InvestmentSecurity from "@/components/InvestmentSecurity/InvestmentSecurity";

import InvestorFaq from "@/components/InvestorFaq/InvestorFaq";
import InvestorLeadForm from "@/components/InvestorLeadForm/InvestorLeadForm";

export const metadata: Metadata = {
  title: "Inversionistas | Moro Capital",
  description:
    "Conoce las oportunidades privadas de inversión inmobiliaria de Moro Capital, sus proyectos, trayectoria y alternativas de inversión.",
};

export default function InversionistasPage() {
  return (
    <main className="investorPage">
      {/* OPORTUNIDAD */}

      <InvestmentProof />

      <InvestorStats />

      {/* CÓMO FUNCIONA */}

      <InvestmentModel />

      {/* TRAYECTORIA */}

      <TrackRecord />

      {/* MORO 416 */}

      <Moro416 />

      {/* ALTERNATIVAS */}

      <InvestmentPlans />

      <InvestmentCalculator />

      {/* SEGURIDAD */}

      <InvestmentPillars />

      <InvestmentSecurity />

      {/* FAQ */}

      <InvestorFaq />

      {/* CONTACTO */}

      <InvestorLeadForm />
    </main>
  );
}