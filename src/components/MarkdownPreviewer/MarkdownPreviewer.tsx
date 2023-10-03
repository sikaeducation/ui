import "./MarkdownPreviewer.scss";
import Markdown from "../Markdown";
import TextArea from "../../elements/TextArea";
import Button from "../../elements/Button";
import Icon from "../../elements/Icon";
import {
	useState,
} from "react";

type Props = {
	id: string;
	label: string;
	content: string;
	updateContent: (content: string) => void;
};

export default function MarkdownPreviewer({
	id,
	label,
	content,
	updateContent,
}: Props) {
	const [
		isPreviewing,
		setIsPreviewing,
	] = useState(false);
	return (
		<div className="MarkdownPreviewer">
			<TextArea
				id={id}
				updateValue={updateContent}
				label={label}
				value={content}
			/>
			<div className="preview-actions">
				<p className="preview-subheading">{isPreviewing
					? "Preview:"
					: <>&nbsp;</>}</p>
				{
					isPreviewing
						? <Button type="ghost" action={() => setIsPreviewing(false)}><Icon type="eye-slash" /></Button>
						: <Button type="ghost" action={() => setIsPreviewing(true)}><Icon type="eye" /></Button>
				}
			</div>
			{isPreviewing && <Markdown
				content={content}
			/>}
		</div>
	);
}
