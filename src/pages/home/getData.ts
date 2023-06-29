import { textFetch } from "@/lib/fetch";

function getCurrentDate() {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const unixTimestamp = Math.floor(currentDate.getTime() / 1000);
  return unixTimestamp;
}

export default async function getData() {
  const body = `
    f name, genres.name, cover.image_id;
    w first_release_date < ${getCurrentDate()} & cover != n & genres != n;
    s first_release_date desc;
    l 20;
  `;
  const url = "http://localhost:3000/api/igdb/v4/games";
  const data = await textFetch(url, { method: "POST", body });

  return { newReleases: data };
}
