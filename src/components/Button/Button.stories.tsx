import type { Meta, StoryObj } from "@storybook/react";
import { jest, expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";

import Button from ".";

const meta: Meta<typeof Button> = {
	component: Button,
}
export default meta

type Story = StoryObj<typeof Button>

export const Action: Story = {
	args: {
		type: "primary",
		children: "Do it!",
		action: jest.fn(),
	},
	play: async ({ args, canvasElement }) => {
		const canvas = within(canvasElement);
		expect(args.action).not.toHaveBeenCalled();

		const button = await canvas.findByRole("button");
		userEvent.click(button);

		expect(args.action).toHaveBeenCalled();
	},
}

export const PrimarySmall: Story = {
	storyName: "Primary - Small",
	args: {
		type: "primary",
		children: "Do it!",
		action: jest.fn(),
	},
}

export const PrimarySmallFailure: Story = {
	storyName: "Primary - Failure - Small",
	args: {
		type: "primary",
		children: "Do it!",
		actionType: "failure",
	}
}

export const PrimaryLarge: Story = {
	storyName: "Primary - Large",
	args: {
		type: "primary",
		size: "large",
		children: "Do it!",
	}
}

export const PrimaryLargeFailure: Story = {
	storyName: "Primary - Failure - Large",
	args: {
		type: "primary",
		size: "large",
		children: "Do it!",
		actionType: "failure",
	}
}
export const Secondary: Story = {
	storyName: "Secondary",
	args: {
		type: "secondary",
		children: "Maybe do it?",
	}
}
export const Ghost: Story = {
	storyName: "Ghost",
	args: {
		type: "ghost",
		children: "Could do it",
	}
}
