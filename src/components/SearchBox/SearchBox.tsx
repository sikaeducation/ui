import "./SearchBox.scss";
import Icon from "../../elements/Icon";
import Button from "../../elements/Button";
import { FormEventHandler, useState } from "react";
import classNames from "classnames";

type Props = {
	className?: string;
	id: string;
	updateSearchTerm: (newValue: string) => void;
	searchTerm: string;
	size: "small" | "medium" | "large";
	action: (searchTerm: string) => void;
};

export default function SearchBox({
	id,
	searchTerm,
	updateSearchTerm,
	className = "",
	size,
	action,
}: Props) {
	const [
		focused,
		setFocused,
	] = useState(false);
	{
		const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
			event.preventDefault();
			action(searchTerm);
		};
		return <form className={classNames({
			SearchBox: true,
			focused,
			large: size === "large",
			medium: size === "medium",
			small: size === "small",
		})}
			onSubmit={handleSubmit}
		>
			<input
				id={id}
				name={id}
				type="search"
				value={searchTerm}
				onChange={(event) => updateSearchTerm(event.target.value)}
				onFocus={() => {
					setFocused(true);
				}}
				onBlur={() => {
					setFocused(false);
				}}
				className={className}
				aria-label="Search term"
			/>
			<Button type="primary">
				<Icon type="search" />
			</Button>
		</form >;
	}
}
