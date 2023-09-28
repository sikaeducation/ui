import type { ComponentPropsWithoutRef } from "react";
import { BaseFormControl } from "./Base";
import Checkbox from "../../../elements/Checkbox";
import { FormControl, FormData } from "../form-controls";

export type FormControlCheckbox = BaseFormControl
	& Partial<ComponentPropsWithoutRef<typeof Checkbox>>
	& {
		controlType: "Checkbox";
	}

export default function getCheckbox(
	field: FormControlCheckbox,
	newItem: Record<string, FormData>,
	setNewItem: (newItem: Record<string, FormData>) => void,
) {
	if (!isCheckbox(field)) return <></>;
	const { id, label, type } = field;
	const value = newItem[String(id)] ? String(newItem[String(id)]) : "";
	const updateValue = (newValue: FormData) => {
		return setNewItem({
			...newItem,
			[id]: newValue,
		});
	};
	return <Checkbox
		key={id}
		id={id}
		label={label}
		type={type}
		value={value}
		updateValue={updateValue}
	/>;
}

function isCheckbox(field: FormControl): field is FormControlCheckbox {
	return field.controlType === "Checkbox";
};
