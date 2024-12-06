import classNames from "classnames";
import "./Wordmark.scss";

import logos from "./logos";

type Props = {
  size: "small" | "large";
  subject: keyof typeof logos;
  style: "color" | "monochrome";
};

export default function Wordmark(
  { size = "small", subject, style = "color" }: Props,
) {
  const { Svg, name, proportion } = logos[subject];
  return (
    <span
      className={classNames({
        Wordmark: true,
        small: size === "small",
        large: size === "large",
        color: style === "color",
        balanced: proportion === "balanced",
        wide: proportion === "wide",
        tall: proportion === "tall",
        monochrome: style === "monochrome",
      })}
      title={name}
    >
      <Svg />
    </span>
  );
}
