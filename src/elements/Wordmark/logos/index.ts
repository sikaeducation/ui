import Ford from "./ford.svg?react";
import NorthwesternMutual from "./nwm.svg?react";
import LibertyMutual from "./liberty.svg?react";
import NameDotCom from "./name-dot-com.svg?react";
import Pluralsight from "./pluralsight.svg?react";

export default {
  ford: {
    name: "Ford",
    Svg: Ford,
  },
  "northwestern-mutual": {
    name: "Northwestern Mutual",
    Svg: NorthwesternMutual,
  },
  "liberty-mutual": {
    name: "Liberty Mutual",
    Svg: LibertyMutual,
  },
  "name-dot-com": {
    name: "Name.com",
    Svg: NameDotCom,
  },
  pluralsight: {
    name: "Pluralsight",
    Svg: Pluralsight,
  },
} as const;
