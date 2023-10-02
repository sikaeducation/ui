import type {
	Meta, StoryObj,
} from "@storybook/react";

import OutlinedCircle from ".";

const meta: Meta<typeof OutlinedCircle> = { component: OutlinedCircle };
export default meta;

type Story = StoryObj<typeof OutlinedCircle>;

export const Default: Story = { decorators: [
	(Story) => <svg width="100" height="100" viewBox="-5 -5 10 10">
			<defs><Story /></defs>
			<use
				width={5}
				height={5}
				href="#outlined-circle"
				fill="#888"
				stroke="#999"
				x={0}
				y={0}
			/>
		</svg>,
]};
