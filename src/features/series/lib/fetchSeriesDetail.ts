import { notFound } from "next/navigation";
import igdb from "@/lib/igdb";
import Series from "../types/Series";

export default async function fetchSeriesDetail(slug: string) {
  const body = `
    f name, slug, 
    games.name, games.slug, games.cover.image_id
    games.first_release_date, games.aggregated_rating;
    w slug="${slug}";
  `;
  const series: Series[] = await igdb("collections", body);

  if (series.length < 1) return notFound();

  return series[0];
}
