import { currentUser } from "@clerk/nextjs";

export async function GET(request: Request) {
  const user = await currentUser();

  if (user) {
  }
}
