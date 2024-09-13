import type { StoryObj, Meta } from "@storybook/react";
import { expect } from "@storybook/test";
import { within } from "@storybook/test";

import { useState } from "react";
import TextInput from ".";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  render: (args) => {
    const [value, updateValue] = useState(args.value ?? "");
    return <TextInput {...args} value={value} updateValue={updateValue} />;
  },
  args: {
    label: "Some Input",
    id: "some-id",
    value: "Some value",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const elements = canvas.queryByRole("listitem");

    await expect(elements).not.toBeInTheDocument();
  },
};
