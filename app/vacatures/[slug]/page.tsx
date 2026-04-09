import { vacatures } from "@/lib/vacatures";
import VacatureDetail from "@/components/VacatureDetail";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return vacatures.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const v = vacatures.find((v) => v.slug === params.slug);
  if (!v) return {};
  return {
    title: `${v.titel} in ${v.locatie} – HorecaNext`,
    description: v.seoDescription,
    keywords: [v.titel, v.locatie, "horecabaan", "horeca vacature", "HorecaNext"],
  };
}

export default function VacaturePage({ params }: Props) {
  const v = vacatures.find((v) => v.slug === params.slug);
  if (!v) notFound();
  return <VacatureDetail {...v} />;
}
