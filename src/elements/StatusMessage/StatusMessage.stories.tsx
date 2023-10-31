import type { StoryObj, Meta } from "@storybook/react";

import StatusMessage from ".";

const meta: Meta<typeof StatusMessage> = {
  component: StatusMessage,
};
export default meta;

type Story = StoryObj<typeof StatusMessage>;

export const NoData: Story = {
  args: {
    type: "no-data",
  },
};
export const NetworkError: Story = {
  args: {
    type: "network-error",
  },
};
export const GeneralError: Story = {
  args: {
    type: "general-error",
  },
};
