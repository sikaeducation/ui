import "./Markdown.scss";
import ReactMarkdown from "react-markdown";
import frontmatter from "remark-frontmatter";
import gfm from "remark-gfm";
import remarkUnwrapImages from "remark-unwrap-images";
import classNames from "classnames";
import {
	addLinkToImage,
	formatCode,
	formatHeading,
	getSeparator,
} from "./markdown-utilities";
import TextContent from "@/elements/TextContent";

type props = {
	content: string;
	className?: string;
};

export default function AppContent({ content, className = "" }: props) {
	return (
		<article
			className={classNames({
				Markdown: true,
				[className]: true,
			})}
		>
			<ReactMarkdown
				remarkPlugins={[
					gfm,
					remarkUnwrapImages,
					[
						frontmatter,
						{
							type: "yaml",
							marker: "-",
						},
					],
				]}
				components={{
					img: addLinkToImage,
					code: formatCode,
					p: TextContent,
					h1: formatHeading(1),
					h2: formatHeading(2),
					h3: formatHeading(3),
					h4: formatHeading(4),
					h5: formatHeading(4),
					h6: formatHeading(4),
					hr: getSeparator,
				}}
			>
				{content}
			</ReactMarkdown>
		</article>
	);
}
