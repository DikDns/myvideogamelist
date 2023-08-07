import { notFound } from "next/navigation";
import { getFranchises } from "@/lib/igdb";
import { Franchise } from "@/types/Franchise";

export default async function getFranchise(slug: string) {
  const body = `
    f name, slug, games.name, games.first_release_date, games.aggregated_rating, games.slug, games.cover.image_id;
    w slug="${slug}";
  `;
  const franchises: Franchise[] = await getFranchises(body);

  if (franchises.length < 1) return notFound();

  return franchises[0];
}
