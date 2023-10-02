import {
	BaseFormControl, FormControl, getFormControl,
} from "./form-controls";
import type {
	ComponentPropsWithoutRef, ReactNode,
} from "react";
import Button from "../../elements/Button";
import Heading from "../../elements/Heading";
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
					return getFormControl(
						field, newItem, setNewItem,
					);
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
