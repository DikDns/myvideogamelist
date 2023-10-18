export async function getIGDBToken() {
  const baseUrl = process.env.TWITCH_TOKEN_URL ?? "";
  const clientId = process.env.TWITCH_CLIENT_ID ?? "";
  const clientSecret = process.env.TWITCH_CLIENT_SECRET ?? "";

  const url = `${baseUrl}?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;
  const res = await fetch(url, {
    method: "POST",
  });

  if (!res.ok) return Promise.reject(res);

  const { access_token, expires_in } = await res.json();
  const expiredAt = new Date(res.headers.get("date") ?? "");
  expiredAt.setSeconds(expires_in);

  return {
    accessToken: access_token,
    expiredAt,
  };
}
