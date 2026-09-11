import PageHero from "@/components/PageHero";
import InnovationGrid from "./InnovationGrid";

export const metadata = {
  title: "Innovation & Products | NForceOne",
  description:
    "NForceOne designs, builds, and operates its own AI platforms, testing accelerators, and enterprise systems alongside our client engagements.",
};

export default function InnovationPage() {
  return (
    <main>
      <PageHero
        eyebrow="Innovation & Products"
        title="We Design, Build & Operate Technology"
        subtitle="NForceOne does not merely supply engineering resources — we architect, deploy, and operate our own AI platforms, testing accelerators, and enterprise systems alongside our client work."
      />
      <InnovationGrid />
    </main>
  );
}
