import type { Meta, StoryObj } from "@storybook/react";

import SikaLogo from ".";

const meta: Meta<typeof SikaLogo> = {
  component: SikaLogo,
};

export default meta;

type Story = StoryObj<typeof SikaLogo>;

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
