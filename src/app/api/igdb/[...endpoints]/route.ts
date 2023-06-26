import { NextResponse } from "next/server";
import { textFetch } from "@/lib/fetch";
import { prisma } from "@/lib/db";
import getIGDBToken from "@/controllers/getIGDBToken";
import { fetchIGDBToken } from "@/lib/igdb";

interface Context {
  params: {
    endpoints: String[];
  };
}

async function getAccessToken(): Promise<string> {
  const tokens = await getIGDBToken();

  if (tokens.length < 1) {
    const { accessToken, expiredAt } = await fetchIGDBToken();
    const res = await prisma.iGDBToken.create({
      data: { accessToken, expiredAt },
    });
    if (!res) throw new Error(res);
    return accessToken;
  }

  const currentToken = tokens[0];

  const currentDate = new Date();
  const expiredDate = new Date(currentToken.expiredAt);

  // Token Expired
  if (currentDate > expiredDate) {
    const { accessToken, expiredAt } = await fetchIGDBToken();
    const res = await prisma.iGDBToken.update({
      data: { accessToken, expiredAt },
      where: { accessToken: currentToken.accessToken },
    });
    if (!res) throw new Error(res);
    return accessToken;
  }

  return currentToken.accessToken;
}

export async function POST(request: Request, { params }: Context) {
  const baseUrl = process.env.IGDB_BASE_URL;
  const endpoints = params.endpoints.join("/");

  // url: IGDB_BASE_URL/API_ENDPOINTS
  const url = `${baseUrl}/${endpoints}`;

  const clientId = process.env.TWITCH_CLIENT_ID;
  if (!clientId) throw new Error("TWITCH_CLIENT_ID is not specified in .env");

  const accessToken = await getAccessToken();
  if (!accessToken) throw new Error("ACCESS_TOKEN Not Found");

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
