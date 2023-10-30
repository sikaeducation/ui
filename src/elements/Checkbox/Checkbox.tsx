import { ReactNode } from "react";
import "./Checkbox.scss";
import MaterialCheckbox from "@mui/material/Checkbox";

type Props = {
	id: string;
	label: string;
	value: boolean | string;
	updateValue: (newValue: boolean) => void;
	type?: "primary" | "secondary";
	required?: boolean;
	className?: string;
	icon?: ReactNode;
	checkedIcon?: ReactNode;
};

export default function Checkbox({
	id,
	label,
	value,
	updateValue,
	type = "primary",
	required = false,
	className = "",
	icon,
	checkedIcon,
}: Props) {
	return (
		<div className={`${"Checkbox"} ${className}`}>
			<MaterialCheckbox
				checked={!!value}
				id={id}
				required={required}
				name={id}
				color={type}
				onChange={() => updateValue(!value)}
				icon={icon}
				checkedIcon={checkedIcon}
			/>
			<label htmlFor={id}>{label}</label>
		</div>
	);
}
