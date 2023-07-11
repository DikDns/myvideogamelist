import { VideoGame } from "./VideoGameType";
import { Trailer } from "./TrailerType";
import { Franchise } from "./FranchiseType";
import { Series } from "./SeriesType";

export type HomeData = {
  newReleaseGames: VideoGame[];
  topFranchises: Franchise[];
  topSeries: Series[];
  newTrailers: Trailer[];
  topNewReleaseGames: VideoGame[];
  popularUpcomingGames: VideoGame[];
  topRatedGames: VideoGame[];
};
