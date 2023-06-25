import { AuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./db";

export const authOptions: AuthOptions = {
  // @ts-ignore
  adapter: PrismaAdapter(prisma),
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID ?? "",
      clientSecret: process.env.AUTH0_CLIENT_SECRET ?? "",
      issuer: process.env.NEXT_PUBLIC_AUTH0_ISSUER_BASE_URL,
    }),
  ],
};
