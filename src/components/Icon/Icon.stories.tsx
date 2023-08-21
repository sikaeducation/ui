import type { StoryObj, Meta } from "@storybook/react";

import Icon from ".";

const meta: Meta<typeof Icon> = { component: Icon }
export default meta

type Story = StoryObj<typeof Icon>

export const Checkmark: Story = {
	args: {
		type: "checkmark",
	},
}
export const Article: Story = {
	args: {
		type: "article",
	},
}
export const Close: Story = {
	args: {
		type: "close",
	},
}
export const Accepted: Story = {
	args: {
		type: "accepted",
	},
}
export const Pending: Story = {
	args: {
		type: "pending",
	},
}
export const Rejected: Story = {
	args: {
		type: "rejected",
	},
}
export const Clear: Story = {
	args: {
		type: "clear",
	},
}
export const Confident: Story = {
	args: {
		type: "confident",
	},
}
export const Unclear: Story = {
	args: {
		type: "unclear",
	},
}
export const Deferred: Story = {
	args: {
		type: "deferred",
	},
}
