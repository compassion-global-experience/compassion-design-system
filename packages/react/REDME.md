# GDS React Components

The Compassion Design System includes a streamlined set of React components for
fast, accessible development of apps and static sites.

## Installing and usage

To install the GDS React package use

```shell
npm install @compassion-gds/react
```

Or `yarn add @compassion-gds/react` if you're using yarn  
(`@compassion-gds/css` is automatically installed as peer dependency)

Import the following css files from the entry point of your application

#### index.js
```js
// Replace {theme} with any of the available themes (e.g. light, dark)
import '@compassion-gds/css/reset.css';
import '@compassion-gds/css/vars/{theme}.css';
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
- light: `@compassion-gds/css/vars/light.css`
- dark: `@compassion-gds/css/vars/dark.css`
