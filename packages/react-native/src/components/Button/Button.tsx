import { Text, Pressable, View, GestureResponderEvent } from 'react-native';
import {
  cdsButtonStyles,
  cdsButtonTextStyles,
  cdsButtonBgStyles,
  cdsButtonBorderStyles,
  cdsButtonRippleColor,
} from './ButtonStyles';
import { capitalizeFirstLetter } from '../utils';

export interface ButtonProps {
  label: string;
  kind?: 'default' | 'cta' | 'white' | 'inverted' | 'destructive';
  emphasis?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  onPress?: (event: GestureResponderEvent) => void;
}

const Button = (props: ButtonProps) => {
  const {
    label,
    kind = 'default',
    emphasis = 'tertiary',
    size = 'medium',
    disabled = false,
    onPress,
  } = props;

  // Overwrite the emphasis prop if the kind is cta or destructive
  let visualEmphasis = emphasis;
  if (kind === 'cta') {
    visualEmphasis = 'primary';
  } else if (kind === 'destructive' && emphasis === 'primary') {
    visualEmphasis = 'secondary';
  }

  // Use 'inverse' instead of 'inverted' to match token naming
  const kindLabel = kind === 'inverted' ? 'inverse' : kind;

  const buttonBaseStyles = [
    cdsButtonStyles.base,
    visualEmphasis === 'tertiary'
      ? cdsButtonStyles[`${size}Tertiary`]
      : cdsButtonStyles[size],
  ];

  const buttonBorderStyles = [
    visualEmphasis === 'tertiary'
      ? cdsButtonBorderStyles.tertiary
      : cdsButtonBorderStyles.base,
    disabled
      ? cdsButtonBorderStyles[`disabled${capitalizeFirstLetter(kindLabel)}`]
      : cdsButtonBorderStyles[kindLabel],
  ];

  const buttonTextStyles = [
    cdsButtonTextStyles[size],
    disabled
      ? cdsButtonTextStyles[
          `disabled${capitalizeFirstLetter(
            visualEmphasis
          )}${capitalizeFirstLetter(kindLabel)}`
        ]
      : cdsButtonTextStyles[
          `${visualEmphasis}${capitalizeFirstLetter(kindLabel)}`
        ],
  ];

  let buttonBackgroundStyle;

  if (visualEmphasis === 'primary') {
    if (disabled) {
      buttonBackgroundStyle =
        cdsButtonBgStyles[`disabled${capitalizeFirstLetter(kindLabel)}`];
    } else {
      buttonBackgroundStyle = cdsButtonBgStyles[kindLabel];
    }
  }
  if (buttonBackgroundStyle) {
    buttonBaseStyles.push(buttonBackgroundStyle);
  }

  const rippleColor =
    disabled || visualEmphasis !== 'primary'
      ? '#00000000'
      : cdsButtonRippleColor[kindLabel];

  return (
    <>
      <View style={buttonBorderStyles}>
        <Pressable
          style={buttonBaseStyles}
          onPress={onPress}
          android_ripple={{
            color: rippleColor,
            borderless: false,
          }}
        >
          <Text style={buttonTextStyles}>{label}</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Button;
