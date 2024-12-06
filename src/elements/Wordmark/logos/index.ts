import Ford from "./ford.svg?react";
import NorthwesternMutual from "./nwm.svg?react";
import LibertyMutual from "./liberty.svg?react";
import NameDotCom from "./name-dot-com.svg?react";
import Pluralsight from "./pluralsight.svg?react";
import NycPublicSchools from "./nyc-public-schools.svg?react";
import TheHartford from "./the-hartford.svg?react";
import TheStandard from "./the-standard.svg?react";
import MAndTBank from "./m-and-t-bank.svg?react";
import CanadianGrainCommission from "./canadian-grain-commission.svg?react";

export default {
  ford: {
    name: "Ford",
    Svg: Ford,
    proportion: "balanced",
  },
  "northwestern-mutual": {
    name: "Northwestern Mutual",
    Svg: NorthwesternMutual,
    proportion: "wide",
  },
  "liberty-mutual": {
    name: "Liberty Mutual",
    Svg: LibertyMutual,
    proportion: "balanced",
  },
  "name-dot-com": {
    name: "Name.com",
    Svg: NameDotCom,
    proportion: "balanced",
  },
  pluralsight: {
    name: "Pluralsight",
    Svg: Pluralsight,
    proportion: "wide",
  },
  "nyc-public-schools": {
    name: "NYC Public Schools",
    Svg: NycPublicSchools,
    proportion: "wide",
  },
  "the-hartford": {
    name: "The Hartford",
    Svg: TheHartford,
    proportion: "tall",
  },
  "the-standard": {
    name: "The Standard",
    Svg: TheStandard,
    proportion: "tall",
  },
  "m-and-t-bank": {
    name: "M&T Bank",
    Svg: MAndTBank,
    proportion: "balanced",
  },
  "canadian-grain-commission": {
    name: "Canadian Grain Commission",
    Svg: CanadianGrainCommission,
    proportion: "wide",
  },
} as const;
