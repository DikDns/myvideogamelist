import { getGames, getFranchises, getSeries, getGameVideos } from "@/lib/igdb";

function currentDate() {
  const currentDate = new Date();
  const unixTimestamp = Math.floor(currentDate.getTime() / 1000);
  return unixTimestamp;
}

function lastMonthDate() {
  const lastMonthDate = new Date();
  lastMonthDate.setDate(-30);
  const unixTimestamp = Math.floor(lastMonthDate.getTime() / 1000);
  return unixTimestamp;
}

async function getTopNewReleaseGames() {
  const body = `
    f name, cover.image_id, slug;
    w first_release_date > ${lastMonthDate()} & first_release_date < ${currentDate()} & hypes != n & cover != n & aggregated_rating != n;
    s hypes desc;
    l 20;
  `;
  return await getGames(body);
}

async function getTopFranchises() {
  const body = `
    f name, games.cover.image_id, slug;
    w games.total_rating_count > 1000;
    s games desc;
    l 20;
  `;
  return await getFranchises(body);
}

async function getTopSeries() {
  const body = `
    f name, games.cover.image_id, slug;
    w games.total_rating_count > 1000;
    s games desc;
    l 20;
  `;
  return await getSeries(body);
}

async function getNewTrailers() {
  const body = `
    f name, video_id, game.name;
    w name~*"trailer"* & game.age_ratings != n;
    s id desc;
    l 10;
  `;
  return await getGameVideos(body);
}

async function getPopularUpcomingGames() {
  const body = `
    f name, slug, first_release_date, cover.image_id, genres.name;
    w first_release_date > ${currentDate()} & hypes != n & cover != n;
    s hypes desc;
    l 5;
  `;
  return await getGames(body);
}

async function getNewReleaseGames() {
  const body = `
    f name, slug, first_release_date, cover.image_id, genres.name;
    w first_release_date < ${currentDate()} & cover != n & genres != n;
    s first_release_date desc;
    l 5;
  `;
  return await getGames(body);
}

async function getTopRatedGames() {
  const body = `
    f name, slug, cover.image_id, aggregated_rating, aggregated_rating_count, genres.name;
    w aggregated_rating != n & aggregated_rating_count > 7;
    s aggregated_rating desc;
    l 5;
  `;
  return await getGames(body);
}

export default async function getHomeData() {
  // Initiate requests in parallel
  const newReleaseGamesData = getNewReleaseGames();
  const topFranchisesData = getTopFranchises();
  const topSeriesData = getTopSeries();
  const newTrailersData = getNewTrailers();
  const topNewReleaseGamesData = getTopNewReleaseGames();
  const popularUpcomingGamesData = getPopularUpcomingGames();
  const topRatedGamesData = getTopRatedGames();

  const promises = [
    popularUpcomingGamesData,
    newReleaseGamesData,
    newTrailersData,
    topNewReleaseGamesData,
    topRatedGamesData,
    topFranchisesData,
    topSeriesData,
  ];

  // Wait for the promises to resolve
  const [
    popularUpcomingGames,
    newReleaseGames,
    newTrailers,
    topNewReleaseGames,
    topRatedGames,
    topFranchises,
    topSeries,
  ] = await Promise.all(promises);

  return {
    popularUpcomingGames,
    newReleaseGames,
    newTrailers,
    topNewReleaseGames,
    topRatedGames,
    topFranchises,
    topSeries,
  };
}
