import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    /\/(games|franchises|series|videos|search)./,
    /\/api\/igdb./,
    "/api/auth",
    "/games",
    "/franchises",
    "/series",
    "/videos",
    "/search",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
