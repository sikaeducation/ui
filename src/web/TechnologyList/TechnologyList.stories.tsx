import type { Meta, StoryObj } from "@storybook/react";

import TechnologyList from ".";

const meta: Meta<typeof TechnologyList> = {
  component: TechnologyList,
};
export default meta;

type Story = StoryObj<typeof TechnologyList>;

export const Default: Story = {
  args: {},
};
