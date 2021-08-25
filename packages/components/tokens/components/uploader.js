const elements = require('@compassion-gds/elements');

module.exports = {
  base: {
    height: { value: `${elements.size.plus11}` },
    color: { value: `${elements.color.black.main}` },
    cursor: { value: `pointer` },
    background: { value: `${elements.color.gray.plus4}` },
    outline: { value: `2px dashed ${elements.color.gray.plus2}` },
    easing: { value: `${elements.motion.easing('standard', 'expressive')}` },
  },
};
