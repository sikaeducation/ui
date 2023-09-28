import { BaseFormControl, FormControl } from "./form-controls";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Button from "../../elements/Button";
import Heading from "../../elements/Heading";
import { controlTypes } from "./form-controls";
import "./Form.scss";

type FormData = string | boolean | number | string[];
type Action = BaseFormControl
	& Partial<ComponentPropsWithoutRef<typeof Button>>

type Props = {
	heading: string;
	newItem: Record<string, FormData>;
	setNewItem: (value: Record<string, FormData>) => void;
	fields: FormControl[];
	actions: Action[];
	children?: ReactNode;
};

export default function Form({
	heading,
	fields,
	actions,
	newItem,
	setNewItem,
	children = <></>,
}: Props) {
	return (
		<div className="Form">
			<Heading level={2}>{heading}</Heading>
			<form>
				{fields.map((field) => {
					const { id, label, controlType } = field;
					const commonOptions = {
						id: id,
						label: label,
						value: newItem[String(id)] ? String(newItem[String(id)]) : "",
						updateValue: (newValue: FormData) => setNewItem({
							...newItem,
							[id]: newValue,
						}),
					};
					if (controlType === "DropDown") {
						return controlTypes[controlType](
							field, newItem, setNewItem,
						);
					}
					if (controlType === "TextInput") {
						return controlTypes[controlType](
							field, newItem, setNewItem,
						);
					}
					if (controlType === "TextArea") {
						return controlTypes[controlType]({
							...commonOptions,
							key: id,
						});
					}
					if (controlType === "Checkbox") {
						return controlTypes[controlType]({
							...commonOptions,
							key: id,
							type: field.type,
						});
					}
					if (controlType === "Toggle") {
						return controlTypes[controlType]({
							...commonOptions,
							key: id,
						});
					}
					if (controlType === "TagManager") {
						const tags = newItem[id];
						if (!Array.isArray(tags)) return <></>;
						return controlTypes[controlType]({
							...commonOptions,
							key: id,
							tags: tags,
							removeTag: (tagToRemove: string) => {
								setNewItem({
									...newItem,
									[id]: tags
										.filter((tag) => tag !== tagToRemove),
								});
							},
							addTag: (tag: string) => {
								setNewItem({
									...newItem,
									[id]: [
										...tags,
										"hi",
										tag,
									],
								});
							},
						});
					}
				})}
				{children}
				<fieldset className="actions">
					{actions.map(({
						label,
						type,
						action,
						size,
					}) => <Button
							key={label}
							action={action}
							type={type ?? "primary"}
							size={size}
							children={label}
						/>)}
				</fieldset>
			</form>
		</div>
	);
}
