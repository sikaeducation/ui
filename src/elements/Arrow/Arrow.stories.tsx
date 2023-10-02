import type {
	Meta, StoryObj,
} from "@storybook/react";
import Arrow from ".";

const meta: Meta<typeof Arrow> = { component: Arrow };
export default meta;

type Story = StoryObj<typeof Arrow>;

export const Default: Story = { decorators: [
	(Story) => <svg width="500" height="100" viewBox="-10 -10 20 20">
			<g>
				<Story />
				<path
					id="arrow-path-id-here"
					d="M-20,0 L40,0"
					stroke="#eee"
					stroke-width="1"
				/>
				<use
					width="4"
					height="4"
					x="-4" // Offset is half the width/height of the symbol * -1 (minus half the width of the x to make it end in the right place)
					y="-2"
					href="#arrow"
					transform={
						`rotate(0deg) translate(0, 0)`
					}
				>
					<animateMotion
						dur="2s"
						repeatCount="indefinite"
					>
						<mpath href="#arrow-path-id-here" />
					</animateMotion>
				</use>
			</g>
		</svg>,

]};
