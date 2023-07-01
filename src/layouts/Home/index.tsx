import { Suspense } from "react";
import getData from "./getData";
import TopNewReleaseGames from "./TopNewReleaseGames";
import TopSection from "./components/TopSection";
import NewTrailers from "./NewTrailers";
import TestData from "./TestData";
export default async function Home() {
  const data = await getData();

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <TopNewReleaseGames data={data.topNewReleaseGames} />
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <TopSection text={`Top Franchises`} data={data.topFranchises} />
      </Suspense>

      <Suspense fallback={<p>Loading...</p>}>
        <TopSection text={`Top Series`} data={data.topSeries} />
      </Suspense>

      <NewTrailers data={data.newTrailers} />

      <TestData data={data} />
    </>
  );
}
