import type { ComponentPropsWithoutRef } from "react";
import Toggle from "../../../elements/Toggle";
import {
	BaseFormControl, NewFormData,
} from "../form-controls";

export type FormControlToggle = BaseFormControl
	& Omit<ComponentPropsWithoutRef<typeof Toggle>, "updateValue" | "value">
	& {
		controlType: "Toggle";
	}

type GetToggle = (
	field: FormControlToggle,
	newItem: NewFormData,
	setNewItem: (newItem: NewFormData) => void,
) => ReturnType<typeof Toggle>;

const getToggle: GetToggle = (
	field,
	newItem,
	setNewItem,
) => {
	const {
		id, label,
	} = field;
	const value = String(newItem[id] ? newItem[id] : "");
	const updateValue = (newValue: boolean) => {
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
};

export default getToggle;
