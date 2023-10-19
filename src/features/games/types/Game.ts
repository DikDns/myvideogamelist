import AgeRating from "./AgeRating";
import Image from "./Image";
import Video from "./Video";
import AlternativeName from "./AlternativeName";
import GameMode from "./GameMode";
import GenreTheme from "./GenreTheme";
import InvolvedCompany from "./InvolvedCompany";
import Platform from "./Platform";
import Website from "./Website";
import PlayerPerspective from "./PlayerPerspective";
import Franchise from "@/features/franchises/types/Franchise";
import Series from "@/features/series/types/Series";

type Game = {
  id: number;
  aggregated_rating?: number;
  aggregated_rating_count?: number;
  name?: string;
  slug?: string;
  summary?: string;
  category?: number;
  first_release_date?: number;
  cover?: Image;
  player_perspectives?: PlayerPerspective[];
  game_modes?: GameMode[];
  alternative_names?: AlternativeName[];
  involved_companies?: InvolvedCompany[];
  age_ratings?: AgeRating[];
  genres?: GenreTheme[];
  themes?: GenreTheme[];
  platforms?: Platform[];
  screenshots?: Image[];
  artworks?: Image[];
  videos?: Video[];
  parent_game?: Game;
  franchises?: Franchise[];
  collection?: Series;
  remakes?: Game[];
  remasters?: Game[];
  expanded_games?: Game[];
  standalone_expansions?: Game[];
  expansions?: Game[];
  similar_games?: Game[];
  websites?: Website[];
};

export default Game;

export type { Franchise, Series };
