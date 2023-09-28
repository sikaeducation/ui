import type { ComponentPropsWithoutRef } from "react";
import { BaseFormControl } from "./Base";
import DropDown from "../../../elements/DropDown";
import { FormControl, FormData } from "../form-controls";

export type FormControlDropDown = BaseFormControl
	& Partial<ComponentPropsWithoutRef<typeof DropDown>>
	& {
		controlType: "DropDown";
	}

export default function getDropDown(
	field: FormControlDropDown,
	newItem: Record<string, FormData>,
	setNewItem: (newItem: Record<string, FormData>) => void,
) {
	if (!isDropDown(field)) return <></>;
	const { id, label } = field;
	const value = newItem[String(id)] ? String(newItem[String(id)]) : "";
	const updateValue = (newValue: FormData) => {
		return setNewItem({
			...newItem,
			[id]: newValue,
		});
	};
	const options = field.options;
	return <DropDown
		key={id}
		id={id}
		label={label}
		value={value}
		options={options}
		updateValue={updateValue}
	/>;
}

function isDropDown(field: FormControl): field is FormControlDropDown {
	return field.controlType === "DropDown";
};
