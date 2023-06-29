import { Suspense } from "react";

import getData from "./getData";
import NewReleases from "./NewReleases";

export default async function Home() {
  const data = await getData();
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <NewReleases data={data.newReleases} />
      </Suspense>
    </>
  );
}
