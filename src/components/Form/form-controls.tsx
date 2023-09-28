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

const isTextInput = (field: FormControl): field is FormControlTextInput => {
	return field.controlType === "TextInput";
};
const isTextArea = (field: FormControl): field is FormControlTextArea => {
	return field.controlType === "TextArea";
};
const isDropDown = (field: FormControl): field is FormControlDropDown => {
	return field.controlType === "DropDown";
};
const isCheckbox = (field: FormControl): field is FormControlCheckbox => {
	return field.controlType === "Checkbox";
};
const isTagManager = (field: FormControl): field is FormControlTagManager => {
	return field.controlType === "TagManager";
};
const isToggle = (field: FormControl): field is FormControlToggle => {
	return field.controlType === "Toggle";
};

const controlTypes = {
	"DropDown": (
		field: FormControl,
		newItem: Record<string, FormData>,
		setNewItem: (newItem: Record<string, FormData>) => void,
	) => {
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
	},
	"TextInput": (
		field: FormControlTextInput,
		newItem: Record<string, FormData>,
		setNewItem: (newItem: Record<string, FormData>) => void,
	) => {
		if (!isTextInput(field)) return <></>;
		const { id, label } = field;
		const value = newItem[String(id)] ? String(newItem[String(id)]) : "";
		const updateValue = (newValue: FormData) => {
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
	},
	"TextArea": (
		field: FormControlTextArea,
		newItem: Record<string, FormData>,
		setNewItem: (newItem: Record<string, FormData>) => void,
	) => {
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
	},
	"Checkbox": (
		field: FormControlCheckbox,
		newItem: Record<string, FormData>,
		setNewItem: (newItem: Record<string, FormData>) => void,
	) => {
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
	},
	"Toggle": (
		field: FormControlToggle,
		newItem: Record<string, FormData>,
		setNewItem: (newItem: Record<string, FormData>) => void,
	) => {
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
	},
	"TagManager": (
		field: FormControlTagManager,
		newItem: Record<string, FormData>,
		setNewItem: (newItem: Record<string, FormData>) => void,
	) => {
		if (!isTagManager(field)) return <></>;
		const { id } = field;

		let tags: string[];
		if (isStringArray(newItem[id])) {
			tags = newItem[id] as string[];
		} else return <></>;

		if (!Array.isArray(tags)) return <></>;
		return <TagManager
			key={id}
			id={id}
			tags={tags}
			addTag={(tag: string) => {
				setNewItem({
					...newItem,
					[id]: [
						...tags,
						"hi",
						tag,
					],
				});
			}}
			removeTag={(tagToRemove: string) => {
				setNewItem({
					...newItem,
					[id]: tags.filter((tag) => tag !== tagToRemove),
				});
			}}
		/>;
	},
} as const;

export function getFormControl(
	field: FormControl,
	newItem: Record<string, FormData>,
	setNewItem: (newItem: Record<string, FormData>) => void,
) {
	switch (field.controlType) {
		case "TextInput":
			return controlTypes["TextInput"](
				field, newItem, setNewItem,
			);
		case "TextArea":
			return controlTypes["TextArea"](
				field, newItem, setNewItem,
			);
		case "DropDown":
			return controlTypes["DropDown"](
				field, newItem, setNewItem,
			);
		case "Checkbox":
			return controlTypes["Checkbox"](
				field, newItem, setNewItem,
			);
		case "Toggle":
			return controlTypes["Toggle"](
				field, newItem, setNewItem,
			);
		case "TagManager":
			return controlTypes["TagManager"](
				field, newItem, setNewItem,
			);
	}
}

function isStringArray(values: unknown): values is string[] {
	if (!Array.isArray(values)) return false;

	return values.every((value) => typeof value === "string");
}
