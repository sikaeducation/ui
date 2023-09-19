import type { Meta, StoryObj } from "@storybook/react";

import Graph from ".";
import Circle from "../../elements/Circle";
import OutlinedCircle from "../../elements/OutlinedCircle";
import options from "./sample-options";
import data from "./sample-data";

const { groups, nodes, links } = data;

const meta: Meta<typeof Graph> = {
	component: Graph, decorators: [
		(Story) => <svg
			width="400"
			height="400"
			viewBox="-15000 -15000 30000 30000"
			style={{
				border: "1px solid red",
			}}
		>
			<defs>
				<Circle />
				<OutlinedCircle />
			</defs>
			<line stroke="#aaa" x1="0" x2="0" y1="100" y2="-100" />
			<line stroke="#aaa" x1="-100" x2="100" y1="0" y2="0" />
			<Story />
		</svg>,
	],
};
export default meta;

type Story = StoryObj<typeof Graph>;

export const Default: Story = {
	args: {
		options,
		nodes,
		links,
		groups,
		currentFilter: "all",
	},
};
