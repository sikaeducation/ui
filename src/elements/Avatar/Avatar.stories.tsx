import type {
	Meta, StoryObj,
} from "@storybook/react";
import Avatar from ".";

const meta: Meta<typeof Avatar> = { component: Avatar };
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = { args: {
	imageUrl: "https://via.placeholder.com/500#medium",
	altText: "Me!",
}};
