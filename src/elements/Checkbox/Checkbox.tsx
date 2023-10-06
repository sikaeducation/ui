import "./Checkbox.scss";
import { Checkbox as MaterialCheckbox } from "@material-ui/core";

type Props = {
  className?: string;
  id: string;
  label: string;
  required?: boolean;
  type?: "primary" | "secondary";
  updateValue: (newValue: boolean) => void;
  value: boolean | string;
};

export default function Checkbox({
  id,
  label,
  value,
  updateValue,
  required = false,
  type = "primary",
}: Props) {
  return (
    <div className="Checkbox">
      <MaterialCheckbox
        checked={!!value}
        id={id}
        required={required}
        name={id}
        color={type}
        onChange={() => updateValue(!value)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
