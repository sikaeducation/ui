import TextInput, { FormControlTextInput } from "./FormControls/TextInput";
import TextArea, { FormControlTextArea } from "./FormControls/TextArea";
import DropDown, { FormControlDropDown } from "./FormControls/DropDown";
import Checkbox, { FormControlCheckbox } from "./FormControls/Checkbox";
import Toggle, { FormControlToggle } from "./FormControls/Toggle";
import TagManager, { FormControlTagManager } from "./FormControls/TagManager";
import MarkdownPreviewer, {
  FormControlMarkdownPreviewer,
} from "./FormControls/MarkdownPreviewer";

type FormData = boolean | string | number | string[];
export type NewFormData = Record<string, FormData>;
export type BaseFormControl = {
  id: string;
  label: string;
  className?: string;
  required?: boolean;
  width?: "third" | "half" | "full";
};

export type FormControl =
  | FormControlTextInput
  | FormControlTextArea
  | FormControlDropDown
  | FormControlCheckbox
  | FormControlTagManager
  | FormControlToggle
  | FormControlMarkdownPreviewer;

const controlTypes = {
  DropDown,
  TextInput,
  TextArea,
  Checkbox,
  Toggle,
  TagManager,
  MarkdownPreviewer,
} as const;

export function getFormControl(
  field: FormControl,
  newItem: Record<string, FormData>,
  setNewItem: (newItem: Record<string, FormData>) => void,
) {
  switch (field.controlType) {
    case "TextInput":
      return controlTypes["TextInput"](field, newItem, setNewItem);
    case "TextArea":
      return controlTypes["TextArea"](field, newItem, setNewItem);
    case "DropDown":
      return controlTypes["DropDown"](field, newItem, setNewItem);
    case "Checkbox":
      return controlTypes["Checkbox"](field, newItem, setNewItem);
    case "Toggle":
      return controlTypes["Toggle"](field, newItem, setNewItem);
    case "TagManager":
      return controlTypes["TagManager"](field, newItem, setNewItem);
    case "MarkdownPreviewer":
      return controlTypes["MarkdownPreviewer"](field, newItem, setNewItem);
  }
}
