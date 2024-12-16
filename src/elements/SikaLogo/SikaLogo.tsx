import classNames from "classnames";
import "./SikaLogo.scss";

type Props = {
  size?: "small" | "medium" | "large";
  style?: "color" | "monochrome";
};

function SikaLogo({ size = "medium", style = "color" }: Props) {
  return (
    <span
      className={classNames({
        SikaLogo: true,
        small: size === "small",
        medium: size === "medium",
        large: size === "large",
        color: style === "color",
        monochrome: style === "monochrome",
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
