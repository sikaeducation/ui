import { ComponentPropsWithoutRef, ReactNode } from "react";
import { CodeProps } from "react-markdown/lib/ast-to-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { dracula as style } from "react-syntax-highlighter/dist/esm/styles/prism";
import Heading from "../../elements/Heading";
import Separator from "../../elements/Separator";

export function addLinkToImage({ src, alt }: ComponentPropsWithoutRef<"img">){
	return (
		<a href={src} className="image-container" rel="noopener noreferrer">
			<img src={src} alt={alt} />
		</a>
	);
}


export function formatCode({
	inline,
	className: elementClassName,
	children,
}: CodeProps){
	const match = /language-(\w+)/.exec(elementClassName || "");
	return !inline && match
		? <SyntaxHighlighter style={style as Record<string, string>} language={match[1]} PreTag="div">
			{String(children).replace(/\n$/, "")}
		</SyntaxHighlighter>
		: <code className={elementClassName}>{children}</code>
	;
}

export function formatHeading(level: number){
	return function _formatHeading({ children }: { children: ReactNode }){
		switch (level){
			case 1:
				return <Heading level={1}>{children}</Heading>;
			case 2:
				return <Heading level={2}>{children}</Heading>;
			case 3:
				return <Heading level={3}>{children}</Heading>;
			case 4:
				return <Heading level={4}>{children}</Heading>;
			default:
				return <Heading level={1}>{children}</Heading>;
		}
	};
}

export function getSeparator(){
	return <Separator />;
}
