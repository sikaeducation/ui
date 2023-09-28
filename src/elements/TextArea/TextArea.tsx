import classNames from "classnames";
import "./TextArea.scss";

type Props = {
	className?: string;
	editable?: boolean;
	id: string;
	label: string;
	required?: boolean;
	updateValue: (newValue: string) => void;
	value?: string;
};

export default function TextArea({
	id,
	label,
	value = "",
	updateValue,
	required,
	editable = false,
	className = "",
}: Props) {
	return (
		<div className="TextArea">
			<label htmlFor={id}>{label}</label>
			<textarea
				id={id}
				value={value}
				required={required}
				className={`${className} ${classNames({ editable })}`}
				onChange={(event) => {
					updateValue(event.target.value);
				}}
			/>
		</div>
	);
}
