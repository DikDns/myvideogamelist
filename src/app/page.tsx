import getHomeData from "@/layouts/Home/server/getHomeData";
import Home from "@/layouts/Home/Home";

export default async function IndexPage() {
  const data = await getHomeData();
  return (
    <div>
      <Home data={data} />
    </div>
  );
}
