import getData from "./getData";
import NewReleases from "./NewReleases";

export default async function Home() {
  const data = await getData();
  return (
    <>
      <NewReleases data={data.newReleases} />
    </>
  );
}
