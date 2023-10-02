import type {
	StoryObj, Meta,
} from "@storybook/react";
import { useState } from "react";

import TextArea from ".";

const meta: Meta<typeof TextArea> = {
	component: TextArea,
	argTypes: { value: { control: { disable: true }}},
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
	render: (args) => {
		const [
			currentContent,
			setContent,
		] = useState(args.value ?? "");
		return (
			<TextArea
				{...args}
				updateValue={setContent}
				value={currentContent}
			/>
		);
	},
	args: {
		value: "Some content",
		id: "some-id",
		label: "Some label",
		required: true,
	},
};

export const Editable: Story = {
	...Default,
	args: {
		...Default.args,
		editable: true,
	},
};
