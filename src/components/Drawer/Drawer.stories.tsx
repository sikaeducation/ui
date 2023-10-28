import type { Meta, StoryObj } from "@storybook/react";

import Drawer from ".";
import Heading from "@/Heading";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
};
export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {
    children: (
      <article>
        <Heading level={2}>Some important thing</Heading>
        <p>Some detail about it</p>
      </article>
    ),
    close: () => {},
  },
};

export const Modal: Story = {
  args: {
    children: (
      <article>
        <Heading level={2}>Some important thing</Heading>
        <p>Some detail about it</p>
      </article>
    ),
    modal: true,
    close: () => {},
  },
};
