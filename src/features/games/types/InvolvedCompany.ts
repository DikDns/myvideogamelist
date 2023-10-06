import Company from "./Company";
import Game from "./Game";

type InvolvedCompany = {
  id: number;
  company?: Company;
  game?: Game;
  developer?: boolean;
  porting?: boolean;
  publisher?: boolean;
  supporting?: boolean;
};

export default InvolvedCompany;
