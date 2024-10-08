import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/test";
import * as test from "@storybook/test";
import { within, userEvent } from "@storybook/test";

import Button from ".";

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Action: Story = {
  args: {
    type: "primary",
    children: "Do it!",
    action: test.fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    expect(args.action).not.toHaveBeenCalled();

    const button = await canvas.findByRole("button");
    await userEvent.click(button);

    expect(args.action).toHaveBeenCalled();
  },
};

export const PrimarySmall: Story = {
  name: "Primary - Small",
  args: {
    type: "primary",
    children: "Do it!",
    action: test.fn(),
  },
};

export const PrimarySmallFailure: Story = {
  name: "Primary - Failure - Small",
  args: {
    type: "primary",
    children: "Do it!",
    actionType: "failure",
  },
};

export const PrimaryLarge: Story = {
  name: "Primary - Large",
  args: {
    type: "primary",
    size: "large",
    children: "Do it!",
  },
};

export const PrimaryLargeFailure: Story = {
  name: "Primary - Failure - Large",
  args: {
    type: "primary",
    size: "large",
    children: "Do it!",
    actionType: "failure",
  },
};
export const Secondary: Story = {
  args: {
    type: "secondary",
    children: "Maybe do it?",
  },
};
export const Ghost: Story = {
  args: {
    type: "ghost",
    children: "Could do it",
  },
};
