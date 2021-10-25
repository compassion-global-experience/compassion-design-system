module.exports = {
  extends: [
    'standard',
    'standard-jsx',
    'standard-react',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: false,
    node: false,
  },
  rules: {
    'jsx-a11y/href-no-hash': ['off'],
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-uses-react': 'warn',
    'react/prop-types': ['error', { ignore: ['children'] }],
  },
  ignorePatterns: [
    // Generated files
    '**/icons/*.jsx',
  ],
};
