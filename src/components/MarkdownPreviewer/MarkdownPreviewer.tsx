import "./MarkdownPreviewer.scss";
import Markdown from "../Markdown";
import TextArea from "../../elements/TextArea";

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
			<p className="preview-subheading">Preview:</p>
			<Markdown
				content={content}
			/>
		</div>
	);
}
