"use server";

import { currentUserList } from "@/features/list/lib/nextServerListLayout";
import ListUserLayout from "./ListUserLayout";
import UserProvider from "./UserProvider";
import { PageProps } from "@/types/PageProps";

type ListLayoutProps = PageProps<{ username: string }>;

export default async function ListLayout({
  params: { username },
}: ListLayoutProps) {
  const { currentUser, user } = await currentUserList(username);

  if (currentUser?.username !== username) {
    return (
      <UserProvider user={user} isCurrentUserList={false}>
        <ListUserLayout />
      </UserProvider>
    );
  }

  return (
    <UserProvider user={user} isCurrentUserList={true}>
      <ListUserLayout />
    </UserProvider>
  );
}
