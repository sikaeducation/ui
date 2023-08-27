import { StoryObj, Meta } from "@storybook/react";
import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";

import { useState } from "react";
import Toggle from ".";

const { click } = userEvent;

const meta: Meta<typeof Toggle> = { component: Toggle };
export default meta;

type Story = StoryObj<typeof Toggle>;

export const Primary: Story = {
	render: (args) => {
		const [
			value,
			updateValue,
		] = useState(args.value ?? true);
		return <Toggle {...args} value={value} updateValue={updateValue} />;
	},
	args: {
		label: "Some Input",
		id: "some-id",
		value: true,
	},
	play: async({ canvasElement }) => {
		const canvas = within(canvasElement);

		const checkbox = await canvas.findByRole("checkbox");
		expect(checkbox).toBeChecked();
		click(checkbox);
		expect(checkbox).not.toBeChecked();
		click(checkbox);
		expect(checkbox).toBeChecked();
	},
};
