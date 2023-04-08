# GDS React Components

The Compassion Design System includes a streamlined set of React components for
fast, accessible development of apps and static sites.

## Installing and usage

To install the GDS React package use

```shell
npm install @compassion-gds/react
```

Or `yarn add @compassion-gds/react` if you're using yarn

Import the following css files from the entry point of your application

#### index.js
```js
// Replace {theme} with any of the available themes (e.g. light, dark)
import '@compassion-gds/react/css/base.css';
import '@compassion-gds/react/css/vars/{theme}.css';
```

GDS React components would follow the imported theme.

Sample component usage:

```jsx
import React from 'react';
import { Button } from '@compassion-gds/react';

export const PrimaryButton = (props) => (
  <Button primary size="small" {...props} />
);
```

## Themes

Available options:
- light: `@compassion-gds/react/css/light.css`
- dark: `@compassion-gds/react/css/dark.css`

## Contributing to the `react` Package

The `react` package is structured with a component-per-directory convention
inside the `src` directory. Each component directory generally contains 3 items:

- A **TSX file** that describes the component’s structure and behavior
- A **.stories.ts file** that illustrates most of the ways the component can
  be configured
- An **index.ts** file that exports the TSX component’s contents
