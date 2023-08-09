import { ComponentStory, ComponentMeta } from "@storybook/react";

import Icon from ".";

export default {
  title: "UI/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Checkmark = Template.bind({});
Checkmark.args = {
  type: "checkmark",
};

export const Article = Template.bind({});
Article.args = {
  type: "article",
};

export const Close = Template.bind({});
Close.args = {
  type: "close",
};

export const Accepted = Template.bind({});
Accepted.args = {
  type: "accepted",
};

export const Pending = Template.bind({});
Pending.args = {
  type: "pending",
};

export const Rejected = Template.bind({});
Rejected.args = {
  type: "rejected",
};

export const Clear = Template.bind({});
Clear.args = {
  type: "clear",
};

export const Confident = Template.bind({});
Confident.args = {
  type: "confident",
};

export const Unclear = Template.bind({});
Unclear.args = {
  type: "unclear",
};

export const Deferred = Template.bind({});
Deferred.args = {
  type: "deferred",
};
