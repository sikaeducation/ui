import type { StoryObj, Meta } from "@storybook/react";
import { useState } from "react";

import EditableField from ".";

const meta: Meta<typeof EditableField> = {
  component: EditableField,
  argTypes: {
    value: {
      control: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof EditableField>;

export const Default: Story = {
  render: (args) => {
    const [currentContent, setContent] = useState(args.value ?? "");
    return (
      <EditableField
        {...args}
        updateValue={setContent}
        value={currentContent}
      />
    );
  },
  args: {
    value: "Some content",
    id: "some-id",
    label: "Some label",
    isRequired: true,
    className: "Heading primary-heading",
  },
};
