import type { Meta, StoryObj } from "@storybook/react";

import StatusBar from ".";

const meta: Meta<typeof StatusBar> = {
  component: StatusBar,
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            border: "1px solid #ccc",
            position: "relative",
            borderRadius: "4px",
            height: "100px",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};
export default meta;

type Story = StoryObj<typeof StatusBar>;

export const Working: Story = {
  args: {
    type: "working",
  },
};
export const Success: Story = {
  args: {
    type: "success",
  },
};
export const Error: Story = {
  args: {
    type: "error",
  },
};
