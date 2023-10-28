import classNames from "classnames";
import { KeyboardEventHandler, ReactNode } from "react";
import Icon from "@/Icon";
import "./Tag.scss";

type Props = {
	close?: () => void;
	active?: boolean;
	engage?: () => void;
	children: ReactNode;
};

export default function Tag(props: Props) {
	const { children, close, engage, active } = props;
	const handleKeyDown: KeyboardEventHandler = (event) => {
		if (engage && event.key === "Space") {
			engage();
		}
	};

	return (
		// eslint-disable-next-line jsx-a11y/no-static-element-interactions
		<span
			className={classNames({
				Tag: true,
				active,
				interactive: engage,
			})}
			onClick={engage ? () => engage() : undefined}
			role={engage ? "button" : undefined}
			onKeyDown={engage ? handleKeyDown : undefined}
		>
			{children}
			{close ? <Icon type="close" action={close} /> : null}
		</span>
	);
}
