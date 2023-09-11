import "./TextInput.scss";

type Props = {
	className?: string;
	id: string;
	label: string;
	required?: boolean;
	type?: "text" | "url" | "email" | "password";
	updateValue: (newValue: string) => void;
	value: string;
};

export default function TextInput({
	id,
	label,
	value,
	updateValue,
	type = "text",
	required = false,
	className = "",
}: Props){
	return (
		<div className="TextInput">
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				name={id}
				type={type}
				value={value}
				onChange={(event) => updateValue(event.target.value)}
				required={required}
				className={className}
			/>
		</div>
	);
}
