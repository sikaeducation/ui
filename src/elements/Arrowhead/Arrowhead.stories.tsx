import type { Meta, StoryObj } from "@storybook/react";
import Arrowhead from ".";

const meta: Meta<typeof Arrowhead> = { component: Arrowhead };
export default meta;

type Story = StoryObj<typeof Arrowhead>;

export const Default: Story = {
	decorators: [
		(Story) => <svg width="100" height="100" viewBox="-5 -5 10 10">
			<defs><Story /></defs>
			<line
				x1="-3"
				y1="0"
				x2="3"
				y2="0"
				stroke="#eee"
				marker-end="url(#arrowhead)"
			/>
		</svg>,

	],
};
