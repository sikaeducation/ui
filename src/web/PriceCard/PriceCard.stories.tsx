import type { Meta, StoryObj } from "@storybook/react";

import PriceCard from ".";

const meta: Meta<typeof PriceCard> = {
  component: PriceCard,
};
export default meta;

type Story = StoryObj<typeof PriceCard>;

export const Default: Story = {
  args: {
    heading: "Some Heading",
    subheading:
      "Et dolore magna aliqua. Ut enim ad! Lorem ipsum dolor, sit amet.",
    body: `
Lorem ipsum dolor **sit amet**, consectetur adipiscing elit, sed do _eiusmod_ tempor incididunt ut labore

Et dolore magna aliqua. Ut enim ad minim veniam, **quis nostrud exercitation** ullamco laboris nisi ut aliquip

Ex ea commodo consequat. Duis aute **irure dolor in reprehenderit.**

_In voluptate velit esse cillum dolore eu fugiat nulla pariatur_. Excepteur sint occaecat cupidatat **non proident**, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `,
    differentiator: "All the things",
    price: {
      sale: "$99",
      full: "$199",
      unit: "per lesson",
    },
    button: {
      action: () => { },
      text: "Take Action",
    },
  },
};

export const NoSale: Story = {
  args: {
    ...Default.args,
    price: {
      sale: "$99",
      unit: "per lesson",
    },
  },
};
