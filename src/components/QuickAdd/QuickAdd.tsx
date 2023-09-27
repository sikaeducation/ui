import "./QuickAdd.scss";
import { FormEvent, FormEventHandler, KeyboardEventHandler, useRef, useState } from "react";
import Button from "../../elements/Button";
import Icon from "../../elements/Icon";

type Props = {
	add: (newItem: string) => void;
	stop: () => void;
};

export default function QuickAdd({
	add,
	stop,
}: Props) {
	const [
		newItem,
		setNewItem,
	] = useState("");
	const $form = useRef(document.createElement("form"));

	const handleSubmission: FormEventHandler<HTMLFormElement> = (event) => {
		event.stopPropagation();
		event.preventDefault();
		addNewItem();
	};

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
			event.stopPropagation();
			event.preventDefault(); // Stops double submission in nested forms
			addNewItem();
		}
	};

	return (
		<form className="QuickAdd" ref={$form} onSubmit={handleSubmission}>
			<input
				aria-label="New item"
				value={newItem}
				autoFocus={true}
				onChange={
					(event: FormEvent<HTMLInputElement>) => {
						setNewItem(`${event.currentTarget.value}`);
					}
				}
				onKeyDown={handleKeyDown}
			/>
			<Button
				size="tiny"
				type="primary"
				action={addNewItem}
			>
				<Icon type="checkmark" />
			</Button>
			<Button
				size="tiny"
				type="primary"
				actionType="failure"
				action={stop}
			>
				<Icon type="close" />
			</Button>
		</form>
	);
}
