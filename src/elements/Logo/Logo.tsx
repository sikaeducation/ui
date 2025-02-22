import classNames from "classnames";
import "./Logo.scss";

import logos from "./logos";

type Props = {
  size: "badge" | "regular" | "full";
  subject: keyof typeof logos;
  style: "color" | "monochrome";
};

export default function Logo(
  { size = "regular", subject, style = "color" }: Props,
) {
  const { Svg, name } = logos[subject];
  return (
    <span
      className={classNames({
        Logo: true,
        badge: size === "badge",
        regular: size === "regular",
        full: size === "full",
        color: style === "color",
        monochrome: style === "monochrome",
      })}
      title={name}
    >
      <Svg />
    </span>
  );
}

// Object.keys strips types
export const technologies = Object.keys(logos) as (keyof typeof logos)[];
