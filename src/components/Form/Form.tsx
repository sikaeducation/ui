import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Button from "../../elements/Button";
import Heading from "../../elements/Heading";
import createFormControlElements from "./create-form-control-elements";
import { BaseFormControl, FormControl } from "./form-controls";
import "./Form.scss";

type FormData = string | boolean | number | string[];
type Action = BaseFormControl &
  Partial<ComponentPropsWithoutRef<typeof Button>>;

type Props = {
  heading: string;
  newItem: Record<string, FormData>;
  setNewItem: (value: Record<string, FormData>) => void;
  fields: Readonly<FormControl>[];
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
  const $fields = createFormControlElements(fields, newItem, setNewItem);

  const $actions = actions.map(({ label, type, action, size }) => (
    <Button
      key={label}
      action={action}
      type={type ?? "primary"}
      size={size}
      children={label}
    />
  ));
  return (
    <div className="Form">
      <Heading level={2}>{heading}</Heading>
      <form>
        <fieldset className="form-fields">{$fields}</fieldset>
        {children}
        <fieldset className="actions">{$actions}</fieldset>
      </form>
    </div>
  );
}
