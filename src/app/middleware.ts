import { prisma } from "@/lib/db";
import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: [
    "/",
    "/games**",
    "/franchises**",
    "/series**",
    "/videos**",
    "/search**",
    "/api/igdb**",
  ],
  afterAuth(auth, req, evt) {
    if (auth.userId) {
      const user = {
        id: auth.userId,
        username: auth.user?.username || "",
        image: auth.user?.imageUrl || "",
      };

      prisma.user.upsert({
        where: {
          id: auth.userId,
        },
        update: user,
        create: user,
      });
    }
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
