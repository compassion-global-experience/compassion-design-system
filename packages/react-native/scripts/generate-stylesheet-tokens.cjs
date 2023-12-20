const StyleDictionary = require('style-dictionary');
const { registerTransforms } = require('@tokens-studio/sd-transforms');

const openingBrace = 'OPENING_BRACE';
const closingBrace = 'CLOSING_BRACE';

// sd-transforms, 2nd parameter for options can be added
// See docs: https://github.com/tokens-studio/sd-transforms
registerTransforms(StyleDictionary);

function transformShadow(shadow) {
  const { x, y, blur, spread, color } = shadow;
  return `${x} ${y} ${blur} ${spread} ${color}`;
}

// Returns box shadow tokens as a single string
StyleDictionary.registerTransform({
  name: 'stylesheet/tokens/shadow',
  type: 'value',
  transitive: true,
  matcher: (token) => ['boxShadow'].includes(token.type),
  transformer: (token) => {
    const shaddowValue = Array.isArray(token.original.value)
      ? token.original.value.map((single) => transformShadow(single)).join(', ')
      : transformShadow(token.original.value);
    return `"${shaddowValue}"`;
  },
});

// Returns typography tokens as an object
StyleDictionary.registerTransform({
  name: 'stylesheet/tokens/typography',
  type: 'value',
  matcher: (token) => token.type === 'typography',
  transformer: (token) => {
    const keyValueArray = Object.entries(token.value).map(([key, value]) => {
      if (!value) {
        return `${key}: ""`;
      } else return `${key}: ${isNaN(value) ? `"${value}"` : value}`;
    });

    // Get errors if curly braces are in the string, so we use a placeholder
    return `${openingBrace}${keyValueArray.join(', ')}${closingBrace}`;
  },
});

// Appends font weight to font family
StyleDictionary.registerTransform({
  name: 'stylesheet/tokens/fontWeight',
  type: 'value',
  matcher: (token) => token.type === 'typography',
  transformer: (token) => {
    if (token.value.fontWeight) {
      if (token.value.fontFamily) {
        token.value.fontFamily = `${token.value.fontFamily}-${token.value.fontWeight}`;
      }
      token.value.fontWeight = 'normal';
    }
    return token.value;
  },
});

StyleDictionary.registerTransform({
  name: 'stylesheet/tokens/other',
  type: 'value',
  matcher: (token) =>
    token.type === 'other' &&
    typeof token.value === 'string' &&
    token.value.includes('"'),
  transformer: (token) => {
    return `${token.value.replaceAll('"', `\\"`)}`;
  },
});

StyleDictionary.registerTransform({
  name: 'stylesheet/tokens/NaNValues',
  type: 'value',
  matcher: (token) =>
    token.type !== 'typography' && !['boxShadow'].includes(token.type),
  transformer: (token) => {
    return `${isNaN(token.value) ? `"${token.value}"` : token.value}`;
  },
});

// format helpers from style-dictionary
const { formattedVariables } = StyleDictionary.formatHelpers;

// Tokens as an object
StyleDictionary.registerFormat({
  name: 'stylesheetTokens',
  formatter: function ({ dictionary }) {
    const tokens = formattedVariables({
      dictionary,
      // ${indentation}${prefix}${prop.name}${separator} ${prop.value}${suffix}
      formatting: { separator: ': ', suffix: ',' },
    });

    // Replace placeholder with curly braces
    const tokensWithOpeningBraces = tokens.replaceAll(openingBrace, '{');
    const tokensWithCurlyBraces = tokensWithOpeningBraces.replaceAll(
      closingBrace,
      '}'
    );
    return `
    export interface CdsTokens {
      [key: string]: number | string | CdsTokens;
    }
    
    export const cdsLightTokens = {
      ${tokensWithCurlyBraces}
    };`;
  },
});

const sd = StyleDictionary.extend({
  source: [`tokens/cds-light.json`],
  platforms: {
    'tokens-object': {
      buildPath: `src/cds-tokens/`,
      transforms: [
        'name/cti/camel',
        'size/object',
        'color/css',
        'stylesheet/tokens/shadow',
        'stylesheet/tokens/fontWeight',
        'stylesheet/tokens/typography',
        'stylesheet/tokens/other',
        'stylesheet/tokens/NaNValues',
      ],
      files: [
        {
          destination: 'cds-light-tokens.ts',
          format: 'stylesheetTokens',
        },
      ],
    },
  },
});
sd.cleanAllPlatforms(); // optionally, cleanup files first..
sd.buildAllPlatforms();
