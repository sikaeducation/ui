module.exports = {
  extends: [
    "@sikaeducation",
    "@sikaeducation/eslint-config/src/configs/storybook",
    "@sikaeducation/eslint-config/src/configs/jest-ts",
    "@sikaeducation/eslint-config/src/configs/playwright-test",
  ],
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "jsx-a11y/no-autofocus": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
      },
    },
  ],
};
