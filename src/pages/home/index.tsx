import { Suspense } from "react";
import getData from "./getData";
import NewReleaseGames from "./NewReleaseGames";
import TopSection from "./components/TopSection";
import TestData from "./TestData";

export default async function Home() {
  const data = await getData();

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <NewReleaseGames data={data.newReleaseGames} />
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <TopSection text={`Top Franchises`} data={data.topFranchises} />
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <TopSection text={`Top Series`} data={data.topSeries} />
      </Suspense>

      <TestData data={data} />
    </>
  );
}
