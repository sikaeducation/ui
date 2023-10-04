import {
	ReactNode,
} from "react";
import {
	FormControl, getFormControl, NewFormData,
} from "./form-controls";

function loadNextFormControl(
	fields: FormControl[],
	newItem: NewFormData,
	setNewItem: (value: NewFormData) => void,
){
	const field = fields.shift()!;
	return getFormControl(
		field,
		newItem,
		setNewItem,
	);
}

// eslint-disable-next-line max-statements
export default function createFormControlElements(
	fields: FormControl[],
	newItem: NewFormData,
	setNewItem: (value: NewFormData) => void,
){
	let $fields: ReactNode[] = [];

	while (fields.length > 0) {
		const field = fields[0];
		const formControl = loadNextFormControl(
			fields,
			newItem,
			setNewItem,
		);

		const [
			nextField,
			thirdField,
		] = fields;
		if (
			(field.width === "half" && nextField?.width === "half")
			|| (field.width === "third" && nextField?.width === "third" && thirdField?.width !== "third")
		) {
			const nextFormControl = loadNextFormControl(
				fields,
				newItem,
				setNewItem,
			);
			$fields.push(<div key={field.id} className="form-row">
				<span className="form-field half">{formControl}</span>
				<span className="form-field half">{nextFormControl}</span>
			</div>);
		} else if (field.width === "third" && nextField?.width === "third" && thirdField?.width === "third") {
			const nextFormControl = loadNextFormControl(
				fields,
				newItem,
				setNewItem,
			);
			const thirdFormControl = loadNextFormControl(
				fields,
				newItem,
				setNewItem,
			);
			$fields.push(<div key={field.id} className="form-row">
				<span className="form-field third">{formControl}</span>
				<span className="form-field third">{nextFormControl}</span>
				<span className="form-field third">{thirdFormControl}</span>
			</div>);
		} else {
			$fields.push(<div key={field.id} className="form-row form-field full">{formControl}</div>);
		}
	}
	return $fields;
}
