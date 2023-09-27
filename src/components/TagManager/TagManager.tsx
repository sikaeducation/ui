import "./TagManager.scss";
import Tag from "../../elements/Tag";
import TextInput from "../../elements/TextInput";
import { FormEventHandler, useState } from "react";
import Button from "../../elements/Button";
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

	const handleTagSubmission: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		event.stopPropagation();

		addTag(newTag);
		updateNewTag("");
	};
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const handleTagRemoval = (tag: string) => (_event: unknown) => {
		removeTag(tag);
	};
	return (
		<div className={classNames({
			TagManager: true,
			[className]: true,
		})}>
			<ul>
				{tags.map((tag) => (
					<span onClick={handleTagRemoval(tag)}>
						<Tag key={tag}>{tag}</Tag>
					</span>
				))}
			</ul>
			<form onSubmit={handleTagSubmission}>
				<TextInput
					id={id}
					label="New"
					value={newTag}
					updateValue={updateNewTag}
				/>
				<Button type="secondary">Add</Button>
			</form>
		</div>
	);
}
