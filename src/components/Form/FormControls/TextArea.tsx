import { ComponentPropsWithoutRef } from "react";
import { BaseFormControl } from "./Base";
import TextArea from "../../../elements/TextArea";
import { FormControl, FormData } from "../form-controls";

export type FormControlTextArea = BaseFormControl
	& Partial<ComponentPropsWithoutRef<typeof TextArea>>
	& {
		controlType: "TextArea";
	}

export default function getTextArea(
	field: FormControlTextArea,
	newItem: Record<string, FormData>,
	setNewItem: (newItem: Record<string, FormData>) => void,
) {
	if (!isTextArea(field)) return <></>;
	const { id, label } = field;
	const value = newItem[String(id)] ? String(newItem[String(id)]) : "";
	const updateValue = (newValue: FormData) => {
		return setNewItem({
			...newItem,
			[id]: newValue,
		});
	};
	return <TextArea
		key={id}
		id={id}
		label={label}
		value={value}
		updateValue={updateValue}
	/>;
}

function isTextArea(field: FormControl): field is FormControlTextArea {
	return field.controlType === "TextArea";
};
