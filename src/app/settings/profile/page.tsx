import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import LoginButton from "@/components/NextAuth/LoginButton";
import LogoutButton from "@/components/NextAuth/LogoutButton";

export default async function SettingsProfilePage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session ? `Signed in as ${session?.user?.name}` : ``}
      <br />
      {session ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}
