const elements = require('@compassion-gds/elements');

module.exports = {
  base: {
    stripeColor: { value: `${elements.color.gray.plus4}` },
    itemPadding: { value: `0.625rem` },
  },
  large: {
    itemPadding: { value: `2rem` },
  },
  small: {
    itemPadding: { value: 0 },
  },
};
