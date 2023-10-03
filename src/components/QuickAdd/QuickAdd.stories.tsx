import type {
	StoryObj, Meta,
} from "@storybook/react";

import QuickAdd from ".";

const meta: Meta<typeof QuickAdd> = {
	component: QuickAdd,
};
export default meta;

type Story = StoryObj<typeof QuickAdd>;

export const Default: Story = {
	args: {
		add: (newItem: string) => {
			console.log(`Adding ${newItem}`);
		},
		stop: () => {
			console.log(`Stopping`);
		},
	},
};
