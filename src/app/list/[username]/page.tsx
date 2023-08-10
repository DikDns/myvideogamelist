import { currentUser as clerkCurrentUser } from "@clerk/nextjs";
import getList from "@/layouts/List/getList";
import List from "@/layouts/List/List";
import ListControl from "@/layouts/List/ListControl";
import { PageProps } from "@/types/PageProps";

type ListPageProps = PageProps<{ username: string }>;

export default async function ListUsernamePage({
  params: { username },
}: ListPageProps) {
  const userPromise = getList(username);
  const currentUserPromise = clerkCurrentUser();

  const [user, currentUser] = await Promise.all([
    userPromise,
    currentUserPromise,
  ]);

  if (currentUser?.username !== username) {
    return (
      <div>
        <List user={user} />
      </div>
    );
  }

  return (
    <div>
      <ListControl user={user} />
    </div>
  );
}
