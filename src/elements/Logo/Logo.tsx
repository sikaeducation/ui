import classNames from "classnames";
import "./Logo.scss";

type Props = {
  size: "small" | "medium" | "large";
};

function Logo({ size }: Props) {
  return (
    <span
      className={classNames({
        Logo: true,
        small: size === "small",
        medium: size === "medium",
        large: size === "large",
      })}
    >
      <span className="s">S</span>
      <span className="i">i</span>
      <span className="k">k</span>
      <span className="a">a</span>
    </span>
  );
}

export default Logo;
