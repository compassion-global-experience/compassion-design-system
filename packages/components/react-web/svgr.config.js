/* eslint-disable global-require */
module.exports = {
  template: require('./src/Icon/IconTemplate'),
  indexTemplate: require('./src/Icon/IndexTemplate'),
  prettier: true,
  ignoreExisting: false,
  svgo: false,
  outDir: './src/Icon/icons',
  ext: 'jsx',
  svgProps: {
    width: '1em',
    height: '1em',
    viewBox: '0 0 32 32',
    fill: '{props.fill}',
    className: 'gds-icon',
    css: '{iconStyles}',
  },
  replaceAttrValues: { '#000': '{props.fill}' },
};
