import { currentUser } from "@clerk/nextjs";

export default async function ListUsernamePage() {
  const user = await currentUser();

  return <div></div>;
}
