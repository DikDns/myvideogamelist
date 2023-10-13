"use client";

import { createContext, ReactNode, useMemo } from "react";
import { User } from "../types/GameList";

type UserContext = User & {
  isCurrentUserList: boolean;
};

export const UserContext = createContext<UserContext | null>(null);

export default function UserProvider({
  user,
  isCurrentUserList,
  children,
}: {
  user: User;
  isCurrentUserList: boolean;
  children: ReactNode;
}) {
  const value = useMemo(
    () => ({ ...user, isCurrentUserList }),
    [user, isCurrentUserList]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
