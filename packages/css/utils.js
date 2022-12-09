// style-dictionary uses CommonJS
const kebabCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-');

const kebabize = (str) => {
  return str
    .split('')
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
        : letter;
    })
    .join('');
};

// find values with px unit
function isPx(value) {
  return /[\d.]+px$/.test(value);
}

// shadow shorthands for css variables
function transformShadow(shadow) {
  const { x, y, blur, spread, color } = shadow;
  return `${`${x}px`} ${`${y}px`} ${`${blur}px`} ${`${spread}px`} ${color}`;
}

module.exports = {
  kebabCase,
  kebabize,
  isPx,
  transformShadow,
};
