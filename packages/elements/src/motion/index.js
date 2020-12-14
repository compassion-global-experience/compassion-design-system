export const easings = {
  functional: {
    standard: 'cubic-bezier(0.2, 0, 0.38, 0.9)',
    enter: 'cubic-bezier(0, 0, 0.38, 0.9)',
    exit: 'cubic-bezier(0.2, 0, 1, 0.9)',
  },
  expressive: {
    standard: 'cubic-bezier(0.4, 0.14, 0.3, 1)',
    enter: 'cubic-bezier(0, 0, 0.3, 1)',
    exit: 'cubic-bezier(0.4, 0.14, 1, 1)',
  },
};

/**
 * Returns an easing curve that matches direction and style parameters.
 * @param {string} direction
 *    `'standard'`, `'enter'`, or `'exit'`. Use `'standard'` for items that
 *    remain fully on-screen for the duration of motion.
 * @param {string} style
 *    `'functional'` or `'expressive'`. Use `'expressive'` for motion that is
 *    substantial or that carries meaning.
 * @returns {string}
 */
export const easing = (direction = 'standard', style = 'functional') => {
  return easings[style][direction];
};
