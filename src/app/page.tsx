import { getHomeLayoutData } from "@/features/home/lib/nextServerHomeLayout";
import HomeLayout from "@/features/home/components/HomeLayout";

export default async function HomePage() {
  const data = await getHomeLayoutData();

  return <HomeLayout data={data} />;
}
