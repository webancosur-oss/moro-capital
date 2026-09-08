import InvestmentCalculator from "@/components/Calculator/InvestmentCalculator";
import InvestmentPillars from "@/components/InvestmentPillars/InvestmentPillars";
import InvestmentPlans from "@/components/InvestmentPlans/InvestmentPlans";
import InvestmentSecurity from "@/components/InvestmentSecurity/InvestmentSecurity";
import InvestmentModel from "@/components/InvestModel/InvestmentModel";
import InvestorEcosystem from "@/components/InvestorEcosystem/InvestorEcosystem";
import InvestorFaq from "@/components/InvestorFaq/InvestorFaq";
import InvestorFooter from "@/components/InvestorFooter/InvestorFooter";
import InvestorLeadForm from "@/components/InvestorLeadForm/InvestorLeadForm";
import Moro416 from "@/components/Moro416/Moro416";
import InvestmentProof from "@/components/Proof/InvestmentProof";
import InvestorStats from "@/components/Status/InvestorStats";
import TrackRecord from "@/components/TrackRecord/TrackRecord";
import type { Metadata } from "next";




export const metadata: Metadata = {
  title: "Inversionistas | Moro Capital",
  description:
    "Conoce las oportunidades privadas de inversión inmobiliaria de Moro Capital, sus proyectos, trayectoria y alternativas de inversión.",
};

export default function InversionistasPage() {
  return (
    <main className="investorPage">

      <InvestmentProof />

     <InvestorStats />

      <InvestmentModel />

      <InvestmentPlans />

      <InvestmentCalculator />

      <InvestmentPillars />

      <TrackRecord />

      <Moro416 />

      <InvestmentSecurity />

      <InvestorEcosystem />

      <InvestorFaq />

      <InvestorLeadForm />

      <InvestorFooter />
      
    </main>
  );
}