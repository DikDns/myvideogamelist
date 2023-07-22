import Search from "@/layouts/Search/Search";
import { getGames } from "@/lib/igdb";
import { SearchParams } from "@/types/SearchParams";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <div>
      <Search searchParam={searchParams} />
    </div>
  );
}
