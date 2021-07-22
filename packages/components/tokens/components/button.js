const elements = require('@compassion-gds/elements');

const FUNCTIONAL_COLOR = {
  PRIMARY: '#0A4FBB',
  SECONDARY: '#F3F6FB',
  DISABLED: '#717E98',
};

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
      background: { value: `${FUNCTIONAL_COLOR.SECONDARY}` },
      boxShadow: { value: `${elements.depth.plus2}` },
    },

    active: {
      background: { value: `${FUNCTIONAL_COLOR.SECONDARY}` },
      boxShadow: { value: `${elements.depth.plus1}` },
    },

    disabled: {
      cursor: { value: `default` },
      color: { value: `${FUNCTIONAL_COLOR.DISABLED}` },
      borderColor: { value: `${FUNCTIONAL_COLOR.DISABLED}` },
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
      background: { value: `${FUNCTIONAL_COLOR.PRIMARY}` },
    },

    active: {
      background: { value: `${FUNCTIONAL_COLOR.PRIMARY}` },
    },

    disabled: {
      color: { value: `${elements.color.white}` },
      background: { value: `${FUNCTIONAL_COLOR.DISABLED}` },
      borderColor: { value: `${FUNCTIONAL_COLOR.DISABLED}` },
    },
  },
};
