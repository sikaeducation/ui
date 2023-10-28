import { ReactNode } from "react";
import { FormControl, getFormControl, NewFormData } from "./form-controls";

export default function createFormControlElements(
  fields: Readonly<FormControl[]>,
  newItem: NewFormData,
  setNewItem: (value: NewFormData) => void,
) {
  let $fields: ReactNode[] = [];

  let currentFieldIndex = 0;
  while (currentFieldIndex < fields.length) {
    const field = fields[currentFieldIndex];
    const formControl = getFormControl(field, newItem, setNewItem);
    currentFieldIndex += 1;

    const [nextField, thirdField] = fields;
    if (
      (field.width === "half" && nextField?.width === "half") ||
      (field.width === "third" &&
        nextField?.width === "third" &&
        thirdField?.width !== "third")
    ) {
      const nextFormControl = getFormControl(
        fields[currentFieldIndex++],
        newItem,
        setNewItem,
      );
      $fields.push(
        <div key={field.id} className="form-row">
          <span className="form-field half">{formControl}</span>
          <span className="form-field half">{nextFormControl}</span>
        </div>,
      );
    } else if (
      field.width === "third" &&
      nextField?.width === "third" &&
      thirdField?.width === "third"
    ) {
      const nextFormControl = getFormControl(
        fields[currentFieldIndex++],
        newItem,
        setNewItem,
      );
      const thirdFormControl = getFormControl(
        fields[currentFieldIndex++],
        newItem,
        setNewItem,
      );
      $fields.push(
        <div key={field.id} className="form-row">
          <span className="form-field third">{formControl}</span>
          <span className="form-field third">{nextFormControl}</span>
          <span className="form-field third">{thirdFormControl}</span>
        </div>,
      );
    } else {
      $fields.push(
        <div key={field.id} className="form-row form-field full">
          {formControl}
        </div>,
      );
    }
  }
  return $fields;
}
