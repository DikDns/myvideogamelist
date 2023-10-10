import {
  getNewReleaseGames,
  getTopFranchises,
  getTopSeries,
  getNewTrailers,
  getTopNewReleaseGames,
  getPopularUpcomingGames,
  getTopRatedGames,
} from "./igdbHomeApi";

export async function getHomeLayoutData() {
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
