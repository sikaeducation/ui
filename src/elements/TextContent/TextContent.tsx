import {
	ReactNode,
} from "react";
import "./TextContent.scss";
import classNames from "classnames";

type Props = {
	children: ReactNode;
	className?: string;
};

export default function TextArea({
	children,
	className = "",
}: Props) {
	return (
		<p className={classNames({
			[className]: true,
			TextContent: true,
		})}>
			{children}
		</p>
	);
}
