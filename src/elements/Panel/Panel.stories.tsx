import type {
	Meta, StoryObj,
} from "@storybook/react";

import Panel from ".";

const meta: Meta<typeof Panel> = {
	component: Panel,
	argTypes: {
		children: {
			options: [
				"Empty",
			],
			mapping: {
				Empty: <div style={{
					height: 300,
				}}>&nbsp;</div>,
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
export const FailureFlat: Story = {
	args: {
		height: "flat",
		children: "Empty",
		background: "failure",
	},
};
export const FailureRaised: Story = {
	args: {
		height: "raised",
		children: "Empty",
		background: "failure",
	},
};
export const FailureFloating: Story = {
	args: {
		height: "floating",
		children: "Empty",
		background: "failure",
	},
};
export const WarningFlat: Story = {
	args: {
		height: "flat",
		children: "Empty",
		background: "warning",
	},
};
export const WarningRaised: Story = {
	args: {
		height: "raised",
		children: "Empty",
		background: "warning",
	},
};
export const WarningFloating: Story = {
	args: {
		height: "floating",
		children: "Empty",
		background: "warning",
	},
};
export const SuccessFlat: Story = {
	args: {
		height: "flat",
		children: "Empty",
		background: "success",
	},
};
export const SuccessRaised: Story = {
	args: {
		height: "raised",
		children: "Empty",
		background: "success",
	},
};
export const SuccessFloating: Story = {
	args: {
		height: "floating",
		children: "Empty",
		background: "success",
	},
};
export const InfoFlat: Story = {
	args: {
		height: "flat",
		children: "Empty",
		background: "info",
	},
};
export const InfoRaised: Story = {
	args: {
		height: "raised",
		children: "Empty",
		background: "info",
	},
};
export const InfoFloating: Story = {
	args: {
		height: "floating",
		children: "Empty",
		background: "info",
	},
};
export const LightFlat: Story = {
	args: {
		height: "flat",
		children: "Empty",
		background: "light",
	},
};
export const LightRaised: Story = {
	args: {
		height: "raised",
		children: "Empty",
		background: "light",
	},
};
export const LightFloating: Story = {
	args: {
		height: "floating",
		children: "Empty",
		background: "light",
	},
};
