const elements = require('@compassion-gds/elements');

module.exports = {
  base: {
    height: { value: `${elements.size.plus11}` },
    color: { value: `${elements.color.black}` },
    cursor: { value: `pointer` },
    background: { value: `${elements.color.grayPlus4}` },
    outline: { value: `2px dashed ${elements.color.grayPlus2}` },
    easing: { value: `${elements.motion.easing('standard', 'expressive')}` },
  },
};