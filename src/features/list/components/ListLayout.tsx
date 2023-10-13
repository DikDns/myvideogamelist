"use server";

import { currentUser as clerkCurrentUser } from "@clerk/nextjs";
import { currentUserList } from "@/features/list/lib/nextServerListLayout";
import ListUserLayout from "./ListUserLayout";
import UserProvider from "./UserProvider";
import { PageProps } from "@/types/PageProps";

type ListLayoutProps = PageProps<{ username: string }>;

export default async function ListLayout({
  params: { username },
}: ListLayoutProps) {
  const userPromise = currentUserList(username);
  const currentUserPromise = clerkCurrentUser();

  const [user, currentUser] = await Promise.all([
    userPromise,
    currentUserPromise,
  ]);

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