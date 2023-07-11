import getHomeData from "./server/getHomeData";
import Home from "@/layouts/Home";
import { HomeData } from "@/types/HomeDataType";

export default async function IndexPage() {
  const data: HomeData = await getHomeData();

  return <Home data={data} />;
}
