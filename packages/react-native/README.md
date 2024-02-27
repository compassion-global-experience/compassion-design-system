# @compassion-design-system/react-native

React Native components and patterns of the Compassion Design System.

## Installation

```sh
npm install @compassion-design-system/react-native
```

## Usage

Components:

```js
import { Button } from '@compassion-design-system/react-native';

// export interface ButtonProps {
//  label: string;
//  kind?: 'default' | 'cta' | 'white' | 'inverted' | 'destructive';
//  emphasis?: 'primary' | 'secondary' | 'tertiary';
//  disabled?: boolean;
//  size?: 'small' | 'medium' | 'large';
//  onPress?: (event: GestureResponderEvent) => void;
// }

// React button documentation -  https://designwithcompassion.com/storybook/react/?path=/docs/components-button--docs

<Button label="Default" />
<Button label="CTA" kind="cta" />
<Button label="White" kind="white" emphasis="secondary" />
```

```js
import { Badge } from '@compassion-design-system/react-native';

// ...

<Badge label="Primary" status="primary" />
<Badge label="Primary Pill" status="primary" borderRadius="pill" />
<Badge label="Warning" status="warning" />
<Badge label="Danger" status="danger" />
<Badge label="Success" status="success" />
<Badge label="Info" status="info" />
<Badge label="Neutral" status="neutral" />
```

Stylesheet values:

```js
import { StyleSheet } from 'react-native';
import { cdsLightTokens } from '@compassion-design-system/react-native';

// ...

const styles = StyleSheet.create({
  card: {
    backgroundColor: cdsLightTokens.cardBackgroundColor,
    borderColor: cdsLightTokens.cardBorderColor,
    borderWidth: cdsLightTokens.cardBorderWidth,
    borderRadius: cdsLightTokens.cardBorderRadius,
  },
  cardHeader: {
    ...cdsLightTokens.cardHeaderDefault,
    color: cdsLightTokens.cardHeaderColor,
  },
});
```

## Development

This project uses a monorepo using `yarn`. To setup the project, run `yarn` in the root directory to install the required dependencies.

```sh
yarn
```

The monorepo includes an example app that consumes `@compassion-design-system/react-native`. Run the app to test out components and exported modules from the library. You will need to install an emulator (https://developer.android.com/studio) to view the app locally.

```sh
yarn example android
```

## Syncing tokens

Run the command below to update and transform CDS tokens into a format that can be used in React Native stylesheets. Transformed themes will be written to the `/src/cds-tokens` directory.

```node
npm run make-stylesheet
```

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
