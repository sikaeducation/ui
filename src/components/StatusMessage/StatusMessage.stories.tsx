import type {
	StoryObj, Meta,
} from "@storybook/react";

import StatusMessage from ".";

const meta: Meta<typeof StatusMessage> = { component: StatusMessage };
export default meta;

type Story = StoryObj<typeof StatusMessage>;

export const Default: Story = { args: { type: "network-error" }};
