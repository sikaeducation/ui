import { ComponentPropsWithoutRef } from "react";
import { BaseFormControl } from "./Base";
import TextArea from "../../../elements/TextArea";
import { NewFormData } from "../form-controls";

export type FormControlTextArea = BaseFormControl
	& Omit<ComponentPropsWithoutRef<typeof TextArea>, "updateValue" | "value">
	& {
		controlType: "TextArea";
	}

type GetTextArea = (
	field: FormControlTextArea,
	newItem: NewFormData,
	setNewItem: (newItem: NewFormData) => void,
) => ReturnType<typeof TextArea>

const getTextArea: GetTextArea = (
	field,
	newItem,
	setNewItem,
) => {
	const { id, label } = field;
	const value = String(newItem[id] ? newItem[id] : "");
	const updateValue = (newValue: string) => {
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
};

export default getTextArea;
