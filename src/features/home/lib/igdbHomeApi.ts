import igdb, { defaultField } from "@/lib/igdb";

function currentDate() {
  const currentDate = new Date();
  const unixTimestamp = Math.floor(currentDate.getTime() / 1000);
  return unixTimestamp;
}

function lastMonthDate(date: number = -30) {
  const lastMonthDate = new Date();
  lastMonthDate.setDate(date);
  const unixTimestamp = Math.floor(lastMonthDate.getTime() / 1000);
  return unixTimestamp;
}

export async function getTopNewReleaseGames(
  limit: number = 20,
  offset: number = 0
) {
  const body = `
    f ${defaultField};
    w first_release_date > ${lastMonthDate(-60)} & 
    first_release_date < ${currentDate()} & 
    hypes != n & cover != n & aggregated_rating != n;
    s hypes desc;
    l ${limit};
    o ${offset};
  `;
  return await igdb("games", body);
}

export async function getTopFranchises() {
  const body = `
    f name, games.cover.image_id, slug;
    w games.total_rating_count > 1000;
    s games desc;
    l 20;
  `;
  return await igdb("franchises", body);
}

export async function getTopSeries() {
  const body = `
    f name, games.cover.image_id, slug;
    w games.total_rating_count > 1000;
    s games desc;
    l 20;
  `;
  return await igdb("collections", body);
}

export async function getNewTrailers() {
  const body = `
    f name, video_id, game.name;
    w name~*"trailer"* & game.age_ratings != n;
    s id desc;
    l 10;
  `;
  return await igdb("game_videos", body);
}

export async function getPopularUpcomingGames(
  limit: number = 5,
  offset: number = 0
) {
  const body = `
    f ${defaultField};
    w first_release_date > ${currentDate()} & hypes != n & cover != n;
    s hypes desc;
    l ${limit};
    o ${offset};
  `;
  return await igdb("games", body);
}

export async function getNewReleaseGames(
  limit: number = 5,
  offset: number = 0
) {
  const body = `
    f ${defaultField};
    w first_release_date < ${currentDate()} & cover != n & genres != n;
    s first_release_date desc;
    l ${limit};
    o ${offset};
  `;
  return await igdb("games", body);
}

export async function getTopRatedGames(limit: number = 5, offset: number = 0) {
  const body = `
    f ${defaultField};
    w aggregated_rating != n & aggregated_rating_count > 7;
    s aggregated_rating desc;
    l ${limit};
    o ${offset};
  `;
  return await igdb("games", body);
}
