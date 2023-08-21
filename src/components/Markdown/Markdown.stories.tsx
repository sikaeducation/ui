import type { StoryObj, Meta } from "@storybook/react";
import {
	inline,
	headers,
	lineHeight,
	lists,
	images,
	formatted,
	tables,
} from "./sample-content";

import Markdown from ".";
import cssSyntaxSample from "./css-syntax-sample";

const meta: Meta<typeof Markdown> = {
	component: Markdown,
}
export default meta

type Story = StoryObj<typeof Markdown>

export const Headers: Story = {
	args: {
		content: headers,
	},
}
export const LineHeight: Story = {
	args: {
		content: lineHeight,
	},
}
export const Inline: Story = {
	args: {
		content: inline,
	},
}
export const Lists: Story = {
	args: {
		content: lists,
	},
}
export const Images: Story = {
	args: {
		content: images,
	},
}
export const Tables: Story = {
	args: {
		content: tables,
	},
}
export const Formatted: Story = {
	args: {
		content: formatted,
	},
}
export const Article: Story = {
	args: {
		content: cssSyntaxSample,
	},
}
