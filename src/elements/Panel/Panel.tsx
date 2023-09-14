import classNames from "classnames";
import { ReactNode } from "react";
import "./Panel.scss";

type Props = {
	className?: string;
	children: ReactNode | ReactNode[];
	height: "flat" | "raised" | "floating";
	background: "none" | "failure" | "warning" | "success" | "info";
};

export default function Panel({
	children,
	className = "",
	height,
	background = "none",
}: Props){
	return (
		<div className={`${className} ${classNames({
			Panel: true,
			flat: height === "flat",
			raised: height === "raised",
			floating: height === "floating",
			failure: background === "failure",
			warning: background === "warning",
			success: background === "success",
			info: background === "info",
		})}`}>
			{children}
		</div>
	);
}
