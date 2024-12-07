import type { Meta, StoryObj } from "@storybook/react";

import Portrait from ".";

const meta: Meta<typeof Portrait> = {
  component: Portrait,
};
export default meta;

type Story = StoryObj<typeof Portrait>;

export const Badge: Story = {
  args: {
    src: "https://via.placeholder.com/32#medium",
    alt: "Alt text",
    style: "badge",
  },
};

export const Small: Story = {
  args: {
    src: "https://via.placeholder.com/64#medium",
    alt: "Alt text",
    style: "small",
  },
};

export const Medium: Story = {
  args: {
    src: "https://via.placeholder.com/256#medium",
    alt: "Alt text",
    style: "medium",
  },
};

export const Large: Story = {
  args: {
    src: "https://via.placeholder.com/384#medium",
    alt: "Alt text",
    style: "large",
  },
};
