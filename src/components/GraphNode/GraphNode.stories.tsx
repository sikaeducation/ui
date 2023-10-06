import type { Meta, StoryObj } from "@storybook/react";

import GraphNode from ".";
import Circle from "../../elements/Circle";
import OutlinedCircle from "../../elements/OutlinedCircle";

const meta: Meta<typeof GraphNode> = {
  component: GraphNode,
  decorators: [
    (Story) => (
      <svg width="100" height="100" viewBox="-5 -5 10 10">
        <defs>
          <Circle />
          <OutlinedCircle />
        </defs>
        <Story />
      </svg>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof GraphNode>;

export const Default: Story = {
  args: {
    node: {
      id: "Id goes here",
      group: "default",
      critical: false,
      complete: false,
      in_progress: false,
      x: 0,
      y: 0,
    },
    links: [],
    zoomTo: () => {},
  },
};

export const Critical: Story = {
  args: {
    node: {
      id: "Id goes here",
      group: "default",
      critical: true,
      complete: false,
      in_progress: false,
      x: 0,
      y: 0,
    },
    links: [],
    zoomTo: () => {},
  },
};

export const Complete: Story = {
  args: {
    node: {
      id: "Id goes here",
      group: "default",
      critical: false,
      complete: true,
      in_progress: false,
      x: 0,
      y: 0,
    },
    links: [],
    zoomTo: () => {},
  },
};

export const CompleteCritical: Story = {
  args: {
    node: {
      id: "Id goes here",
      group: "default",
      critical: true,
      complete: true,
      in_progress: false,
      x: 0,
      y: 0,
    },
    links: [],
    zoomTo: () => {},
  },
};

export const InProgress: Story = {
  args: {
    node: {
      id: "Id goes here",
      group: "default",
      critical: false,
      complete: false,
      in_progress: true,
      x: 0,
      y: 0,
    },
    links: [],
    zoomTo: () => {},
  },
};

export const InProgressCritical: Story = {
  args: {
    node: {
      id: "Id goes here",
      group: "default",
      critical: true,
      complete: false,
      in_progress: true,
      x: 0,
      y: 0,
    },
    links: [],
    zoomTo: () => {},
  },
};

export const InProgressComplete: Story = {
  args: {
    node: {
      id: "Id goes here",
      group: "default",
      critical: true,
      complete: false,
      in_progress: true,
      x: 0,
      y: 0,
    },
    links: [],
    zoomTo: () => {},
  },
};

export const InProgressCompleteCritical: Story = {
  args: {
    node: {
      id: "Id goes here",
      group: "default",
      critical: true,
      complete: false,
      in_progress: true,
      x: 0,
      y: 0,
    },
    links: [],
    zoomTo: () => {},
  },
};
