import type { StorybookConfig } from "@storybook/react-vite";
import remarkGfm from "remark-gfm";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    "@storybook/addon-interactions",
    "storybook-addon-react-router-v6",
    "@storybook/addon-a11y",
    "storybook-react-context",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  docs: {
    autodocs: true,
  },
};

export default config;
