import remarkGfm from "remark-gfm"

export default {
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
		{
			name: "@storybook/addon-docs",
			options: {
				mdxPluginOptions: {
					mdxCompilationOptions: {
						remarkPlugins: [remarkGfm],
					}
				}
			},
		},
	],
	framework: "@storybook/react",
	core: {
		builder: "@storybook/builder-webpack5",
	},
	features: {
		interactionsDebugger: true,
	},
};
