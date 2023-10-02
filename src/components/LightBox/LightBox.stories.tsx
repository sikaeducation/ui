import type { Meta, StoryObj } from "@storybook/react";

import LightBox from ".";

const meta: Meta<typeof LightBox> = {
	component: LightBox,
};
export default meta;

type Story = StoryObj<typeof LightBox>;

export const Default: Story = {
	args: {
		children: "Hello, world!",
		onClose: () => console.log("Lightbox closed"),
	},
};
