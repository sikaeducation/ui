import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Button from "../../elements/Button";
import Heading from "../../elements/Heading";
import TextInput from "../../elements/TextInput";
import TextArea from "../../elements/TextArea";
import DropDown from "../../elements/DropDown";
import Checkbox from "../../elements/Checkbox";
import "./Form.scss";

type FormData = boolean | string | number;
type BaseFormControl = {
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
type FormControlTextArea = BaseFormControl
	& Partial<ComponentPropsWithoutRef<typeof TextArea>>
	& {
		controlType: "TextArea";
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
type FormControl = | FormControlTextInput
	| FormControlTextArea
	| FormControlDropDown
	| FormControlCheckbox;

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
						return <DropDown
							{...commonOptions}
							key={id}
							options={controlType === "DropDown" ? field.options : undefined}
						/>;
					}
					if (controlType === "TextInput") {
						return <TextInput
							{...commonOptions}
							key={id}
							type={field.type}
						/>;
					}
					if (controlType === "TextArea") {
						return <TextArea
							{...commonOptions}
							key={id}
						/>;
					}
					if (controlType === "Checkbox") {
						return <Checkbox
							{...commonOptions}
							key={id}
							type={field.type}
						/>;
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
							type={type}
							size={size}
							children={label}
						/>)}
				</fieldset>
			</form>
		</div>
	);
}
