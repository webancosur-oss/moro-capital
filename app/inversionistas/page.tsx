import type { Metadata } from "next";

import InvestorNavbar from "@/components/inversionistas/InvestorNavbar";
import InvestorHero from "@/components/inversionistas/InvestorHero";
import InvestorStats from "@/components/inversionistas/InvestorStats";
import InvestmentProof from "@/components/inversionistas/InvestmentProof";
import InvestmentModel from "@/components/inversionistas/InvestmentModel";
import InvestmentPlans from "@/components/inversionistas/InvestmentPlans";
import InvestmentCalculator from "@/components/inversionistas/InvestmentCalculator";
import InvestmentPillars from "@/components/inversionistas/InvestmentPillars";
import TrackRecord from "@/components/inversionistas/TrackRecord";
import Moro416 from "@/components/inversionistas/Moro416";
import InvestmentSecurity from "@/components/inversionistas/InvestmentSecurity";
import InvestorLegal from "@/components/inversionistas/InvestorLegal";
import InvestorReasons from "@/components/inversionistas/InvestorReasons";
import InvestorEcosystem from "@/components/inversionistas/InvestorEcosystem";
import InvestorFaq from "@/components/inversionistas/InvestorFaq";
import InvestorFinalCta from "@/components/inversionistas/InvestorFinalCta";
import InvestorLeadForm from "@/components/inversionistas/InvestorLeadForm";
import InvestorFooter from "@/components/inversionistas/InvestorFooter";

import "@/components/inversionistas/investors.css";

export const metadata: Metadata = {
  title: "Inversionistas | Moro Capital",
  description:
    "Conoce las oportunidades privadas de inversión inmobiliaria de Moro Capital, sus proyectos, trayectoria y alternativas de inversión.",
};

export default function InversionistasPage() {
  return (
    <main className="investorPage">
      <InvestorNavbar />

      <InvestorHero />

      <InvestorStats />

      <InvestmentProof />

      <InvestmentModel />

      <InvestmentPlans />

      <InvestmentCalculator />

      <InvestmentPillars />

      <TrackRecord />

      <Moro416 />

      <InvestmentSecurity />

      <InvestorLegal />

      <InvestorReasons />

      <InvestorEcosystem />

      <InvestorFaq />

      <InvestorFinalCta />

      <InvestorLeadForm />

      <InvestorFooter />
    </main>
  );
}