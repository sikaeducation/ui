import type { Meta, StoryObj } from "@storybook/react";
import Wordmark from "./Wordmark";

const meta: Meta<typeof Wordmark> = {
  component: Wordmark,
};
export default meta;

type Story = StoryObj<typeof Wordmark>;

export const Default: Story = {
  args: {
    subject: "ford",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "small",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "large",
  },
};

export const SmallMono: Story = {
  args: {
    ...Default.args,
    size: "small",
    style: "monochrome",
  },
};

export const LargeMono: Story = {
  args: {
    ...Default.args,
    size: "large",
    style: "monochrome",
  },
};
