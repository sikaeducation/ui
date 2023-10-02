import type {
	StoryObj, Meta,
} from "@storybook/react";

import DataTable from ".";

const meta: Meta<typeof DataTable> = { component: DataTable };
export default meta;

type Story = StoryObj<typeof DataTable>;

export const Empty: Story = { args: {
	fields: [],
	tableData: [],
}};

export const NoData: Story = { args: {
	fields: [
		{
			header: "Header 1",
			proportion: "30%",
			key: "header_1",
		},
		{
			header: "Header 2",
			proportion: "40%",
			key: "header_2",
		},
		{
			header: "Header 3",
			proportion: "30%",
			key: "header_3",
		},
	],
	tableData: [],
}};

export const OneRow: Story = { args: {
	fields: [
		{
			header: "Header 1",
			proportion: "30%",
			key: "header_1",
		},
		{
			header: "Header 2",
			proportion: "40%",
			key: "header_2",
		},
		{
			header: "Header 3",
			proportion: "30%",
			key: "header_3",
			// eslint-disable-next-line no-console
			action: (id) => console.log("I got clicked", id),
		},
	],
	tableData: [
		{
			id: "1",
			header_1: "Data one",
			header_2: "Data two",
			header_3: "Data three",
		},
	],
}};

export const MultipleRows: Story = { args: {
	fields: [
		{
			header: "Header 1",
			proportion: "10%",
			key: "header_1",
		},
		{
			header: "Header 2",
			proportion: "80%",
			key: "header_2",
		},
		{
			header: "Header 3",
			proportion: "10%",
			key: "header_3",
		},
	],
	tableData: [
		{
			id: "1",
			header_1: "Data one",
			header_2: "Data two",
			header_3: "Data three",
		},
		{
			id: "2",
			header_1: "Data one",
			header_2: "Data two",
			header_3: "Data three",
		},
		{
			id: "3",
			header_1: "Data one",
			header_2: "Data two",
			header_3: "Data three",
		},
	],
}};

export const LongField: Story = { args: {
	fields: [
		{
			header: "Header 1",
			proportion: "auto",
			key: "header_1",
		},
		{
			header: "Header 2",
			proportion: "1fr",
			key: "header_2",
		},
		{
			header: "Header 3",
			proportion: "20%",
			key: "header_3",
		},
	],
	tableData: [
		{
			id: "1",
			header_1: "Data one",
			header_2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
			header_3: "Data three",
		},
	],
}};

export const MobileFields: Story = {
	args: {
		fields: [
			{
				header: "Header 1",
				proportion: { large: "30%" },
				key: "header_1",
			},
			{
				header: "Header 2",
				proportion: {
					large: "40%",
					small: "100%",
				},
				key: "header_2",
			},
			{
				header: "Header 3",
				proportion: { large: "30%" },
				key: "header_3",
			},
		],
		tableData: [
			{
				id: "1",
				header_1: "Data one",
				header_2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
				header_3: "Data three",
			},
		],
	},
	parameters: { viewport: { defaultViewport: "mobile1" }},
};
