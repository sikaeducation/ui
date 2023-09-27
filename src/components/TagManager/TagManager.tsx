import "./TagManager.scss";
import Tag from "../../elements/Tag";
import { FormEvent, FormEventHandler, useState } from "react";
import Button from "../../elements/Button";
//import Icon from "../../elements/Button";
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
			<ul className="tag-list">
				{tags.map((tag) => (
					<li onClick={handleTagRemoval(tag)}>
						<Tag key={tag}>{tag}</Tag>
					</li>
				))}
				<li>
					<form onSubmit={handleTagSubmission}>
						<input
							id={id}
							value={newTag}
							onChange={
								(event: FormEvent<HTMLInputElement>) => {
									updateNewTag(`
										${event.currentTarget.value}
									`);
								}
							}
						/>
						<Button
							size="tiny"
							type="primary"
							submit={true}
						>
							+
							{/* <Icon type="check"> */}
						</Button>
					</form>
				</li>
			</ul>
		</div>
	);
}
