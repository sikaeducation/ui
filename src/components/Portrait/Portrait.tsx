import Image from "@/components/Image";
import "./Portrait.scss";
import classNames from "classnames";

type Props = {
  src: string;
  alt: string;
  style: "badge" | "small" | "medium" | "large";
};

export default function Portrait({
  src,
  alt,
  style,
}: Props) {
  return (
    <div
      className={classNames({
        Portrait: true,
        badge: style === "badge",
        small: style === "small",
        medium: style === "medium",
        large: style === "large",
      })}
    >
      <Image src={src} alt={alt} />
    </div>
  );
}
