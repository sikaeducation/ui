import type { StoryObj, Meta } from "@storybook/react";

import Form from ".";
import Button from "../../elements/Button";
import TextInput from "../../elements/TextInput";
import TextArea from "../../elements/TextArea";

const meta: Meta<typeof Form> = { component: Form };
export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
	args: {
		heading: "Some Form",
		newItem: {
			someField: "Some Value",
		},
		fields: [
			{
				id: "some-field",
				label: "Some Field",
				Component: TextInput,
				type: "text",
				value: "",
			},
			{
				id: "some-other-field",
				label: "Some Other Field",
				Component: TextArea,
				type: "text",
				value: "",
			},
		],
		actions: [
			{
				id: "a",
				label: "Some Action",
				Component: Button,
				type: "secondary",
				size: "large",
				// eslint-disable-next-line no-console
				action: () => console.log("Hello, world!"),
				children: <>Some Action</>,
			},
			{
				id: "b",
				label: "Some Other Action",
				Component: Button,
				type: "primary",
				size: "large",
				// eslint-disable-next-line no-console
				action: () => console.log("Hello, world!"),
				children: <>Some Action</>,
			},
		],
	},
};

export const WithChildren: Story = {
	args: {
		...Default.args,
		children: <p>Some free text here</p>,
	},
};
