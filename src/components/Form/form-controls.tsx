import type { ComponentPropsWithoutRef } from "react";
import TextInput from "../../elements/TextInput";
import TextArea from "../../elements/TextArea";
import DropDown from "../../elements/DropDown";
import Checkbox from "../../elements/Checkbox";
import TagManager from "../TagManager";
import Toggle from "../../elements/Toggle";

type FormData = boolean | string | number | string[];
export type BaseFormControl = {
	id: string;
	label: string;
	className?: string;
	required?: boolean;
}

type FormControlTextInput = BaseFormControl
	& Partial<ComponentPropsWithoutRef<typeof TextInput>>
	& {
		controlType: "TextInput";
	}
type FormControlDropDown = BaseFormControl
	& Partial<ComponentPropsWithoutRef<typeof DropDown>>
	& {
		controlType: "DropDown";
	}
type FormControlCheckbox = BaseFormControl
	& Partial<ComponentPropsWithoutRef<typeof Checkbox>>
	& {
		controlType: "Checkbox";
	}
type FormControlTagManager = BaseFormControl
	& Partial<ComponentPropsWithoutRef<typeof TagManager>>
	& {
		controlType: "TagManager";
	}
type FormControlToggle = BaseFormControl
	& Partial<ComponentPropsWithoutRef<typeof Toggle>>
	& {
		controlType: "Toggle";
	}
type FormControlTextArea = BaseFormControl
	& Partial<ComponentPropsWithoutRef<typeof TextArea>>
	& {
		controlType: "TextArea";
	}

export type FormControl = | FormControlTextInput
	| FormControlTextArea
	| FormControlDropDown
	| FormControlCheckbox
	| FormControlTagManager
	| FormControlToggle;

export const controlTypes = {
	"DropDown": (
		field: FormControlDropDown,
		newItem: Record<string, FormData>,
		setNewItem: (newItem: Record<string, FormData>) => void,
	) => {
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
	},
	// Next: Do the above stuff to the below types
	"TextInput": (props) => <TextInput {...props} />,
	"TextArea": (props) => <TextArea {...props} />,
	"Checkbox": (props) => <Checkbox {...props} />,
	"Toggle": (props) => <Toggle {...props} />,
	"TagManager": (props) => <TagManager {...props} />,
};
