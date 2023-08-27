import classNames from "classnames";
import "./TextArea.scss";

type FieldType = "text" | "url" | "email" | "password";

type props = {
  value?: string;
  updateValue: (newValue: string) => void;
  id: string;
  label: string;
  isRequired?: boolean;
  editable?: boolean;
  type?: FieldType;
};

export default function TextArea({
	id,
	label,
	value = "",
	updateValue,
	isRequired,
	editable = false,
	type = "text",
}: props){
	if (type !== "text"){
		// eslint-disable-next-line react/jsx-no-useless-fragment
		return <></>;
	}
	return (
  <div className="TextArea">
  <label htmlFor={id}>{label}</label>
  <textarea
  id={id}
  value={value}
  required={isRequired}
  className={classNames({ editable })}
  onChange={(event) => {
  	updateValue(event.target.value);
  }}
			/>
		</div>
	);
}
