import { AgeRating } from "./AgeRating";
import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Image } from "./Image";
import { Video } from "./Video";
import { Franchise } from "./Franchise";
import { Series } from "./Series";
import { Website } from "./Website";
import { AlternativeName } from "./AlternativeName";

export type Game = {
  aggregated_rating?: number;
  aggregated_rating_count?: number;
  id: number;
  name?: string;
  slug?: string;
  summary?: string;
  first_release_date?: number;
  cover?: {
    id: number;
    image_id?: string;
  };
  alternative_names: AlternativeName[];
  age_ratings?: AgeRating[];
  genres?: Genre[];
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
  websites?: Website[];
};
