import type { StoryObj, Meta } from "@storybook/react";

import Skeleton from ".";

const meta: Meta<typeof Skeleton> = { component: Skeleton };
export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {};
