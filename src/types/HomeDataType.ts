import { VideoGame } from "./VideoGameType";
import { Video } from "./VideoType";
import { Franchise } from "./FranchiseType";
import { Series } from "./SeriesType";

export type HomeData = {
  newReleaseGames: VideoGame[];
  topFranchises: Franchise[];
  topSeries: Series[];
  newTrailers: Video[];
  topNewReleaseGames: VideoGame[];
  popularUpcomingGames: VideoGame[];
  topRatedGames: VideoGame[];
};
