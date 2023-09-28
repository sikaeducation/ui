import type { ComponentPropsWithoutRef } from "react";
import Checkbox from "../../../elements/Checkbox";
import { BaseFormControl, NewFormData } from "../form-controls";

export type FormControlCheckbox = BaseFormControl
	& Omit<ComponentPropsWithoutRef<typeof Checkbox>, "updateValue" | "value">
	& {
		controlType: "Checkbox";
	}

type GetCheckbox = (
	field: FormControlCheckbox,
	newItem: NewFormData,
	setNewItem: (newItem: NewFormData) => void,
) => ReturnType<typeof Checkbox>;

const getCheckbox: GetCheckbox = (
	field,
	newItem,
	setNewItem,
) => {
	const { id, label, type } = field;
	const value = String(newItem[id] ? newItem[id] : "");
	const updateValue = (newValue: boolean) => {
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
};
export default getCheckbox;
