import { currentUser as clerkCurrentUser } from "@clerk/nextjs";\
import { PageProps } from "@/types/PageProps";

type ListPageProps = PageProps<{ username: string }>;

export default async function ListUsernamePage({
  params: { username },
}: ListPageProps) {
  // const userPromise = getList(username);
  const currentUserPromise = clerkCurrentUser();

  const [user, currentUser] = await Promise.all([
    // userPromise,
    currentUserPromise,
  ]);

  if (currentUser?.username !== username) {
    return (
      <div>
      </div>
    );
  }

  return (
    <div>
    </div>
  );
}
