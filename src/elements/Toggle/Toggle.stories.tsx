import { StoryObj, Meta } from "@storybook/react";
import { expect } from "@storybook/test";
import { within, userEvent } from "@storybook/test";

import { useState } from "react";
import Toggle from ".";

const { click } = userEvent;

const meta: Meta<typeof Toggle> = {
  component: Toggle,
};
export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: (args) => {
    const [value, updateValue] = useState(args.value ?? true);
    return <Toggle {...args} value={value} updateValue={updateValue} />;
  },
  args: {
    label: "Some Input",
    id: "some-id",
    value: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const checkbox = await canvas.findByRole<HTMLInputElement>("checkbox");
    expect(checkbox.checked).toBe(true);
    await click(checkbox);
    expect(checkbox.checked).toBe(false);
    await click(checkbox);
    expect(checkbox.checked).toBe(true);
  },
};

export const RightAligned: Story = {
  render: (args) => {
    const [value, updateValue] = useState(args.value ?? true);
    return <Toggle {...args} value={value} updateValue={updateValue} />;
  },
  args: {
    label: "Some Input",
    id: "some-id",
    value: true,
    side: "right",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const checkbox = await canvas.findByRole<HTMLInputElement>("checkbox");
    expect(checkbox.checked).toBe(true);
    await click(checkbox);
    expect(checkbox.checked).toBe(false);
    await click(checkbox);
    expect(checkbox.checked).toBe(true);
  },
};
