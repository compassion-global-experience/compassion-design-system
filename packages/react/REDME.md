# GDS React Components

The Compassion Design System includes a streamlined set of React components for
fast, accessible development of apps and static sites.

## Installing and usage

To install the GDS React package use

```shell
npm install @compassion-gds/react
```

Or `yarn add @compassion-gds/react` if you're using yarn

Import the css files from the entry point of your application

#### index.js
```js
// Replace {theme} with any of the available themes (e.g. light, dark)
import '@compassion-gds/react/css/{theme}.css';
import '@compassion-gds/react/css/base.css';
```

Alternatively these can be declared as stylesheets in a html file like so:
```html
<!--Replace {theme} with any of the available themes (e.g. light, dark)-->
<link rel="stylesheet" type="text/css" href="@compassion-gds/react/css/{theme}.css" />
<link rel="stylesheet" type="text/css" href="@compassion-gds/react/css/base.css" />
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
