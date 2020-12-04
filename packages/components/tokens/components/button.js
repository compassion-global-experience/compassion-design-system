const elements = require('@compassion-gds/elements');
const color = require('color');

module.exports = {
  base: {
    paddingLeft: { value: `1em` },
    paddingRight: { value: `1em` },
    fontSize: { value: `${elements.typography.fontSizes.base}` },
    minHeight: { value: `${elements.size.touchable}` },
    background: { value: `${elements.color.white}` },
    color: { value: `${elements.color.primary}` },
    border: { value: `1px solid ${elements.color.primary}` },
    cursor: { value: `pointer` },

    disabled: {
      color: { value: `${elements.color.primary}` },
      cursor: { value: `default` },
      opacity: { value: `0.6` },
      filter: { value: `grayscale(0.6)` },
    },

    hover: {
      background: {
        value: `${color(elements.color.primary)
          .lighten(1.8)
          .hex()
          .toLowerCase()}`,
      },
      color: {
        value: `${color(elements.color.primary)
          .lighten(0.1)
          .hex()
          .toLowerCase()}`,
      },
      borderColor: {
        value: `${color(elements.color.primary)
          .lighten(0.1)
          .hex()
          .toLowerCase()}`,
      },
    },

    active: {
      'background-color': { value: `${elements.color.white}` },
      'border-color': {
        value: `${color(elements.color.primary)
          .darken(0.2)
          .hex()
          .toLowerCase()}`,
      },
      color: {
        value: `${color(elements.color.primary)
          .darken(0.2)
          .hex()
          .toLowerCase()}`,
      },
    },

    large: {
      minHeight: { value: `${elements.size.plus5}` },
      fontSize: { value: `${elements.typography.fontSizes.plus1}` },
    },

    small: {
      minHeight: { value: `${elements.size.plus2}` },
    },
  },

  primary: {
    background: { value: `${elements.color.primary}` },
    color: { value: `${elements.color.white}` },

    hover: {
      background: {
        value: `${color(elements.color.primary)
          .lighten(0.1)
          .hex()
          .toLowerCase()}`,
      },
    },
    active: {
      'background-color': {
        value: `${color(elements.color.primary)
          .darken(0.2)
          .hex()
          .toLowerCase()}`,
      },
    },
  },
};
