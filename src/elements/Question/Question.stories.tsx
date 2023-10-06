import type { StoryObj, Meta } from "@storybook/react";

import Question from ".";

const meta: Meta<typeof Question> = {
  component: Question,
};
export default meta;

type Story = StoryObj<typeof Question>;

export const OnlyRejected: Story = {
  args: {
    rejected: 1,
  },
};
export const OnlyPending: Story = {
  args: {
    pending: 2,
  },
};
export const OnlyAccepted: Story = {
  args: {
    accepted: 3,
  },
};
export const RejectedAndPending: Story = {
  args: {
    rejected: 1,
    pending: 2,
  },
};
export const RejectedAndAccepted: Story = {
  args: {
    rejected: 1,
    accepted: 3,
  },
};
export const PendingAndAccepted: Story = {
  args: {
    pending: 2,
    accepted: 3,
  },
};
export const RejectedPendingAccepted: Story = {
  args: {
    rejected: 1,
    pending: 2,
    accepted: 3,
  },
};
