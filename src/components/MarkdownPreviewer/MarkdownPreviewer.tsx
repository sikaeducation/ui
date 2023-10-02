import "./MarkdownPreviewer.scss";
import Markdown from "../Markdown";
import TextArea from "../../elements/TextArea";
import Button from "../../elements/Button";
import Icon from "../../elements/Icon";

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
	return (
		<div className="MarkdownPreviewer">
			<TextArea
				id={id}
				updateValue={updateContent}
				label={label}
				value={content}
			/>
			<div className="preview-actions">
				<p className="preview-subheading">Preview:</p>
				<Button type="ghost"><Icon type="eye" /></Button>
			</div>
			<Markdown
				content={content}
			/>
		</div>
	);
}
