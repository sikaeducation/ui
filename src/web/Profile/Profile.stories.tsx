import type { Meta, StoryObj } from "@storybook/react";
import Profile from "./Profile";

const meta: Meta<typeof Profile> = {
  component: Profile,
};
export default meta;

type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  args: {
    imageUrl: "https://via.placeholder.com/384#medium",
    altText: "Alt text",
    copy:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};

export const Testimonial: Story = {
  args: {
    imageUrl: "https://via.placeholder.com/256#medium",
    altText: "Alt text",
    copy:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."',
    style: "testimonial",
    attribution: "Kyle Coberly, 2024 graduate",
  },
};
