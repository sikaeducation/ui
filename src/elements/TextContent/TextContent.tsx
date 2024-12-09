import { ReactNode } from "react";
import "./TextContent.scss";
import classNames from "classnames";

type Props = {
  children: ReactNode;
  className?: string;
  style?: "body" | "hero" | "accent";
};

export default function TextArea(
  { children, className = "", style = "body" }: Props,
) {
  return (
    <p
      className={classNames({
        [className]: true,
        TextContent: true,
        body: style === "body",
        accent: style === "accent",
        hero: style === "hero",
      })}
    >
      {children}
    </p>
  );
}
