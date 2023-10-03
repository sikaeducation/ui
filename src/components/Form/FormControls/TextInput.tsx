import {
	ComponentPropsWithoutRef,
} from "react";
import TextInput from "../../../elements/TextInput";
import {
	BaseFormControl, NewFormData,
} from "../form-controls";

export type FormControlTextInput = BaseFormControl
	& Omit<ComponentPropsWithoutRef<typeof TextInput>, "updateValue" | "value">
	& {
		controlType: "TextInput";
	}

type GetTextInput = (
	field: FormControlTextInput,
	newItem: NewFormData,
	setNewItem: (newItem: NewFormData) => void,
) => ReturnType<typeof TextInput>

const getTextInput: GetTextInput = (
	field,
	newItem,
	setNewItem,
) => {
	const {
		id, label, type,
	} = field;
	const value = String(newItem[id]
		? newItem[id]
		: "");
	const updateValue = (newValue: string) => {
		return setNewItem({
			...newItem,
			[id]: newValue,
		});
	};
	return <TextInput
		key={id}
		id={id}
		label={label}
		value={value}
		type={type}
		updateValue={updateValue}
	/>;
};

export default getTextInput;
