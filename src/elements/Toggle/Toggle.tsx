import "./Toggle.scss";
import {
	Switch as MaterialSwitch,
} from "@material-ui/core";

type Props = {
	id: string;
	label: string;
	value: boolean | string;
	updateValue: (newValue: boolean) => void;
	required?: boolean;
	side: "left" | "right";
};

export default function Toggle({
	id,
	label,
	value,
	updateValue,
	required = false,
	side = "left",
}: Props) {
	const Switch = <>
		<MaterialSwitch
			checked={!!value}
			id={id}
			required={required}
			name={id}
			onChange={() => updateValue(!value)}
			color="primary"
		/>
		<label htmlFor={id}>{label}</label>
	</>;
	const Label = <>
		<label htmlFor={id}>{label}</label>
		<MaterialSwitch
			checked={!!value}
			id={id}
			required={required}
			name={id}
			onChange={() => updateValue(!value)}
			color="primary"
		/>
	</>;
	return (
		<div className="Toggle">
			{
				side === "left"
					? <>{Switch}{Label}</>
					: <>{Label}{Switch}</>
			}
		</div>
	);
}
