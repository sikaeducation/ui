import "./TagManager.scss";
import Tag from "../../elements/Tag";
import { useState } from "react";
import Button from "../../elements/Button";
import Icon from "../../elements/Icon";
import QuickAdd from "../../components/QuickAdd";
import classNames from "classnames";

type Props = {
	className?: string;
	tags: string[];
	removeTag: (id: string) => void;
	addTag: (tagName: string) => void;
};

export default function TagManager({
	className = "",
	tags,
	removeTag,
	addTag,
}: Props) {
	const [
		isAdding,
		setIsAdding,
	] = useState(false);

	return (
		<div className={classNames({
			TagManager: true,
			[className]: true,
		})}>
			<ul className="tag-list">
				{tags.map((tag) => (
					<li key={tag}>
						<Tag close={() => removeTag(tag)}>{tag}</Tag>
					</li>
				))}
				{
					isAdding
						? <li>
							<QuickAdd
								add={(newTag: string) => addTag(newTag)}
								stop={() => setIsAdding(false)}
							/>
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
