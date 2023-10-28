import "./QuickAdd.scss";
import { FormEvent, KeyboardEventHandler, useRef, useState } from "react";
import Button from "@/elements/Button";
import Icon from "@/elements/Icon";

type Props = {
  id: string;
  add: (newItem: string) => void;
  stop: () => void;
};

export default function QuickAdd({ id, add, stop }: Props) {
  const [newItem, setNewItem] = useState("");
  const $form = useRef(document.createElement("div"));

  const addNewItem = () => {
    if (newItem) {
      add(newItem);
      setNewItem("");
    } else {
      stop();
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Escape") {
      stop();
    }
    if (event.key === "Enter") {
      event.preventDefault(); // Stops submission in nested forms
      addNewItem();
    }
  };

  return (
    <div className="QuickAdd" ref={$form}>
      <input
        id={id}
        aria-label="New item"
        value={newItem}
        autoFocus={true}
        onChange={(event: FormEvent<HTMLInputElement>) => {
          setNewItem(`${event.currentTarget.value}`);
        }}
        onKeyDown={handleKeyDown}
      />
      <Button size="tiny" type="primary" action={addNewItem}>
        <Icon type="checkmark" />
      </Button>
      <Button size="tiny" type="primary" actionType="failure" action={stop}>
        <Icon type="close" />
      </Button>
    </div>
  );
}
