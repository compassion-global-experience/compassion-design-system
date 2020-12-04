const StyleDictionary = require('style-dictionary');

const buildPath = 'dist/';

module.exports = {
  source: ['components/index.js'],
  transform: {
    myTransform: {
      type: 'name',
      transformer: (prop) => prop.path.join('_').toUpperCase(),
    },
  },
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath,
      files: [
        {
          destination: 'gds-tokens.css',
          format: 'css/variables',
        },
      ],
    },
    scss: {
      transforms: StyleDictionary.transformGroup.scss.concat('color/rgb'),
      buildPath,
      files: [
        {
          destination: 'gds-tokens.scss',
          format: 'scss/map-deep',
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath,
      files: [{ destination: 'index.json', format: 'json/nested' }],
    },
    json: {
      transformGroup: 'js',
      buildPath,
      files: [
        {
          destination: 'gds-tokens.json',
          format: 'json',
        },
      ],
    },
  },
};
