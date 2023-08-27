// import type { ReactNode } from "react";
// import { Button, TextArea, Checkbox, TextInput } from "../..";
// import Heading from "../Heading";
import "./Form.scss";

// type FieldType = "text" | "url" | "email" | "password";
// type ButtonType = "primary" | "secondary" | "ghost";
// type Size = "small" | "large";
//
// type Field = {
// 	id: string;
// 	label: string;
// 	Component: (typeof TextInput | typeof TextArea | typeof Checkbox);
// 	type?: FieldType;
// };
//
// type Action = {
// 	label: string;
// 	Component: typeof Button;
// 	action: (payload: unknown) => void;
// 	type?: ButtonType;
// 	size?: Size;
// };
//
// type Props = {
// 	heading: string;
// 	newItem: Record<string, unknown>;
// 	setNewItem: (value: Record<string, unknown>) => void;
// 	fields: Field[];
// 	actions: Action[];
// 	children?: ReactNode;
// };

export default function Form(){
	// {
	// heading,
	// fields,
	// actions,
	// newItem,
	// setNewItem,
	// children,
	// } /*: Props */,
	return (
  <div className="Form">
  {/*
			<Heading level={2}>{heading}</Heading>
			<form>
				{fields.map(({ id, label, Component, type }) => (
					<Component
						key={id}
						id={id}
						label={label}
						value={newItem[id] || ""}
						updateValue={(newValue: unknown) =>
							setNewItem({
								...newItem,
								[id]: newValue,
							})
						}
						type={type}
					/>
				))}
				{children}
				<fieldset className="actions">
					{actions.map(({ label, Component, type, action, size }) => (
						<Component
							key={label}
							label={label}
							action={action}
							type={type}
							size={size}
						>
							{label}
						</Component>
					))}
				</fieldset>
			</form>
			*/}
		</div>
	);
}
