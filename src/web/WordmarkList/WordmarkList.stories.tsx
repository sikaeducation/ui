import type { Meta, StoryObj } from "@storybook/react";
import WordmarkList from "./WordmarkList";

const meta: Meta<typeof WordmarkList> = {
  component: WordmarkList,
};
export default meta;

type Story = StoryObj<typeof WordmarkList>;

export const Default: Story = {
  args: {
    wordmarks: [
      "ford",
      "pluralsight",
      "liberty-mutual",
      "nyc-public-schools",
      "name-dot-com",
      "northwestern-mutual",
      "the-hartford",
      "canadian-grain-commission",
      "m-and-t-bank",
      "the-standard",
    ],
  },
};
