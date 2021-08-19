const elements = require('@compassion-gds/elements');

// TODO: Switch hardcoded colors to the `color` object {https://github.com/compassion-gds/compassion-gds/issues/88}
module.exports = {
  base: {
    paddingLeft: { value: `${elements.space.plus2}` },
    paddingRight: { value: `${elements.space.plus2}` },
    fontSize: { value: `${elements.typography.fontSizes.base}` },
    minHeight: { value: `${elements.size.plus4}` },
    background: { value: `${elements.color.white}` },
    color: { value: `${elements.color.primary}` },
    borderWidth: { value: `1px` },
    borderStyle: { value: `solid` },
    borderColor: { value: `${elements.color.primary}` },
    cursor: { value: `pointer` },
    easing: { value: `${elements.motion.easing()}` },

    hover: {
      background: { value: '#F3F6FB' },
      boxShadow: { value: `${elements.depth.plus2}` },
    },

    active: {
      background: { value: '#F3F6FB' },
      boxShadow: { value: `${elements.depth.plus1}` },
    },

    disabled: {
      cursor: { value: `default` },
      color: { value: '#717E98' },
      borderColor: { value: '#717E98' },
    },

    large: {
      minHeight: { value: `${elements.size.plus5}` },
      fontSize: { value: `${elements.typography.fontSizes.plus1}` },
    },

    small: {
      paddingLeft: { value: `${elements.space.base}` },
      paddingRight: { value: `${elements.space.base}` },
      minHeight: { value: `calc(${elements.size.plus2} + ${elements.space.minus1})` },
      fontSize: { value: `${elements.typography.fontSizes.minus1}` },
    },
  },

  primary: {
    background: { value: `${elements.color.primary}` },
    color: { value: `${elements.color.white}` },

    hover: {
      background: { value: '#0A4FBB' },
    },

    active: {
      background: { value: '#0A4FBB' },
    },

    disabled: {
      color: { value: `${elements.color.white}` },
      background: { value: '#717E98' },
      borderColor: { value: '#717E98' },
    },
  },
};
