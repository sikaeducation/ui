import type { Meta, StoryObj } from "@storybook/react";

import TextContent from ".";

const meta: Meta<typeof TextContent> = {
  component: TextContent,
  decorators: [
    (Story) => (
      <div className="text-content-wrapper">
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof TextContent>;

export const Default: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};

export const Hero: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet",
    style: "hero",
  },
};
