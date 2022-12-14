const StyleDictionaryPackage = require('style-dictionary');
const { transformShadow } = require('./utils');

/**
 * format for css variables
 */
StyleDictionaryPackage.registerFormat({
  name: 'css/variables',
  formatter(dictionary, config) {
    return `${this.selector} {
        ${dictionary.allProperties
          .map((prop) => `  --${prop.name}: ${prop.value};`)
          .join('\n')}
      }`;
  },
});

StyleDictionaryPackage.registerTransform({
  name: 'sizes/px',
  type: 'value',
  transitive: true,
  matcher: (token) => {
    return (
      token.type === 'fontSizes' ||
      token.type === 'spacing' ||
      token.type === 'spacing' ||
      token.type === 'borderRadius' ||
      token.type === 'borderWidth' ||
      token.type === 'sizing' ||
      token.type === 'lineHeights'
    );
  },
  transformer: (token) => {
    return `${token.value}px`;
  },
});

/**
 * Transform shadow shorthands for css variables
 */

StyleDictionaryPackage.registerTransform({
  name: 'shadow/shorthand',
  type: 'value',
  transitive: true,
  matcher: (token) => ['boxShadow'].includes(token.type),
  transformer: (token) => {
    return Array.isArray(token.original.value)
      ? token.original.value.map((single) => transformShadow(single)).join(', ')
      : transformShadow(token.original.value);
  },
});

// transform: composite typography to shorthands
StyleDictionaryPackage.registerTransform({
  name: 'typography/shorthand',
  type: 'value',
  transitive: true,
  matcher: (token) => token.type === 'typography',
  transformer: (token) => {
    const { value } = token;
    return `${`${value.fontSize}px`}/${`${value.lineHeight}px`} ${
      value.fontFamily
    } ${value.fontWeight}`;
  },
});

StyleDictionaryPackage.registerTransform({
  name: 'value/quote',
  type: 'value',
  matcher(prop) {
    return ['latinWebfont', 'webfont', 'url'].includes(prop.attributes.subitem);
  },
  transformer(prop) {
    return `"${prop.original.value}"`;
  },
});

function getStyleDictionaryConfig(theme) {
  return {
    source: [`tokens/${theme}/*.json`],
    platforms: {
      css: {
        buildPath: `src/vars/`,
        transforms: [
          'attribute/cti',
          'name/cti/kebab',
          'typography/shorthand',
          'sizes/px',
          'shadow/shorthand',
          'value/quote',
        ],
        // map the array of token file paths to style dictionary output files
        files: [
          {
            destination: `${theme}.css`,
            format: `css/variables`,
            selector: ':root',
          },
        ],
      },
    },
  };
}

console.log('Building tokens...');

['_cds-light', '_cds-dark'].map((theme) => {
  console.log('\n==============================================');
  console.log(`\nProcessing: [${theme}]`);

  const StyleDictionary = StyleDictionaryPackage.extend(
    getStyleDictionaryConfig(theme)
  );

  const platforms = ['css'];
  platforms.map((platform) => {
    return StyleDictionary.buildPlatform(platform);
  });

  console.log('\nEnd processing');
  return theme;
});

console.log('\n==============================================');
console.log('\nBuild completed!');
