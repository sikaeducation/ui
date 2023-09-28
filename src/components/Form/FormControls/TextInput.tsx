import { ComponentPropsWithoutRef } from "react";
import { BaseFormControl } from "./Base";
import TextInput from "../../../elements/TextInput";
import { FormControl, FormData } from "../form-controls";

type FormControlTextInput = BaseFormControl
	& Partial<ComponentPropsWithoutRef<typeof TextInput>>
	& {
		controlType: "TextInput";
	}

export function getTextInput(
	field: FormControlTextInput,
	newItem: Record<string, FormData>,
	setNewItem: (newItem: Record<string, FormData>) => void,
) {
	if (!isTextInput(field)) return (<></>);
	const { id, label } = field;
	const value = newItem[String(id)] ? String(newItem[String(id)]) : "";
	const updateValue = (newValue: string) => {
		return setNewItem({
			...newItem,
			[id]: newValue,
		});
	};
	const type = field.type;
	return <TextInput
		key={id}
		id={id}
		label={label}
		value={value}
		type={type}
		updateValue={updateValue}
	/>;
}

function isTextInput(field: FormControl): field is FormControlTextInput {
	return field.controlType === "TextInput";
}
