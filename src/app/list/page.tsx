import { redirect } from "next/navigation";
import { currentUser, redirectToSignIn } from "@clerk/nextjs";

export default async function ListPage() {
  const user = await currentUser();

  if (!user) return redirectToSignIn();

  return redirect(`/list/${user.username?.toLowerCase()}`);
}
