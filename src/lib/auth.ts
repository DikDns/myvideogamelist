import { AuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  // @ts-ignore
  adapter: PrismaAdapter(prisma),
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID ?? "",
      clientSecret: process.env.AUTH0_CLIENT_SECRET ?? "",
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
};
