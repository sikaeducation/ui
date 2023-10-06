import type { ComponentPropsWithoutRef } from "react";
import DropDown from "../../../elements/DropDown";
import { BaseFormControl, NewFormData } from "../form-controls";

export type FormControlDropDown = BaseFormControl &
  Omit<ComponentPropsWithoutRef<typeof DropDown>, "updateValue" | "value"> & {
    controlType: "DropDown";
  };

type GetDropDown = (
  field: FormControlDropDown,
  newItem: NewFormData,
  setNewItem: (newItem: NewFormData) => void,
) => ReturnType<typeof DropDown>;

const getDropDown: GetDropDown = (field, newItem, setNewItem) => {
  const { id, label, options } = field;
  const value = String(newItem[id] ? newItem[id] : "");
  const updateValue = (newValue: string) => {
    return setNewItem({
      ...newItem,
      [id]: newValue,
    });
  };
  return (
    <DropDown
      key={id}
      id={id}
      label={label}
      value={value}
      options={options}
      updateValue={updateValue}
    />
  );
};

export default getDropDown;
