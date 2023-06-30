import { Suspense } from "react";
import getData from "./getData";
import NewReleaseGames from "./NewReleaseGames";
import TopFranchises from "./TopFranchises";

export default async function Home() {
  const data = await getData();

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <NewReleaseGames data={data.newReleaseGames} />
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <TopFranchises data={data.topFranchises} />
      </Suspense>
    </>
  );
}
