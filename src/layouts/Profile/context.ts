"use client";
import { createContext } from "react";
import { User } from "./User";

export const UserProfileContext = createContext<User | null>(null);
