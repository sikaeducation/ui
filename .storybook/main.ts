import type { StorybookConfig } from "@storybook/react-webpack5"

const config: StorybookConfig = {
	framework: "@storybook/react-webpack5",
	stories: [
		"../src/**/*.mdx",
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)"
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
		"@storybook/preset-create-react-app",
		"storybook-addon-react-router-v6",
		"@storybook/addon-a11y",
		"@storybook/addon-mdx-gfm"
	],
	docs: {
		autodocs: true
	},
};

export default config
