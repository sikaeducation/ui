module.exports = {
  extends: ["@sikaeducation"],
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
