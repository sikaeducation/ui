import { ComponentStory, ComponentMeta } from "@storybook/react";

import Question from ".";

export default {
  title: "Activities/Question",
  component: Question,
} as ComponentMeta<typeof Question>;

const Template: ComponentStory<typeof Question> = (args) => (
  <Question {...args} />
);

export const OnlyRejected = Template.bind({});
OnlyRejected.args = {
  rejected: 1,
};
export const OnlyPending = Template.bind({});
OnlyPending.args = {
  pending: 2,
};
export const OnlyAccepted = Template.bind({});
OnlyAccepted.args = {
  accepted: 3,
};
export const RejectedAndPending = Template.bind({});
RejectedAndPending.args = {
  rejected: 1,
  pending: 2,
};
export const RejectedAndAccepted = Template.bind({});
RejectedAndAccepted.args = {
  rejected: 1,
  accepted: 3,
};
export const PendingAndAccepted = Template.bind({});
PendingAndAccepted.args = {
  pending: 2,
  accepted: 3,
};
export const RejectedPendingAccepted = Template.bind({});
RejectedPendingAccepted.args = {
  rejected: 1,
  pending: 2,
  accepted: 3,
};
