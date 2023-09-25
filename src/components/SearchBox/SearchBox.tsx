import "./SearchBox.scss";
import Icon from "../../elements/Icon";
import Button from "../../elements/Button";
import { useState } from "react";
import classNames from "classnames";

type Props = {
	className?: string;
	id: string;
	required?: boolean;
	type?: "text" | "url" | "email" | "password";
	updateValue: (newValue: string) => void;
	value: string;
};

export default function SearchBox({
	id,
	value,
	updateValue,
	type = "text",
	required = false,
	className = "",
}: Props) {
	const [
		focused,
		setFocused,
	] = useState(false);
	return (
		<div className={classNames({
			SearchBox: true,
			focused,
		})}>
			<input
				id={id}
				name={id}
				type={type}
				value={value}
				onChange={(event) => updateValue(event.target.value)}
				onFocus={() => {
					setFocused(true);
				}}
				onBlur={() => {
					setFocused(false);
				}}
				required={required}
				className={className}
			/>
			<Button type="primary">
				<Icon type="search" />
			</Button>
		</div >
	);
}
