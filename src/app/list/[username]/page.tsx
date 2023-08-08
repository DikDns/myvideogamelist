import getList from "@/layouts/List/getList";
import List from "@/layouts/List/List";
import { PageProps } from "@/types/PageProps";

type ListPageProps = PageProps<{ username: string }>;

export default async function ListUsernamePage({
  params: { username },
}: ListPageProps) {
  const data = await getList(username);

  return (
    <div>
      <List data={data} />
    </div>
  );
}
