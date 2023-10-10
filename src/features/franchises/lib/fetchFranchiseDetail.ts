import { notFound } from "next/navigation";
import igdb from "@/lib/igdb";
import Franchises from "../types/Franchises";

export default async function fetchFranchiseDetail(slug: string) {
  const body = `
    f name, slug,  
    games.name, games.slug, games.cover.image_id,
    games.first_release_date, games.aggregated_rating;
    w slug="${slug}";
  `;
  const franchises: Franchises[] = await igdb("franchises", body);

  if (franchises.length < 1) return notFound();

  return franchises[0];
}
