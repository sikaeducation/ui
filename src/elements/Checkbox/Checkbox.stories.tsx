import type {
	Meta, StoryObj,
} from "@storybook/react";
import {
	expect,
} from "@storybook/jest";
import {
	within, userEvent,
} from "@storybook/testing-library";

import {
	useState,
} from "react";
import Checkbox from ".";

const meta: Meta<typeof Checkbox> = {
	component: Checkbox,
};
export default meta;

const {
	click,
} = userEvent;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
	args: {
		label: "Some Input",
		id: "some-id",
		value: true,
	},
	render: (args) => {
		const [
			value,
			updateValue,
		] = useState(args.value ?? true);
		return <Checkbox {...args} value={value} updateValue={updateValue} />;
	},
	play: async({
		canvasElement,
	}) => {
		const canvas = within(canvasElement);

		const checkbox = await canvas.findByRole<HTMLInputElement>("checkbox");
		expect(checkbox.checked)
			.toBe(true);
		await click(checkbox);
		expect(checkbox.checked)
			.toBe(false);
		await click(checkbox);
		expect(checkbox.checked)
			.toBe(true);
	},
};

export const Secondary: Story = {
	...Primary,
	args: {
		...Primary.args,
		type: "secondary",
	},
};
