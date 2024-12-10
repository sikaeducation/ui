import type { Meta, StoryObj } from "@storybook/react";

import PriceCard from ".";

const meta: Meta<typeof PriceCard> = {
  component: PriceCard,
};
export default meta;

type Story = StoryObj<typeof PriceCard>;

export const Default: Story = {
  args: {},
};
