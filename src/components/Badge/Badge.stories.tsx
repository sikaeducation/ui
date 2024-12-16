import type { Meta, StoryObj } from "@storybook/react";

import Badge from ".";
import Icon from "@/elements/Icon";

const meta: Meta<typeof Badge> = {
  component: Badge,
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Icon type="article" />
        <strong>Hey</strong> now ❤️
      </>
    ),
    type: "light",
  },
};

export const Primary: Story = {
  args: {
    children: (
      <>
        <Icon type="article" />
        <strong>Hey</strong> now ❤️
      </>
    ),
    type: "primary",
  },
};

export const Dark: Story = {
  args: {
    children: (
      <>
        <Icon type="article" />
        <strong>Hey</strong> now ❤️
      </>
    ),
    type: "dark",
  },
};
