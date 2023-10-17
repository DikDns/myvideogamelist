"use client";
import { ReactNode, createContext, useMemo } from "react";
import User from "../types/User";

type UserProfileContext = User & { isCurrentUserProfile: boolean };

export const UserProfileContext = createContext<UserProfileContext | null>(
  null
);

export default function UserProfileProvider({
  user,
  isCurrentUserProfile,
  children,
}: {
  user: User;
  isCurrentUserProfile: boolean;
  children: ReactNode;
}) {
  const value = useMemo(
    () => ({ ...user, isCurrentUserProfile }),
    [user, isCurrentUserProfile]
  );

  return (
    <UserProfileContext.Provider value={value}>
      {children}
    </UserProfileContext.Provider>
  );
}
