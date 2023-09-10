import igdb from "@/lib/igdb";

export default async function getGameVideos(body: string) {
  return await igdb("game_videos", body);
}
