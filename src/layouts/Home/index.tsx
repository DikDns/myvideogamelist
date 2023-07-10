import { Suspense } from "react";
import getData from "./getData";
import TopNewReleaseGames from "./TopNewReleaseGames";
import TopSection from "./TopSection";
import NewTrailers from "./NewTrailers";
import TestData from "./TestData";
export default async function Home() {
  const data = await getData();

  return (
    <main>
      <TopNewReleaseGames data={data.topNewReleaseGames} />

      <TopSection
        type="franchises"
        text={`Top Franchises`}
        data={data.topFranchises}
      />

      <TopSection type="series" text={`Top Series`} data={data.topSeries} />

      <NewTrailers data={data.newTrailers} />

      <TestData data={data} />
    </main>
  );
}
