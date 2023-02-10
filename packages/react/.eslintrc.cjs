module.exports = {
  extends: [
    'standard-jsx',
    'standard-react',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: false,
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
  },
};
