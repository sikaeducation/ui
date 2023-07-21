import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  inline,
  headers,
  lineHeight,
  lists,
  images,
  formatted,
  tables,
} from "./sample-content";

import Markdown from ".";
import cssSyntaxSample from "./css-syntax-sample";

export default {
  title: "UI/Markdown",
  component: Markdown,
} as ComponentMeta<typeof Markdown>;

const Template: ComponentStory<typeof Markdown> = (args) => (
  <Markdown {...args} />
);

export const Headers = Template.bind({});
Headers.args = {
  content: headers,
};

export const LineHeight = Template.bind({});
LineHeight.args = {
  content: lineHeight,
};

export const Inline = Template.bind({});
Inline.args = {
  content: inline,
};

export const Lists = Template.bind({});
Lists.args = {
  content: lists,
};

export const Images = Template.bind({});
Images.args = {
  content: images,
};

export const Tables = Template.bind({});
Tables.args = {
  content: tables,
};

export const Formatted = Template.bind({});
Formatted.args = {
  content: formatted,
};

export const Article = Template.bind({});
Article.args = {
  content: cssSyntaxSample,
};
