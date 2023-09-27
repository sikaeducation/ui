import type { StoryObj, Meta } from "@storybook/react";

import Tag from ".";

const meta: Meta<typeof Tag> = { component: Tag };
export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
	args: {
		children: "Hello, world!",
	},
};

export const Closeable: Story = {
	args: {
		children: "Hello, world!",
		close: () => console.log("Closed"),
	},
};
