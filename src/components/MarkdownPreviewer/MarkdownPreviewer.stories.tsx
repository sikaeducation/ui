import type {
	StoryObj, Meta,
} from "@storybook/react";
import {
	useState,
} from "react";

import MarkdownPreviewer from ".";

const meta: Meta<typeof MarkdownPreviewer> = {
	component: MarkdownPreviewer,
};
export default meta;

type Story = StoryObj<typeof MarkdownPreviewer>;

export const Default: Story = {
	render: (args) => {
		const [
			content,
			updateContent,
		] = useState(args.content);
		return <MarkdownPreviewer
			{...args}
			content={content}
			updateContent={updateContent}
		/>;
	},
	args: {
		id: "some-content",
		label: "Some Content",
		content: "# Hello, world!\n\nHow's it going?",
	},
};
