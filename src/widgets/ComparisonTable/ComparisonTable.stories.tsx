import type { Meta, StoryObj } from "@storybook/react";

import ComparisonTable from ".";

const meta: Meta<typeof ComparisonTable> = {
  component: ComparisonTable,
};
export default meta;

type Story = StoryObj<typeof ComparisonTable>;

export const Empty: Story = {
  args: {
    headings: [],
    rows: [],
  },
};

export const NoData: Story = {
  args: {
    headings: ["Thing 1", "Thing 2", "Thing 3"],
    rows: [],
  },
};

export const OneRow: Story = {
  args: {
    headings: ["Thing 1", "Thing 2", "Thing 3"],
    rows: [{
      label: "Org 1",
      values: ["Score 1", "Score 2", "Score 3"],
    }],
  },
};

export const MultipleRows: Story = {
  args: {
    headings: [
      "Thing 1",
      "Thing 2",
      "Thing 3",
      "Thing 4",
      "Thing 5",
      "Thing 6",
    ],
    rows: [{
      label: "Org 1",
      values: [
        true,
        false,
        "Score 3",
        "Score 4",
        "Score 5",
        "Score 6",
      ],
    }, {
      label: "Org 2",
      values: [
        "Score 1",
        "Score 2",
        "Score 3",
        "Score 4",
        "Score 5",
        "Score 6",
      ],
    }, {
      label: "Org 3",
      values: [
        "Score 1",
        "Score 2",
        "Score 3",
        "Score 4",
        "Score 5",
        "Score 6",
      ],
    }, {
      label: "Org 4",
      values: [
        "Score 1",
        "Score 2",
        "Score 3",
        "Score 4",
        "Score 5",
        "Score 6",
      ],
    }, {
      label: "Org 5",
      values: [
        "Score 1",
        "Score 2",
        "Score 3",
        "Score 4",
        "Score 5",
        "Score 6",
      ],
    }, {
      label: "Org 6",
      values: [
        "Score 1",
        "Score 2",
        "Score 3",
        "Score 4",
        "Score 5",
        "Score 6",
      ],
    }],
  },
};
