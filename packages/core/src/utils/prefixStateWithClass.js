export default (state, prefix, ignore) => {
  if (ignore.length > 0 && state !== ignore) {
    return `${prefix}${state}`;
  } else {
    return '';
  }
};
