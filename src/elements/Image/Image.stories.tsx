import type { StoryObj, Meta } from "@storybook/react";

import Image from ".";

const meta: Meta<typeof Image> = { component: Image };
export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
	args: {
		src: "https://via.placeholder.com/500#medium",
		alt: "Alt text",
	},
};

export const WithAttribution: Story = {
	args: {
		src: "https://via.placeholder.com/500#medium",
		alt: "Alt text",
		attribution: "Photo by Kyle Coberly",
	},
};
