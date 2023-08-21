import type { Meta, StoryObj } from "@storybook/react"
import { expect } from "@storybook/jest";
import { within, userEvent } from "@storybook/testing-library";

import { useState } from "react";
import Checkbox from ".";

const meta: Meta<typeof Checkbox> = { component: Checkbox }
export default meta

const { click } = userEvent;

type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {
	render: (args) => {
		const [value, updateValue] = useState(args.value ?? true);
		return <Checkbox {...args} value={value} updateValue={updateValue} />;
	},
	args: {
		label: "Some Input",
		id: "some-id",
		value: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const checkbox = await canvas.findByRole("checkbox");
		expect(checkbox).toBeChecked();
		click(checkbox);
		expect(checkbox).not.toBeChecked();
		click(checkbox);
		expect(checkbox).toBeChecked();
	}
}


export const Secondary: Story = {
	...Primary,
	args: {
		...Primary.args,
		type: "secondary",
	}
}
