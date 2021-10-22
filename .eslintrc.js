module.exports = {
  extends: ['airbnb', 'standard', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    'import/prefer-default-export': ['off'],
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        comments: 80,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'object-curly-spacing': ['warn', 'always'],
    'space-in-parens': ['warn', 'never'],
  },
  ignorePatterns: ['**/dist/**/*'],
};
