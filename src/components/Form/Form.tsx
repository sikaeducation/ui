import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Button from "../../elements/Button";
import Heading from "../../elements/Heading";
import TextInput from "../../elements/TextInput";
import TextArea from "../../elements/TextArea";
import DropDown from "../../elements/DropDown";
import "./Form.scss";

type FormData = boolean | string | number;

type RawFormField = {
	id: string;
	label: string;
	className?: string;
	required?: boolean;
	type?: "text" | "email" | "password" | "url";
	Component: typeof TextInput | typeof TextArea | typeof DropDown;
	value: FormData;
}

// type FormField = RawFormField & {
// 	value: FormData;
// 	updateValue: (newValue: FormData) => void;
// }

type Action = ComponentPropsWithoutRef<typeof Button>
	& {
		id: string;
		label: string;
		required?: boolean;
	} & {
		Component: typeof Button;
	};

type Props = {
	heading: string;
	newItem: Record<string, FormData>;
	setNewItem: (value: Record<string, FormData>) => void;
	fields: RawFormField[];
	actions: Action[];
	children?: ReactNode;
	options?: { label: string, id: string }[]
};

export default function Form({
	heading,
	fields,
	actions,
	newItem,
	setNewItem,
	options,
	children = <></>,
}: Props) {
	return (
		<div className="Form">
			<Heading level={2}>{heading}</Heading>
			<form>
				{fields.map(({ id, label, Component, type }) => <Component
					key={id}
					id={id}
					label={label}
					value={newItem[String(id)] ? String(newItem[String(id)]) : ""}
					updateValue={(newValue: FormData) => setNewItem({
						...newItem,
						[id]: newValue,
					})
					}
					type={type as undefined}
					options={options}
				/>)}
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
