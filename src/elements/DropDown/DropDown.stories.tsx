import type { StoryObj, Meta } from "@storybook/react";
import { useState } from "react";

import DropDown from ".";

const meta: Meta<typeof DropDown> = {
  component: DropDown,
};
export default meta;

type Story = StoryObj<typeof DropDown>;

export const Default: Story = {
  render: (args) => {
    const [currentContent, setContent] = useState(args.value ?? "");
    return (
      <DropDown {...args} updateValue={setContent} value={currentContent} />
    );
  },
  args: {
    value: "option-2",
    id: "some-id",
    label: "Some label",
    required: true,
    options: [
      {
        id: "option-1",
        label: "Option 1",
      },
      {
        id: "option-2",
        label: "Option 2",
      },
      {
        id: "option-3",
        label: "Option 3",
      },
    ],
  },
};
