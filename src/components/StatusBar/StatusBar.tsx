import classNames from "classnames";
import "./StatusBar.scss";

type Props = {
	type: "error" | "working" | "success";
};

export default function StatusBar({ type }: Props) {
	return (
		<div
			className={classNames({
				error: type === "error",
				working: type === "working",
				success: type === "success",
				StatusBar: true,
			})}
		>
			&nbsp;
		</div>
	);
}
