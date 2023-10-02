import type {
	Meta, StoryObj,
} from "@storybook/react";

import Circle from ".";

const meta: Meta<typeof Circle> = { component: Circle };
export default meta;

type Story = StoryObj<typeof Circle>;

export const Default: Story = { decorators: [
	(Story) => <svg width="100" height="100" viewBox="-5 -5 10 10">
			<defs><Story /></defs>
			<use
				width={5}
				height={5}
				href="#circle"
				fill="#999"
				x={0}
				y={0}
			/>
		</svg>,
]};
