// import remarkGfm from "remark-gfm"

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
        "@storybook/addon-mdx-gfm"
    ],

    framework: {
		name: "@storybook/react-webpack5",
		options: {}
	},

    features: {
		interactionsDebugger: true,
	},

    docs: {
        autodocs: true
    }
};
