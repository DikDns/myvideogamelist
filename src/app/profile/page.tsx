import { redirect } from "next/navigation";
import { currentUser, redirectToSignIn } from "@clerk/nextjs";

export default async function ProfilePage() {
  const user = await currentUser();

  if (!user) return redirectToSignIn();

  return redirect(`/profile/${user.username?.toLowerCase()}`);
}
