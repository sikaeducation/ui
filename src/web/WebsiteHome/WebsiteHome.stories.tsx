import type { Meta, StoryObj } from "@storybook/react";

import WebsiteHome from ".";

const meta: Meta<typeof WebsiteHome> = {
  component: WebsiteHome,
};
export default meta;

type Story = StoryObj<typeof WebsiteHome>;

export const Default: Story = {
  args: {},
};
