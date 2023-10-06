import Game from "./Game";
import Image from "./Image";

type Company = {
  id: number;
  country?: number;
  description?: string;
  developed?: Game[];
  published?: Game[];
  logo?: Image;
  name?: string;
  parent?: Company;
  slug?: string;
  url?: string;
};

export default Company;
