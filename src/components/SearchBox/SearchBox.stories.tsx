import type { StoryObj, Meta } from "@storybook/react";

import { useState } from "react";
import SearchBox from ".";

const meta: Meta<typeof SearchBox> = {
	component: SearchBox,
};
export default meta;

type Story = StoryObj<typeof SearchBox>;

export const Default: Story = {
	render: (args) => {
		const [
			value,
			updateValue,
		] = useState(args.value ?? "");
		return <SearchBox {...args} value={value} updateValue={updateValue} />;
	},
	args: {
		id: "some-id",
		value: "Some value",
	},
};
