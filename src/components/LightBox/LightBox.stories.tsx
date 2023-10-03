import type {
	Meta, StoryObj,
} from "@storybook/react";

import LightBox from ".";

const meta: Meta<typeof LightBox> = { component: LightBox };
export default meta;

type Story = StoryObj<typeof LightBox>;

export const Default: Story = {
	render: (args) => {
		const content = <p style={{
			backgroundColor: "white",
			padding: "24px",
			borderRadius: "4px",
		}}>Hello, world!</p>;
		const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
		return <div>
			<p>{loremIpsum.repeat(10)}</p>
			<LightBox {...args}>
				{content}
			</LightBox>
		</div>;
	},
	args: { onClose: () => console.log("Lightbox closed") },
};
