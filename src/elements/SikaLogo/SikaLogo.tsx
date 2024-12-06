import classNames from "classnames";
import "./SikaLogo.scss";

type Props = {
  size: "small" | "medium" | "large";
};

function SikaLogo({ size = "medium" }: Props) {
  return (
    <span
      className={classNames({
        SikaLogo: true,
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

export default SikaLogo;
