import classNames from "classnames";
import "./DropDown.scss";

type Props = {
	className?: string;
	editable?: boolean;
	id: string;
	label: string;
	required?: boolean;
	type?: "text";
	updateValue: (newValue: string) => void;
	value?: string;
	options?: { id: string; label: string; }[];
};

export default function DropDown({
	id,
	label,
	value = "",
	updateValue,
	required,
	editable = false,
	className = "",
	options = [
	],
}: Props) {
	return (
		<div className="DropDown">
			<label htmlFor={id}>{label}</label>
			<select
				id={id}
				value={value}
				required={required}
				className={`${className} ${classNames({
					editable,
				})}`}
				onChange={(event) => {
					updateValue(event.target.value);
				}}
			>
				{options.map(({
					id, label,
				}) => (
					<option key={id} value={id}>{label}</option>
				))}
			</select>
		</div>
	);
}
