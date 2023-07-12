import { Game } from "./Game";
import { Video } from "./Video";
import { Franchise } from "./Franchise";
import { Series } from "./Series";

export type HomeData = {
  newReleaseGames: Game[];
  topFranchises: Franchise[];
  topSeries: Series[];
  newTrailers: Video[];
  topNewReleaseGames: Game[];
  popularUpcomingGames: Game[];
  topRatedGames: Game[];
};
