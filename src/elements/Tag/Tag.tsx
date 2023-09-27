import { ReactNode } from "react";
import Icon from "../Icon";
import "./Tag.scss";

type Props = {
	close?: () => void;
	engage?: () => void;
	children: ReactNode;
};

export default function Tag(props: Props) {
	return <span className="Tag">
		{props.children}
		{
			props.close ? <Icon type="close" action={close} /> : null
		}
	</span>;
}
