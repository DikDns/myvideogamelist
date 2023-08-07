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
    console.log(auth);
    console.log(req);
    console.log(evt);
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
