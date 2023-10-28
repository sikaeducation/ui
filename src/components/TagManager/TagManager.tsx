import { useState } from "react";
import "./TagManager.scss";
import Tag from "@/components/Tag";
import Button from "@/elements/Button";
import Icon from "@/elements/Icon";
import QuickAdd from "@/components/QuickAdd";
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
	const [isAdding, setIsAdding] = useState(false);

	return (
		<div
			className={classNames({
				TagManager: true,
				[className]: true,
			})}
		>
			<ul className="tag-list">
				{tags.map((tag) => (
					<li key={tag}>
						<Tag close={() => removeTag(tag)}>{tag}</Tag>
					</li>
				))}
				{isAdding ? (
					<li>
						<QuickAdd
							id={id}
							add={(newTag: string) => addTag(newTag)}
							stop={() => setIsAdding(false)}
						/>
					</li>
				) : (
					<Button size="tiny" type="secondary" action={() => setIsAdding(true)}>
						<Icon type="plus" />
					</Button>
				)}
			</ul>
		</div>
	);
}
