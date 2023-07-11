import { Genre } from "./GenreType";
import { Video } from "./VideoType";

export type VideoGame = {
  aggregated_rating?: number;
  aggregated_rating_count?: number;
  id: number;
  name?: string;
  slug?: string;
  cover?: {
    id: number;
    image_id?: string;
  };
  genres?: Genre[];
  videos?: Video[];
};
