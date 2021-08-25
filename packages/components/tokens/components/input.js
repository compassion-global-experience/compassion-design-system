const elements = require('@compassion-gds/elements');

const checkmarkSvg =
  "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' style='fill:white' viewBox='0 0 16 16'%3E%3Cpath d='M1 9.185c-.42-.342-.527-.92-.125-1.31.401-.388.922-.281 1.269.125l3.278 3.375L13.842 3c.513-.572 1-.402 1.288-.137.288.265.4.877-.13 1.308L6.133 13c-.22.251-.458.377-.71.377-.253 0-.492-.126-.717-.377L1 9.185z' fill-rule='evenodd'/%3E%3C/svg%3E";

module.exports = {
  base: {
    label: { fontSize: { value: elements.typography.fontSizes.base } },
    border: { value: `1px solid` },
    borderColor: { value: elements.color.gray },
    borderRadius: { value: 0 },
    background: { value: `#fff` },
    easing: { value: elements.motion.easing() },
    fontSize: { value: elements.typography.fontSizes.base },
    minHeight: { value: `2.5em` },
    outline: { value: `0px solid transparent` },
    padding: { value: `0.5em` },

    focus: {
      borderColor: { value: elements.color.primary.main },
      outline: { value: `1px solid ${elements.color.primary.main}` },
    },
    hover: {
      borderColor: { value: elements.color.grayPlus1 },
      background: { value: elements.color.grayPlus1 },
      backgroundImage: { value: `url("${checkmarkSvg}")` },
    },
    disabled: {
      borderColor: { value: elements.color.grayPlus4 },
      background: { value: elements.color.grayPlus4 },
      color: { value: elements.color.grayPlus1 },
    },
    error: {
      color: { value: elements.color.error.main },
      outline: { value: `1px solid ${elements.color.error.main}` },
      fontSize: { value: elements.typography.fontSizes.minus1 },
    },
  },
  radio: {
    borderRadius: { value: `50%` },
    borderWidth: { value: `0.35em` },
    disabled: {
      backgroundColor: { value: `#fff` },
    },
  },
  checkbox: {
    checked: {
      borderColor: { value: elements.color.primary.main },
      background: { value: elements.color.primary.main },
      backgroundImage: { value: `url("${checkmarkSvg}")` },
    },
    focus: {
      borderWidth: { value: `2px` },
      borderColor: { value: elements.color.primary.main },
      outline: { value: `1px dotted ${elements.color.primary.main}` },
    },
    disabled: {
      background: { value: `#fff` },
      backgroundImage: { value: `none` },

      checked: {
        borderColor: { value: elements.color.grayPlus4 },
        background: { value: elements.color.grayPlus4 },
        backgroundImage: { value: `url("${checkmarkSvg}")` },
      },
    },
  },
};
