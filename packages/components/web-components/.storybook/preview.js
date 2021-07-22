import '!style-loader!css-loader!../../../reset.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: { grid: { cellSize: 16, opacity: 0.25 } },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
