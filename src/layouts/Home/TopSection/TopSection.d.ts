interface GamesData {
  id: number;
  cover: {
    id: number;
    image_id: string;
  };
}

export type List = "series" | "franchises";

export interface TopData {
  id: number;
  name: string;
  slug: string;
  games: GamesData[];
}
