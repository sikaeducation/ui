import type { Meta, StoryObj } from "@storybook/react";

import Logo from ".";

const meta: Meta<typeof Logo> = {
  component: Logo,
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Small: Story = {
  args: {
    size: "small",
  },
};
export const Medium: Story = {
  args: {
    size: "medium",
  },
};
export const Large: Story = {
  args: {
    size: "large",
  },
};
