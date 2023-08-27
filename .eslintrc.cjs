module.exports = {
	overrides: [
		require("@sikaeducation/eslint-config-ts-react/ts"),
		require("@sikaeducation/eslint-config-ts-react/react"),
		require("@sikaeducation/eslint-config-ts-react/jest"),
		require("@sikaeducation/eslint-config-ts-react/storybook"),
		require("@sikaeducation/eslint-config-ts-react/formatting"),
		{
			files: ["**/*.tsx"],
			rules: {
				"jsx-a11y/no-autofocus": "off",
				"jsx-a11y/no-noninteractive-element-interactions": "off",
			},
		},
	],
};
