import { ComponentPropsWithoutRef } from "react";
import MarkdownPreviewer from "@/MarkdownPreviewer";
import { BaseFormControl, NewFormData } from "../form-controls";

export type FormControlMarkdownPreviewer = BaseFormControl &
  Omit<
    ComponentPropsWithoutRef<typeof MarkdownPreviewer>,
    "content" | "updateContent"
  > & {
    controlType: "MarkdownPreviewer";
  };

type GetMarkdownPreviewer = (
  field: FormControlMarkdownPreviewer,
  newItem: NewFormData,
  setNewItem: (newItem: NewFormData) => void,
) => ReturnType<typeof MarkdownPreviewer>;

const getMarkdownPreviewer: GetMarkdownPreviewer = (
  field,
  newItem,
  setNewItem,
) => {
  const { id, label } = field;
  const content = String(newItem[id] ? newItem[id] : "");
  const updateContent = (newValue: string) => {
    return setNewItem({
      ...newItem,
      [id]: newValue,
    });
  };
  return (
    <MarkdownPreviewer
      key={id}
      id={id}
      label={label}
      content={content}
      updateContent={updateContent}
    />
  );
};

export default getMarkdownPreviewer;
