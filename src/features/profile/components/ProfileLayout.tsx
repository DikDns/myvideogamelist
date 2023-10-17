import { PageProps } from "@/types/PageProps";
import Profile from "./Profile";
import UserProfileProvider from "./UserProfileProvider";
import currentUserProfile from "../lib/nextServerProfileLayout";

type ListPageProps = PageProps<{ username: string }>;

export const revalidate = 0;

export default async function ProfileLayout({
  params: { username },
}: ListPageProps) {
  const { currentUser, user } = await currentUserProfile(username);

  if (currentUser?.username !== username) {
    return (
      <UserProfileProvider user={user} isCurrentUserProfile={false}>
        <Profile />
      </UserProfileProvider>
    );
  }

  return (
    <UserProfileProvider user={user} isCurrentUserProfile={true}>
      <Profile />
    </UserProfileProvider>
  );
}
