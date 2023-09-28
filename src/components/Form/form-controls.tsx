import type { ComponentPropsWithoutRef } from "react";
import TagManager from "../TagManager";

import TextInput, { FormControlTextInput } from "./FormControls/TextInput";
import TextArea, { FormControlTextArea } from "./FormControls/TextArea";
import DropDown, { FormControlDropDown } from "./FormControls/DropDown";
import Checkbox, { FormControlCheckbox } from "./FormControls/Checkbox";
import Toggle, { FormControlToggle } from "./FormControls/Toggle";

export type FormData = boolean | string | number | string[];

export type BaseFormControl = {
	id: string;
	label: string;
	className?: string;
	required?: boolean;
}

type FormControlTagManager = BaseFormControl
	& Partial<ComponentPropsWithoutRef<typeof TagManager>>
	& {
		controlType: "TagManager";
	}

export type FormControl = | FormControlTextInput
	| FormControlTextArea
	| FormControlDropDown
	| FormControlCheckbox
	| FormControlTagManager
	| FormControlToggle;

const isTagManager = (field: FormControl): field is FormControlTagManager => {
	return field.controlType === "TagManager";
};

const controlTypes = {
	DropDown,
	TextInput,
	TextArea,
	Checkbox,
	Toggle,
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
