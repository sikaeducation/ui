import type { Meta, StoryObj } from "@storybook/react";
import Logo from ".";

const meta: Meta<typeof Logo> = {
  component: Logo,
};
export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    subject: "git",
  },
};

export const Badge: Story = {
  args: {
    ...Default.args,
    size: "badge",
  },
};

export const Regular: Story = {
  args: {
    ...Default.args,
    size: "regular",
  },
};

export const Full: Story = {
  args: {
    ...Default.args,
    size: "full",
  },
};

export const BadgeMono: Story = {
  args: {
    ...Default.args,
    size: "badge",
    style: "monochrome",
  },
};

export const RegularMono: Story = {
  args: {
    ...Default.args,
    size: "regular",
    style: "monochrome",
  },
};

export const FullMono: Story = {
  args: {
    ...Default.args,
    size: "full",
    style: "monochrome",
  },
};
