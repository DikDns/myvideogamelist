"use client";

import TopNewReleaseGames from "./TopNewReleaseGames";
import NewTrailers from "./NewTrailers";
import TestData from "./TestData";

export default async function Home({ data }: { data: any }) {
  return (
    <main>
      <TopNewReleaseGames data={data.topNewReleaseGames} />

      <NewTrailers data={data.newTrailers} />

      <TestData data={data} />
    </main>
  );
}
