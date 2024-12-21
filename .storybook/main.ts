import type { StorybookConfig } from "@storybook/react-vite";
import remarkGfm from "remark-gfm";
import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",

  stories: [
    "../src/**/*.mdx",
    "../src/**/*.mdx",
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
    "storybook-addon-remix-react-router",
    "@storybook/addon-a11y",
    "storybook-react-context",
    "@storybook/addon-links",
  ],

  docs: {},

  staticDirs: ["../public"],

  viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
    });
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};

export default config;
