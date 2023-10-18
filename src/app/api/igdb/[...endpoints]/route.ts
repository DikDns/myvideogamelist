import { routePost, Context } from "@/features/games/api/igdb";

export async function POST(request: Request, { params }: Context) {
  return routePost(request, { params });
}
