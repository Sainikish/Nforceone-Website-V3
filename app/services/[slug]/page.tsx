import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/services-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found | NForceOne" };

  return {
    title: `${service.title} Services | NForceOne`,
    description: service.intro,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return <ServiceDetail service={service} />;
}
