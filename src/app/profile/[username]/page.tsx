import { PageProps } from "@/types/PageProps";
import getProfile from "@/layouts/Profile/getProfile";
import ProfileControl from "@/layouts/Profile/ProfileControl";

type ListPageProps = PageProps<{ username: string }>;

export const revalidate = 0;

export default async function ListUsernamePage({
  params: { username },
}: ListPageProps) {
  const { currentUser, user } = await getProfile(username);

  if (currentUser?.username !== username) {
    return <div></div>;
  }

  return (
    <div>
      <ProfileControl user={user} />
    </div>
  );
}
