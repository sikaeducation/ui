import classNames from "classnames";
import { ReactNode } from "react";
import "./Button.scss";

type ButtonType = "primary" | "secondary" | "ghost";
type Size = "tiny" | "small" | "large";
type ActionType = "normal" | "failure";
type Props = {
  action?: () => void;
  actionType?: ActionType;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  size?: Size;
  submit?: boolean;
  type: ButtonType;
};

const buttonClasses: Record<ButtonType, string> = {
  primary: "primary-button",
  secondary: "secondary-button",
  ghost: "tertiary-button",
};

export default function ButtonFormSubmission({
  action,
  children,
  type,
  submit = false,
  size = "small",
  actionType = "normal",
  disabled = false,
  className = "",
}: Props) {
  const buttonClass = buttonClasses[type];
  return (
    <button
      onClick={action}
      type={submit ? "submit" : "button"}
      className={`${className} ${classNames({
        Button: true,
        [buttonClass]: true,
        disabled,
        interactive: !disabled,
        failure: actionType === "failure",
        tiny: size === "tiny",
        small: size === "small",
        large: size === "large",
      })}`}
    >
      {children}
    </button>
  );
}
