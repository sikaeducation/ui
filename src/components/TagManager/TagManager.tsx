import "./TagManager.scss";
import Tag from "../../elements/Tag";
import { FormEvent, FormEventHandler, KeyboardEventHandler, useRef, useState } from "react";
import Button from "../../elements/Button";
import Icon from "../../elements/Icon";
import classNames from "classnames";

type Props = {
	id: string;
	className?: string;
	tags: string[];
	removeTag: (id: string) => void;
	addTag: (tagName: string) => void;
};

export default function TagManager({
	id,
	className = "",
	tags,
	removeTag,
	addTag,
}: Props) {
	const [
		newTag,
		updateNewTag,
	] = useState("");
	const [
		isAdding,
		setIsAdding,
	] = useState(false);
	const $form = useRef(document.createElement("form"));

	const handleTagSubmission: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		event.stopPropagation();

		addTag(newTag);
		updateNewTag("");
	};
	const handleTagRemoval = (tag: string) => () => {
		removeTag(tag);
	};

	const handleEnter: KeyboardEventHandler<HTMLInputElement> = (event) => {
		if (event.key === "Enter") {
			$form.current.dispatchEvent(new Event("submit", {
				cancelable: true,
				bubbles: true,
			}));
		}
		if (event.key === "Escape") {
			setIsAdding(false);
		}
	};

	return (
		<div className={classNames({
			TagManager: true,
			[className]: true,
		})}>
			<ul className="tag-list">
				{tags.map((tag) => (
					<li key={tag} onClick={handleTagRemoval(tag)}>
						<Tag>{tag}</Tag>
					</li>
				))}
				{
					isAdding
						? <li>
							<form ref={$form} onSubmit={handleTagSubmission}>
								<input
									id={id}
									value={newTag}
									autoFocus={true}
									onChange={
										// eslint-disable-next-line max-len
										(event: FormEvent<HTMLInputElement>) => {
											// eslint-disable-next-line max-len
											updateNewTag(`${event.currentTarget.value}`);
										}
									}
									onKeyDown={handleEnter}
								/>
								<Button
									size="tiny"
									type="primary"
									submit={true}
								>
									<Icon type="checkmark" />
								</Button>
								<Button
									size="tiny"
									type="primary"
									actionType="failure"
									action={() => setIsAdding(false)}
								>
									<Icon type="close" />
								</Button>
							</form>
						</li>
						: <Button
							size="tiny"
							type="primary"
							action={() => setIsAdding(true)}
						>
							<Icon type="plus" />
						</Button>
				}
			</ul>
		</div >
	);
}
