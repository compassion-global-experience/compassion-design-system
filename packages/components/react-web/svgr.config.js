/* eslint-disable global-require */
module.exports = {
  template: require('./src/Icon/IconTemplate'),
  indexTemplate: require('./src/Icon/IndexTemplate'),
  icon: true,
  prettier: true,
  ignoreExisting: true,
  svgo: true,
  outDir: './src/Icon/icons',
  ext: 'jsx',
  svgProps: {
    viewBox: '0 0 32 32',
    fill: '{props.fill}',
    width: '{props.width}',
    height: '{props.height}',
    className: 'gds-icon',
    css: '{iconStyles}',
  },
};
