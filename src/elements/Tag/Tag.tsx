import classNames from "classnames";
import { ReactNode } from "react";
import Icon from "../Icon";
import "./Tag.scss";

type Props = {
  close?: () => void;
  active?: boolean;
  engage?: () => void;
  children: ReactNode;
};

export default function Tag(props: Props) {
  const { children, close, engage, active } = props;

  return (
    <span
      className={classNames({
        Tag: true,
        active,
        interactive: engage,
      })}
      onClick={engage ? () => engage() : undefined}
    >
      {children}
      {close ? <Icon type="close" action={close} /> : null}
    </span>
  );
}
