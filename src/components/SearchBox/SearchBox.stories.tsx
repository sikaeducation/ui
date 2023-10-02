import type {
	StoryObj, Meta,
} from "@storybook/react";

import { useState } from "react";
import SearchBox from ".";

const meta: Meta<typeof SearchBox> = { component: SearchBox };
export default meta;

type Story = StoryObj<typeof SearchBox>;

export const Small: Story = {
	render: (args) => {
		const [
			value,
			updateValue,
		] = useState(args.searchTerm ?? "");
		return <SearchBox
			{...args}
			searchTerm={value}
			updateSearchTerm={updateValue}
		/>;
	},
	args: {
		id: "some-id",
		searchTerm: "Some value",
		size: "small",
	},
};
export const Medium: Story = {
	render: (args) => {
		const [
			value,
			updateValue,
		] = useState(args.searchTerm ?? "");
		return <SearchBox
			{...args}
			searchTerm={value}
			updateSearchTerm={updateValue}
		/>;
	},
	args: {
		id: "some-id",
		searchTerm: "Some value",
		size: "medium",
	},
};
export const Large: Story = {
	render: (args) => {
		const [
			value,
			updateValue,
		] = useState(args.searchTerm ?? "");
		return <SearchBox
			{...args}
			searchTerm={value}
			updateSearchTerm={updateValue}
		/>;
	},
	args: {
		id: "some-id",
		searchTerm: "Some value",
		size: "large",
	},
};
