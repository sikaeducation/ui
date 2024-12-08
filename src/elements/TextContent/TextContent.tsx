import { ReactNode } from "react";
import "./TextContent.scss";
import classNames from "classnames";

type Props = {
  children: ReactNode;
  className?: string;
  style: "body" | "hero";
};

export default function TextArea(
  { children, className = "", style = "body" }: Props,
) {
  return (
    <p
      className={classNames({
        [className]: true,
        TextContent: true,
        hero: style === "hero",
      })}
    >
      {children}
    </p>
  );
}
