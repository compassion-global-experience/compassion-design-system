export default {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => {
        const commonForwardedPropsWeWantToDocument = /className|style/;
        if (commonForwardedPropsWeWantToDocument.test(prop.name)) {
          return true;
        }

        // If the prop comes from sub-package we exclude it from storybook documentation
        // We don't document all the forwarded props, because html attributes from example are 200+
        if (prop.parent && /node_modules/.test(prop.parent.fileName)) {
          return false;
        }

        return true;
      },
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
};
