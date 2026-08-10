import { Benefits } from "@/components/Benefits";
import { CTAForm } from "@/components/CTAForm";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Urgency } from "@/components/Urgency";

export default function HomePage() {
  return (
    <main className="flex min-h-screen w-full flex-col px-0 py-0">
      <Hero />
      <div className="flex w-full flex-col">
        <Problem />
        <Benefits />
        <Urgency />
        <CTAForm />
      </div>
    </main>
  );
}
