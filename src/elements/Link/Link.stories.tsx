import type { StoryObj, Meta } from "@storybook/react";
import { ComponentProps } from "react";

import Link from ".";

type LinkProps = ComponentProps<typeof Link>

const meta: Meta<LinkProps> = {
	component: Link,
};
export default meta;

type Story = StoryObj<LinkProps>;

export const ExternalLink: Story = {
	args: {
		href: "https://sikaeducation.com",
		children: "Link text",
	},
};

export const InternalLink: Story = {
	args: {
		href: "some-slug",
		children: "Link text",
	},
};
