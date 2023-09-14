import type { Meta, StoryObj } from "@storybook/react";

import Panel from ".";

const meta: Meta<typeof Panel> = {
	component: Panel,
	argTypes: {
		children: {
			options: ["Empty"],
			mapping: {
				Empty: <div style={{ height: 300 }}>&nbsp;</div>,
			},
		},
	},
};
export default meta;

type Story = StoryObj<typeof Panel>;

export const Flat: Story = {
	args: {
		height: "flat",
		children: "Empty",
	},
};
export const Raised: Story = {
	args: {
		height: "raised",
		children: "Empty",
	},
};
export const Floating: Story = {
	args: {
		height: "floating",
		children: "Empty",
	},
};
export const Failure: Story = {
	args: {
		height: "floating",
		children: "Empty",
		background: "failure",
	},
};
export const Warning: Story = {
	args: {
		height: "floating",
		children: "Empty",
		background: "warning",
	},
};
export const Success: Story = {
	args: {
		height: "floating",
		children: "Empty",
		background: "success",
	},
};
export const Info: Story = {
	args: {
		height: "floating",
		children: "Empty",
		background: "info",
	},
};
