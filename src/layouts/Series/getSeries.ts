import { notFound } from "next/navigation";
import { getSeries as igdbGetSeries } from "@/lib/igdb";
import { Series } from "@/types/Series";

export default async function getSeries(slug: string) {
  const body = `
    f name, slug, games.name, games.first_release_date, games.aggregated_rating, games.slug, games.cover.image_id;
    w slug="${slug}";
  `;
  const series: Series[] = await igdbGetSeries(body);

  if (series.length < 1) return notFound();

  return series[0];
}
