import { notFound } from "next/navigation";
import IndustryDetail from "@/components/IndustryDetail";
import { industries } from "@/lib/industries-data";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return { title: "Industry Not Found | NForceOne" };

  return {
    title: `${industry.title} IT Services | NForceOne`,
    description: industry.tagline,
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) notFound();

  return <IndustryDetail industry={industry} />;
}
