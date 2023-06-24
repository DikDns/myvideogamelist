import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (!session) {
    return (
      <main>
        <h1>NOT LOGGED IN</h1>
        <LoginButton />
      </main>
    );
  }
  return (
    <main>
      <h1>LOGGED IN</h1>
      <LogoutButton />
    </main>
  );
}
