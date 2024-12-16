import { ReactNode } from "react";
import "./Badge.scss";
import classNames from "classnames";

type Props = {
  children: ReactNode;
  type: "light" | "primary" | "dark";
};

export default function Badge({ children, type = "light" }: Props) {
  return (
    <div
      className={classNames({
        Badge: true,
        light: type === "light",
        primary: type === "primary",
        dark: type === "dark",
      })}
    >
      {children}
    </div>
  );
}
