import type { StoryObj, Meta } from "@storybook/react";

import Form from ".";
import { useState } from "react";

const meta: Meta<typeof Form> = { component: Form };
export default meta;

type Story = StoryObj<typeof Form>;
type FormData = string | boolean | number;

export const Default: Story = {
	render: (args) => {
		const [
			newItem,
			setNewItem,
		] = useState<Record<string, FormData>>(args.newItem ?? {});
		return (
			<Form
				{...args}
				newItem={newItem}
				setNewItem={setNewItem}
			/>
		);
	},
	args: {
		heading: "Some Form",
		newItem: {
			someField: "Some Value",
		},
		fields: [
			{
				id: "some-field",
				label: "Some Field",
				controlType: "TextInput",
				type: "text",
			},
			{
				id: "some-other-field",
				label: "Some Other Field",
				controlType: "TextArea",
			},
			{
				id: "another-field",
				label: "Another Field",
				controlType: "DropDown",
				options: [
					{
						id: "1",
						label: "1",
					},
					{
						id: "2",
						label: "2",
					},
					{
						id: "3",
						label: "3",
					},
				],
			},
			{
				id: "yet-another-field",
				label: "Yet Another Field",
				controlType: "Checkbox",
				type: "primary",
			},
			{
				id: "still-more-fields",
				label: "Still More Fields",
				controlType: "Checkbox",
				type: "secondary",
			},
		],
		actions: [
			{
				id: "a",
				label: "Some Action",
				type: "secondary",
				size: "large",
				action: () => console.log("Secondary action fired"),
				children: <>Secondary Action</>,
			},
			{
				id: "b",
				label: "Some Other Action",
				type: "primary",
				size: "large",
				action: () => console.log("Primary action fired"),
				children: <>Primary Action</>,
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
