import getHomeData from "./server/getHomeData";
import Home from "@/layouts/Home/hahaha";

export default async function IndexPage() {
  const data = await getHomeData();
  return (
    <div>
      <Home data={data} />
    </div>
  );
}
