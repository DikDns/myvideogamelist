import AgeRating from "./AgeRating";
import Image from "./Image";
import Video from "./Video";
import Franchise from "@/features/franchises/types/Franchises";
import Series from "@/features/series/types/Series";
import { GenreTheme } from "@/types/GenreTheme";
import { Platform } from "@/types/Platform";
import { Website } from "@/types/Website";
import { AlternativeName } from "@/types/AlternativeName";
import { InvolvedCompany } from "@/types/InvolvedCompany";
import { GameMode } from "@/types/GameMode";
import { PlayerPerspective } from "@/types/PlayerPerspective";

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
