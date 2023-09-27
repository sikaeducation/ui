import type { StoryObj, Meta } from "@storybook/react";
import { useState } from "react";

import Tag from ".";

const meta: Meta<typeof Tag> = { component: Tag };
export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
	args: {
		children: "Hello, world!",
	},
};

export const Interactive: Story = {
	render: (args) => {
		const [
			active,
			setActive,
		] = useState(false);
		const engage = () => setActive(!active);

		return <Tag {...args} engage={engage} active={active} />;
	},
	args: {
		children: "Hello, world!",
	},
};

export const Closeable: Story = {
	args: {
		children: "Hello, world!",
		close: () => console.log("Closed"),
	},
};
