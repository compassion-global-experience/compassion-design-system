const elements = require('@compassion-gds/elements');

module.exports = {
  base: {
    gridGap: { value: elements.size.base },
  },
  wide: {
    gridGap: { value: elements.size.plus2 },
  },
  condensed: {
    gridGap: { value: 0 },
  },
};
