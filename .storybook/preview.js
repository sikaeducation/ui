import "../style-library/styles/_reset.scss";

export const parameters = {
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
export const tags = ["autodocs"];
