import type { Meta, StoryObj } from "@storybook/react";

import Hero from ".";
import Header from "@/web/Header";

const meta: Meta<typeof Hero> = {
  component: Hero,
};
export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <>
        <Header />
        <Hero />
      </>
    );
  },
};
