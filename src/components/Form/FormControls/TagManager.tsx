import type { ComponentPropsWithoutRef } from "react";
import { BaseFormControl } from "./Base";
import TagManager from "../../../components/TagManager";
import { FormControl, FormData } from "../form-controls";

export type FormControlTagManager = BaseFormControl
	& Partial<ComponentPropsWithoutRef<typeof TagManager>>
	& {
		controlType: "TagManager";
	}

export default function getTagManager(
	field: FormControlTagManager,
	newItem: Record<string, FormData>,
	setNewItem: (newItem: Record<string, FormData>) => void,
) {
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
}

function isTagManager(field: FormControl): field is FormControlTagManager {
	return field.controlType === "TagManager";
};

function isStringArray(values: unknown): values is string[] {
	if (!Array.isArray(values)) return false;

	return values.every((value) => typeof value === "string");
}
