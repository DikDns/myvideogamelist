import Game from "@/features/games/types/Game";
import Video from "@/features/videos/types/Video";
import Franchise from "@/features/franchises/types/Franchise";
import Series from "@/features/series/types/Series";

type HomeData = {
  newReleaseGames: Game[];
  topFranchises: Franchise[];
  topSeries: Series[];
  newTrailers: Video[];
  topNewReleaseGames: Game[];
  popularUpcomingGames: Game[];
  topRatedGames: Game[];
};

export default HomeData;
