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
  const { Svg, name } = logos[subject];
  return (
    <span
      className={classNames({
        Wordmark: true,
        small: size === "small",
        large: size === "large",
        color: style === "color",
        monochrome: style === "monochrome",
      })}
      title={name}
    >
      <Svg />
    </span>
  );
}
