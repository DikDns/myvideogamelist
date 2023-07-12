import { textFetch } from "./fetch";

type ImageType =
  | "cover_small"
  | "cover_big"
  | "screenshot_med"
  | "logo_med"
  | "screenshot_big"
  | "screenshot_huge"
  | "thumb"
  | "micro"
  | "720p"
  | "1080p";

export async function fetchIGDBToken() {
  const baseUrl = process.env.TWITCH_TOKEN_URL ?? "";
  const clientId = process.env.TWITCH_CLIENT_ID ?? "";
  const clientSecret = process.env.TWITCH_CLIENT_SECRET ?? "";

  const url = `${baseUrl}?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;
  const res = await fetch(url, {
    method: "POST",
  });

  if (!res.ok) return Promise.reject(res);

  const { access_token, expires_in } = await res.json();
  let expiredAt = new Date(res.headers.get("date") ?? "");
  expiredAt.setSeconds(expires_in);

  return {
    accessToken: access_token,
    expiredAt,
  };
}

async function get(path: string, body: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const url = `${baseUrl}/api/igdb/v4/${path}`;
  const data = await textFetch(url, { method: "POST", body });
  return data;
}

export async function getGames(body: string) {
  return await get("games", body);
}

export async function getFranchises(body: string) {
  return await get("franchises", body);
}

export async function getSeries(body: string) {
  return await get("collections", body);
}

export async function getGameVideos(body: string) {
  return await get("game_videos", body);
}

export function getImage(imageId: string, imageType: ImageType = "cover_big") {
  return `https://images.igdb.com/igdb/image/upload/t_${imageType}/${imageId}.jpg`;
}
