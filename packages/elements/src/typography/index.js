const ms = require('modularscale-js');

/**
 * Returns a rem-based font size along a fixed modular type scale.
 *
 * @param {Number} [step=0] _Must be an integer._
 *    The number of steps up or down the modular type scale.
 *    Defaults to the base font size (1rem).
 */
export const fontSize = (step = 0, scale = 'base') => {
  let ratio = 1.33;

  if (scale === 'plus1') {
    ratio = 1.414;
  } else if (scale === 'minus1') {
    ratio = 1.25;
  }

  const baseFontSize = scale === 'plus1' ? 18 : 16;

  const rems = ms(step, { base: [baseFontSize], ratio }) / baseFontSize;
  const remString = Number.parseFloat(rems.toFixed(2));
  return `${remString}rem`;
};

/**
 * Preset steps within the modular type scale, where `base` is 1rem.
 */
export const fontSizes = {
  minus2: fontSize(-2),
  minus1: fontSize(-1),
  base: fontSize(0),
  plus1: fontSize(1),
  plus2: fontSize(2),
  plus3: fontSize(3),
  plus4: fontSize(4),
  plus5: fontSize(5),
  plus6: fontSize(6),
  plus7: fontSize(7),
  plus8: fontSize(8),
  plus9: fontSize(9),
  plus10: fontSize(10),
  plus11: fontSize(11),
  plus12: fontSize(12),
  plus13: fontSize(13),
  plus14: fontSize(14),
  plus15: fontSize(15),
  plus16: fontSize(16),
};

/**
 * Default sans serif and serif font stacks.
 */
export const fonts = {
  heading:
    "'Compassion Sans', '-apple-system', BlinkMacSystemFont, 'avenir next', avenir, 'segoe ui', 'helvetica neue', helvetica, Ubuntu, roboto, noto, arial, 'sans-serif'",
  body:
    "'-apple-system', BlinkMacSystemFont, 'avenir next', avenir, 'segoe ui', 'helvetica neue', helvetica, Ubuntu, roboto, noto, arial, 'sans-serif'",
  monospace:
    "'Compassion Mono', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
};
