import type { ComponentPropsWithoutRef } from "react";
import { BaseFormControl } from "./Base";
import Toggle from "../../../elements/Toggle";
import { FormControl, FormData } from "../form-controls";

export type FormControlToggle = BaseFormControl
	& Partial<ComponentPropsWithoutRef<typeof Toggle>>
	& {
		controlType: "Toggle";
	}

export default function getToggle(
	field: FormControlToggle,
	newItem: Record<string, FormData>,
	setNewItem: (newItem: Record<string, FormData>) => void,
) {
	if (!isToggle(field)) return <></>;
	const { id, label } = field;
	const value = newItem[String(id)] ? String(newItem[String(id)]) : "";
	const updateValue = (newValue: FormData) => {
		return setNewItem({
			...newItem,
			[id]: newValue,
		});
	};
	return <Toggle
		key={id}
		id={id}
		label={label}
		value={value}
		updateValue={updateValue}
	/>;
}

function isToggle(field: FormControl): field is FormControlToggle {
	return field.controlType === "Toggle";
};
