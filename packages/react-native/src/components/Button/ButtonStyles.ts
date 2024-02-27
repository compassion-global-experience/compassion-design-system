import { cdsLightTokens } from '../../cds-tokens/cds-light-tokens';
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export const cdsButtonStyles: { [key: string]: ViewStyle } = StyleSheet.create({
  base: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  small: {
    padding: cdsLightTokens.buttonPrimarySmallPaddingX,
  },
  medium: {
    padding: cdsLightTokens.buttonPrimaryMediumPaddingX,
  },
  large: {
    padding: cdsLightTokens.buttonPrimaryLargePaddingX,
  },
  smallTertiary: {
    paddingHorizontal: cdsLightTokens.buttonTertiarySmallPaddingX,
    paddingVertical: cdsLightTokens.buttonTertiarySmallPaddingY,
  },
  mediumTertiary: {
    paddingHorizontal: cdsLightTokens.buttonTertiaryMediumPaddingX,
    paddingVertical: cdsLightTokens.buttonTertiaryMediumPaddingY,
  },
  largeTertiary: {
    paddingHorizontal: cdsLightTokens.buttonTertiaryLargePaddingX,
    paddingVertical: cdsLightTokens.buttonTertiaryLargePaddingY,
  },
});

export const cdsButtonBgStyles: { [key: string]: ViewStyle } =
  StyleSheet.create({
    base: {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
    },
    default: {
      backgroundColor: cdsLightTokens.buttonPrimaryDefaultBackgroundColor,
    },
    cta: {
      backgroundColor: cdsLightTokens.buttonCtaPrimaryDefaultBackgroundColor,
    },
    white: {
      backgroundColor: cdsLightTokens.buttonWhitePrimaryDefaultBackgroundColor,
    },
    inverse: {
      backgroundColor:
        cdsLightTokens.buttonInversePrimaryDefaultBackgroundColor,
    },
    disabledDefault: {
      backgroundColor: cdsLightTokens.buttonPrimaryDisabledBackgroundColor,
    },
    disabledWhite: {
      backgroundColor: cdsLightTokens.buttonWhitePrimaryDisabledBackgroundColor,
    },
    disabledInverse: {
      backgroundColor:
        cdsLightTokens.buttonInversePrimaryDisabledBackgroundColor,
    },
  });

export const cdsButtonRippleColor = {
  default: cdsLightTokens.buttonPrimaryHoverBackgroundColor,
  cta: cdsLightTokens.buttonCtaPrimaryHoverBackgroundColor,
  white: cdsLightTokens.buttonWhitePrimaryHoverBackgroundColor,
  inverse: cdsLightTokens.buttonInversePrimaryHoverBackgroundColor,
  destructive: cdsLightTokens.buttonDestructiveSecondaryHoverBackgroundColor,
};

export const cdsButtonBorderStyles: { [key: string]: ViewStyle } =
  StyleSheet.create({
    base: {
      borderWidth: cdsLightTokens.buttonPrimaryBorderWidth,
      borderStyle: 'solid',
      borderRadius: cdsLightTokens.buttonPrimaryBorderRadius,
      overflow: 'hidden',
    },
    tertiary: {
      borderBottomWidth: cdsLightTokens.buttonPrimaryBorderWidth,
      borderStyle: 'solid',
      borderRadius: cdsLightTokens.buttonTertiaryBorderRadius,
      overflow: 'hidden',
    },
    default: {
      borderColor: cdsLightTokens.buttonPrimaryDefaultBorderColor,
    },
    cta: {
      borderColor: cdsLightTokens.buttonCtaPrimaryDefaultBorderColor,
    },
    white: {
      borderColor: cdsLightTokens.buttonWhitePrimaryDefaultBorderColor,
    },
    inverse: {
      borderColor: cdsLightTokens.buttonInversePrimaryDefaultBorderColor,
    },
    destructive: {
      borderColor: cdsLightTokens.buttonDestructiveSecondaryDefaultBorderColor,
    },
    disabledDefault: {
      borderColor: cdsLightTokens.buttonCtaPrimaryDisabledBorderColor,
    },
    disabledWhite: {
      borderColor: cdsLightTokens.buttonWhitePrimaryDisabledBorderColor,
    },
    disabledInverse: {
      borderColor: cdsLightTokens.buttonInversePrimaryDisabledBorderColor,
    },
  });

export const cdsButtonTextStyles: { [key: string]: TextStyle } =
  StyleSheet.create({
    small: {
      ...(cdsLightTokens.buttonSmallFont as TextStyle),
    },
    medium: {
      ...(cdsLightTokens.buttonMediumFont as TextStyle),
    },
    large: {
      ...(cdsLightTokens.buttonLargeFont as TextStyle),
    },
    primaryDefault: {
      color: cdsLightTokens.buttonPrimaryDefaultTextColor,
    },
    primaryCta: {
      color: cdsLightTokens.buttonCtaPrimaryDefaultTextColor,
    },
    primaryWhite: {
      color: cdsLightTokens.buttonWhitePrimaryDefaultTextColor,
    },
    primaryInverse: {
      color: cdsLightTokens.buttonInversePrimaryDefaultTextColor,
    },
    primaryDestructive: {
      color: cdsLightTokens.buttonDestructiveSecondaryDefaultTextColor,
    },
    secondaryDefault: {
      color: cdsLightTokens.buttonSecondaryDefaultTextColor,
    },
    secondaryCta: {
      color: cdsLightTokens.buttonCtaPrimaryDefaultTextColor,
    },
    secondaryWhite: {
      color: cdsLightTokens.buttonWhiteSecondaryDefaultTextColor,
    },
    secondaryInverse: {
      color: cdsLightTokens.buttonInverseSecondaryDefaultTextColor,
    },
    secondaryDestructive: {
      color: cdsLightTokens.buttonDestructiveSecondaryDefaultTextColor,
    },
    tertiaryDefault: {
      color: cdsLightTokens.buttonTertiaryDefaultTextColor,
    },
    tertiaryCta: {
      color: cdsLightTokens.buttonCtaPrimaryDefaultTextColor,
    },
    tertiaryWhite: {
      color: cdsLightTokens.buttonWhiteTertiaryDefaultTextColor,
    },
    tertiaryInverse: {
      color: cdsLightTokens.buttonInverseTertiaryDefaultTextColor,
    },
    tertiaryDestructive: {
      color: cdsLightTokens.buttonDestructiveTertiaryDefaultTextColor,
    },
    disabledPrimaryDefault: {
      color: cdsLightTokens.buttonPrimaryDisabledTextColor,
    },
    disabledSecondaryDefault: {
      color: cdsLightTokens.buttonSecondaryDisabledTextColor,
    },
    disabledTertiaryDefault: {
      color: cdsLightTokens.buttonTertiaryDisabledTextColor,
    },
    disabledPrimaryWhite: {
      color: cdsLightTokens.buttonWhitePrimaryDisabledTextColor,
    },
    disabledSecondaryWhite: {
      color: cdsLightTokens.buttonWhiteSecondaryDisabledTextColor,
    },
    disabledTertiaryWhite: {
      color: cdsLightTokens.buttonWhiteTertiaryDisabledTextColor,
    },
    disabledPrimaryInverse: {
      color: cdsLightTokens.buttonInversePrimaryDisabledTextColor,
    },
    disabledSecondaryInverse: {
      color: cdsLightTokens.buttonInverseSecondaryDisabledTextColor,
    },
    disabledTertiaryInverse: {
      color: cdsLightTokens.buttonInverseTertiaryDisabledTextColor,
    },
  });
