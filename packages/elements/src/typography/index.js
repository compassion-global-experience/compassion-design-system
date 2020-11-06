const ms = require('modularscale-js');

/**
 * Returns a rem-based font size along a fixed modular type scale.
 *
 * @param {Number} [step=0] _Must be an integer._
 *    The number of steps up or down the modular type scale.
 *    Defaults to the base font size (1rem).
 */
export const fontSize = (step = 0) => {
  const rems = ms(step, { base: [18, 16], ratio: 1.2 }) / 18;
  const remString = Number.parseFloat(rems.toFixed(2));
  return `${remString}rem`;
};

// `fluid` function: https://css-tricks.com/snippets/css/fluid-typography/
//
// export const fluid = (
//   minViewport,
//   maxViewport,
//   minFontSize = fontSize(-1),
//   maxFontSize = fontSize(4)
// ) => {};

/**
 * Preset steps within the modular type scale, where `base` is 1rem.
 */
export const fontSizes = {
  minus4: fontSize(-4),
  minus3: fontSize(-3),
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
  sans: 'Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif',
  serif: undefined,
};
