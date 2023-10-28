import type { ComponentPropsWithoutRef } from "react";
import TagManager from "@/TagManager";
import { BaseFormControl, NewFormData } from "../form-controls";

export type FormControlTagManager = BaseFormControl &
  Omit<
    ComponentPropsWithoutRef<typeof TagManager>,
    "tags" | "removeTag" | "addTag"
  > & {
    controlType: "TagManager";
  };

type GetTagManager = (
  field: FormControlTagManager,
  newItem: NewFormData,
  setNewItem: (newItem: NewFormData) => void,
) => ReturnType<typeof TagManager>;

const getTagManager: GetTagManager = (field, newItem, setNewItem) => {
  const { id } = field;

  let tags: string[];
  if (isStringArray(newItem[id])) {
    tags = newItem[id] as string[];
  } else return <></>;

  return (
    <TagManager
      key={id}
      id={id}
      tags={tags}
      addTag={(tag: string) => {
        setNewItem({
          ...newItem,
          [id]: [...tags, "hi", tag],
        });
      }}
      removeTag={(tagToRemove: string) => {
        setNewItem({
          ...newItem,
          [id]: tags.filter((tag) => tag !== tagToRemove),
        });
      }}
    />
  );
};

function isStringArray(values: unknown): values is string[] {
  if (!Array.isArray(values)) return false;

  return values.every((value) => typeof value === "string");
}

export default getTagManager;
