const SPACING_BASE = 8;

/**
 * Converts pixels to rem.
 *
 * @param {Number} [px=0]
 */
const pxToRem = px => px / 16;

/**
 * Returns a rem-based spacing.
 *
 * @param {Number} [step=0] _Must be an integer._
 *    The number of steps up or down by 1.
 *    Defaults to the base spacing - 8px (0.5rem).
 */
const spacing = (step) => {
  if (!step) return `${pxToRem(SPACING_BASE)}rem`;

  if (step < 0) return `${pxToRem(SPACING_BASE / (step * -2))}rem`;

  return `${pxToRem(step * SPACING_BASE)}rem`;
};

/**
 * Preset steps where `base` is 8px (0.5rem).
 */
export default {
  minus2: spacing(-2),
  minus1: spacing(-1),
  base: spacing(0),
  plus1: spacing(1),
  plus2: spacing(2),
  plus3: spacing(3),
  plus4: spacing(4),
  plus5: spacing(5),
  plus6: spacing(6),
  plus7: spacing(7),
};
