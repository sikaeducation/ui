import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Button from "../../elements/Button";
import Heading from "../../elements/Heading";
import TextInput from "../../elements/TextInput";
import TextArea from "../../elements/TextArea";
import DropDown from "../../elements/DropDown";
import "./Form.scss";
import { Checkbox } from "@material-ui/core";

type FormData = boolean | string | number;
type BaseFormControl = {
	id: string;
	label: string;
	className?: string;
	required?: boolean;
}
type FormControlTextInput = BaseFormControl
	& ComponentPropsWithoutRef<typeof TextInput>
	& {
		controlType: "TextInput";
		Component: typeof TextInput;
		type?: "text" | "email" | "password" | "url";
	}
type FormControlTextArea = BaseFormControl
	& ComponentPropsWithoutRef<typeof TextArea>
	& {
		controlType: "TextArea";
		Component: typeof TextArea;
	}
type FormControlDropDown = BaseFormControl
	& ComponentPropsWithoutRef<typeof DropDown>
	& {
		controlType: "DropDown";
		Component: typeof DropDown;
	}
type FormControlCheckbox = BaseFormControl
	& ComponentPropsWithoutRef<typeof Checkbox>
	& {
		controlType: "Checkbox";
		Component: typeof Checkbox;
	}
type FormControl = | FormControlTextInput
	| FormControlTextArea
	| FormControlDropDown
	| FormControlCheckbox;

type Action = BaseFormControl
	& ComponentPropsWithoutRef<typeof Button>
	& {
		Component: typeof Button;
	};

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
					const { id, label, Component } = field;
					return <Component
						key={id}
						id={id}
						label={label}
						value={newItem[String(id)] ? String(newItem[String(id)]) : ""}
						updateValue={(newValue: FormData) => setNewItem({
							...newItem,
							[id]: newValue,
						})}
					/>;
				})}
				{children}
				<fieldset className="actions">
					{actions.map(({
						label,
						Component,
						type,
						action,
						size,
					}) => <Component
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
