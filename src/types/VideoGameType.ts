import { Genre } from "./GenreType";

export type VideoGame = {
  id: number;
  name?: string;
  slug?: string;
  cover?: {
    id: number;
    image_id?: string;
  };
  genres?: Genre[];
};
