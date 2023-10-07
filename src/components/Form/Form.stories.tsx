import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import Form from ".";
import { NewFormData } from "./form-controls";

const meta: Meta<typeof Form> = {
  component: Form,
};
export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: (args) => {
    const [newItem, setNewItem] = useState<NewFormData>(args.newItem ?? {});
    return <Form {...args} newItem={newItem} setNewItem={setNewItem} />;
  },
  args: {
    heading: "Some Form",
    newItem: {
      "text-input": "Some Value",
      "tag-manager": ["Tag One", "Tag Two", "Tag Three"],
    },
    fields: [
      {
        id: "text-input",
        label: "TextInput",
        controlType: "TextInput",
        type: "text",
      },
      {
        id: "textarea",
        label: "TextArea",
        controlType: "TextArea",
      },
      {
        id: "dropdown",
        label: "DropDown",
        controlType: "DropDown",
        options: [
          {
            id: "1",
            label: "1",
          },
          {
            id: "2",
            label: "2",
          },
          {
            id: "3",
            label: "3",
          },
        ],
      },
      {
        id: "primary-checkbox",
        label: "Primary Checkbox",
        controlType: "Checkbox",
        type: "primary",
      },
      {
        id: "secondary-checkbox",
        label: "Secondary Checkbox",
        controlType: "Checkbox",
        type: "secondary",
      },
      {
        id: "tag-manager",
        label: "TagManager",
        controlType: "TagManager",
      },
      {
        id: "toggle",
        label: "Toggle",
        controlType: "Toggle",
      },
      {
        id: "markdown-previewer",
        label: "MarkdownPreviewer",
        controlType: "MarkdownPreviewer",
      },
    ],
    actions: [
      {
        id: "a",
        label: "Some Action",
        type: "secondary",
        size: "large",
        action: () => console.log("Secondary action fired"),
      },
      {
        id: "b",
        label: "Some Other Action",
        type: "primary",
        size: "large",
        action: () => console.log("Primary action fired"),
      },
    ],
  },
};

export const WithChildren: Story = {
  args: {
    ...Default.args,
    children: <p>Some free text here</p>,
  },
};

export const OnlyMarkdownPreviewer: Story = {
  render: Default.render,
  args: {
    heading: "Some Form",
    newItem: {
      "markdown-previewer": "# Hello, world!",
    },
    fields: [
      {
        id: "markdown-previewer",
        label: "MarkdownPreviewer",
        controlType: "MarkdownPreviewer",
      },
    ],
    actions: [
      {
        id: "b",
        label: "Some Action",
        type: "primary",
        size: "large",
        action: () => console.log("Primary action fired"),
      },
    ],
  },
};

export const Stacked: Story = {
  render: Default.render,
  args: {
    heading: "Some Form",
    newItem: {},
    fields: [
      {
        id: "toggle-1",
        label: "Toggle 1",
        controlType: "Toggle",
        side: "left",
        width: "half",
      },
      {
        id: "toggle-2",
        label: "Toggle 2",
        controlType: "Toggle",
        side: "right",
        width: "half",
      },
      {
        id: "toggle-3",
        label: "Toggle 3",
        controlType: "Toggle",
        width: "third",
      },
      {
        id: "toggle-4",
        label: "Toggle 4",
        controlType: "Toggle",
        width: "third",
      },
      {
        id: "toggle-5",
        label: "Toggle 5",
        controlType: "Toggle",
        width: "third",
      },
      {
        id: "text-area",
        label: "TextArea",
        controlType: "TextArea",
        width: "full",
      },
      {
        id: "text-input-1",
        label: "TextInput 1 - Half",
        controlType: "TextInput",
        width: "half",
      },
      {
        id: "text-input-2",
        label: "TextInput 2 - Full",
        controlType: "TextInput",
        width: "full",
      },
      {
        id: "markdown-previewer",
        label: "MarkdownPreviewer - Half",
        controlType: "MarkdownPreviewer",
        width: "half",
      },
      {
        id: "checkbox",
        label: "Checkbox - Full",
        controlType: "Checkbox",
        width: "full",
      },
      {
        id: "text-input-3",
        label: "TextInput 3 - Left",
        controlType: "TextInput",
        width: "half",
      },
      {
        id: "text-input-4",
        label: "TextInput 4 - Right",
        controlType: "TextInput",
        width: "half",
      },
    ],
    actions: [
      {
        id: "b",
        label: "Some Action",
        type: "primary",
        size: "large",
        action: () => console.log("Primary action fired"),
      },
    ],
  },
};
