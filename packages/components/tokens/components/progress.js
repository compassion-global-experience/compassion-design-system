const elements = require('@compassion-gds/elements');
const Color = require('color');

module.exports = {
  base: {
    border: { value: `1px solid ${elements.color.grayPlus4}` },
    borderRadius: { value: `1rem` },
    boxShadow: {
      value: `0 1px 2px ${Color(elements.color.gray).alpha(0.3)} inset`,
    },
    height: { value: `1.25rem` },
  },
  small: { height: { value: `0.75rem` } },
  large: { height: { value: `2rem` } },
  range: {
    borderRadius: { value: `1rem` },
    background: { value: `${elements.color.primary.main}` },
  },
};
