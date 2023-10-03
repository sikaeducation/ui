import type {
	StoryObj, Meta,
} from "@storybook/react";

import Image from ".";

const meta: Meta<typeof Image> = {
	component: Image,
};
export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
	args: {
		src: "https://via.placeholder.com/500#medium",
		alt: "Alt text",
	},
};

export const WithAttribution: Story = {
	args: {
		src: "https://via.placeholder.com/500#medium",
		alt: "Alt text",
		attribution: "Photo by Kyle Coberly",
	},
};

export const WithLightBox: Story = {
	args: {
		src: "https://via.placeholder.com/500#medium",
		alt: "Alt text",
		attribution: "Photo by Kyle Coberly",
		Lightbox: function Lightbox({
			onClose, children,
		}) {
			return (
				<div style={{
					backgroundColor: "hsla(0, 0%, 0%, 0.5)",
					height: "100%",
					width: "100%",
					position: "absolute",
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
					zIndex: 2,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}} onClick={() => onClose()}>
					<div
						style={{
							zIndex: 3,
						}}
					>
						{children}
					</div>
				</div>
			);
		},
	},
};
