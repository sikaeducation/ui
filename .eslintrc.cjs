module.exports = {
	overrides: [
		require("@sikaeducation/eslint-config/ts"),
		require("@sikaeducation/eslint-config/react"),
		require("@sikaeducation/eslint-config/jest"),
		require("@sikaeducation/eslint-config/storybook"),
		{
			files: [
				"**/*.tsx",
			],
			rules: {
				"jsx-a11y/no-autofocus": "off",
				"jsx-a11y/no-noninteractive-element-interactions": "off",
			},
		},
	],
};
