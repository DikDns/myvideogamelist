import { Company } from "./Company";
import { Game } from "./Game";

export type InvolvedCompany = {
  id: number;
  company?: Company;
  game?: Game;
  developer?: boolean;
  porting?: boolean;
  publisher?: boolean;
  supporting?: boolean;
};
