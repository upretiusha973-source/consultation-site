import { CTAForm } from "@/components/CTAForm";
import { Benefits } from "@/components/Benefits";
import { Hero } from "@/components/Hero";
import { ConsultationFit } from "@/components/ConsultationFit";
import { Process } from "@/components/Process";
import { Urgency } from "@/components/Urgency";

export default function HomePage() {
  return (
    <main className="flex min-h-screen w-full flex-col px-0 py-0">
      <Hero />
      <ConsultationFit />
      <Benefits />
      <Urgency />
      <Process />
      <CTAForm />
    </main>
  );
}
