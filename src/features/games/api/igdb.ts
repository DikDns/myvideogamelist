import { NextResponse } from "next/server";
import { textFetch } from "@/lib/fetch";
import type { IGDBToken } from "@prisma/client";
import { getIGDBToken } from "../lib/igdbToken";
import { getToken, createToken, updateToken } from "../lib/prismaToken";

export type Context = {
  params: {
    endpoints: string[];
  };
};

/**
 * Checks if the provided access token is expired.
 * @param token - The IGDBToken object representing the access token.
 * @returns A boolean indicating whether the access token is expired.
 */
function isTokenExpired(token: IGDBToken): boolean {
  const currentDate = new Date();
  const expiredDate = new Date(token.expiredAt);
  return currentDate > expiredDate;
}

/**
 * Retrieves the access token required for making the API call.
 * If the token is expired or not available, it fetches a new token and updates it in the database.
 * @returns The access token.
 */
async function getAccessToken(): Promise<string> {
  const tokens: IGDBToken[] = await getToken();

  if (tokens.length === 0 || isTokenExpired(tokens[0])) {
    const { accessToken, expiredAt } = await getIGDBToken();
    if (tokens.length === 0) {
      await createToken(accessToken, expiredAt);
    } else {
      await updateToken(tokens[0].accessToken, accessToken, expiredAt);
    }
    return accessToken;
  }

  return tokens[0].accessToken;
}

/**
 * Handles the HTTP POST request.
 * @param request - The incoming request object.
 * @param params - The context object containing parameters.
 * @returns The NextResponse object.
 */
export async function routePost(request: Request, { params }: Context) {
  const baseUrl = process.env.IGDB_BASE_URL;
  const endpoints = params.endpoints.join("/");

  // Construct the URL: IGDB_BASE_URL/API_ENDPOINTS
  const url = `${baseUrl}/${endpoints}`;

  const clientId = process.env.TWITCH_CLIENT_ID;
  if (!clientId) throw new Error("TWITCH_CLIENT_ID is not specified in .env");

  const accessToken = await getAccessToken();
  if (!accessToken) throw new Error("Access token not found or expired.");

  const body = await request.text();
  const headers = {
    "Client-ID": clientId,
    Authorization: `Bearer ${accessToken}`,
  };

  const data = await textFetch(url, {
    method: "POST",
    body,
    headers,
  });

  return NextResponse.json(data);
}
