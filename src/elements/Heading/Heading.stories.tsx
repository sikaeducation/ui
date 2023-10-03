import type {
	StoryObj, Meta,
} from "@storybook/react";

import Heading from ".";

const meta: Meta<typeof Heading> = {
	component: Heading,
};
export default meta;

type Story = StoryObj<typeof Heading>;

export const Level1: Story = {
	args: {
		level: 1,
		children: "Primary heading",
	},
};

export const Level2: Story = {
	args: {
		level: 2,
		children: "Secondary heading",
	},
};

export const Level3: Story = {
	args: {
		level: 3,
		children: "Tertiary heading",
	},
};

export const Level4: Story = {
	args: {
		level: 4,
		children: "Quaternary heading",
	},
};
