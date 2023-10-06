import "../src/styles/_reset.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    config: {
      rules: [
        {
          id: "color-contrast",
          selector: "*:not(.Button.primary-button)",
        },
      ],
    },
  },
};
