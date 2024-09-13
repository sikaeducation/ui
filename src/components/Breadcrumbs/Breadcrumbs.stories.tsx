import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/test";
import { expect } from "@storybook/test";
import { withRouter } from "storybook-addon-remix-react-router";

import Breadcrumbs from ".";

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  decorators: [withRouter],
};
export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const NoLinks: Story = {
  args: {
    links: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const elements = canvas.queryByRole("listitem");

    await expect(elements).not.toBeInTheDocument();
  },
};

export const OneLink: Story = {
  args: {
    links: [
      {
        path: "/some-path",
        label: "Some Label",
        slug: "some-slug",
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const elements = canvas.queryByRole("listitem");

    await expect(elements).not.toBeInTheDocument();
  },
};

export const TwoLinks: Story = {
  args: {
    links: [
      {
        path: "/some-path",
        label: "Some Label",
        slug: "some-slug",
      },
      {
        path: "/some-other-path",
        label: "Some Other Label",
        slug: "some-other-slug",
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const elements = await canvas.findAllByRole("listitem");

    expect(elements).toHaveLength(2);
  },
};

export const MultipleLinks: Story = {
  args: {
    links: [
      {
        path: "/some-path",
        label: "Some Label",
        slug: "some-slug",
      },
      {
        path: "/some-other-path",
        label: "Some Other Label",
        slug: "some-other-slug",
      },
      {
        path: "/yet-another-path",
        label: "Yet Another Label",
        slug: "yet-another-slug",
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const elements = await canvas.findAllByRole("listitem");

    expect(elements).toHaveLength(3);
  },
};
