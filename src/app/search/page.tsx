import { SearchParams } from "@/types/SearchParams";
import getSearchPageData from "@/layouts/Search/server/getSearchPageData";
import Search from "@/layouts/Search/Search";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const games = await getSearchPageData(searchParams);

  return (
    <div>
      <Search games={games} />
    </div>
  );
}
