import { NextResponse } from "next/server";
import { textFetch } from "@/lib/fetch";
import { prisma } from "@/lib/db";
import { fetchIGDBToken } from "@/lib/igdb";
import { IGDBToken } from "@prisma/client";
import getIGDBToken from "@/controllers/getIGDBToken";
import createIGDBToken from "@/controllers/createIGDBToken";
import updateIGDBToken from "@/controllers/updateIGDBToken";

interface Context {
  params: {
    endpoints: String[];
  };
}

function isTokenExpired(token: IGDBToken): boolean {
  const currentDate = new Date();
  const expiredDate = new Date(token.expiredAt);
  return currentDate > expiredDate;
}

async function getAccessToken(): Promise<string> {
  const tokens: IGDBToken[] = await getIGDBToken();

  if (tokens.length === 0 || isTokenExpired(tokens[0])) {
    const { accessToken, expiredAt } = await fetchIGDBToken();
    if (tokens.length === 0) {
      await createIGDBToken(accessToken, expiredAt);
    } else {
      await updateIGDBToken(tokens[0].accessToken, accessToken, expiredAt);
    }
    return accessToken;
  }

  return tokens[0].accessToken;
}

export async function POST(request: Request, { params }: Context) {
  const baseUrl = process.env.IGDB_BASE_URL;
  const endpoints = params.endpoints.join("/");

  // url: IGDB_BASE_URL/API_ENDPOINTS
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
