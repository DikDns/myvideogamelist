import { PageProps } from "@/types/PageProps";
import getSeries from "@/layouts/Series/getSeries";
import Serie from "@/layouts/Series/Serie";

type SeriesPageProps = PageProps<{ slug: string }>;

export default async function SeriesPage({
  params: { slug },
}: SeriesPageProps) {
  const series = await getSeries(slug);

  return (
    <div>
      <Serie data={series} />
    </div>
  );
}
