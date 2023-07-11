import { Genre } from "./GenreType";
import { Video } from "./VideoType";

export type VideoGame = {
  aggregated_rating?: number;
  aggregated_rating_count?: number;
  id: number;
  name?: string;
  slug?: string;
  first_release_date?: number;
  cover?: {
    id: number;
    image_id?: string;
  };
  genres?: Genre[];
  videos?: Video[];
};
