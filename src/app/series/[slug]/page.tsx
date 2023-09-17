import { PageProps } from "@/types/PageProps";
import fetchSeriesDetail from "@/features/series/lib/fetchSeriesDetail";
import SeriesDetailLayout from "@/features/series/components/SeriesDetailLayout";

export default async function NextSeriesDetailPage({
  params: { slug },
}: PageProps<{ slug: string }>) {
  const series = await fetchSeriesDetail(slug);

  return <SeriesDetailLayout data={series} />;
}
