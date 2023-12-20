import { cdsLightTokens } from '../../cds-tokens/cds-light-tokens';
import { StyleSheet } from 'react-native';

export const cdsButtonStyles = StyleSheet.create({
  cdsButton: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: cdsLightTokens.buttonPrimaryDefaultBackgroundColor,
    borderRadius: cdsLightTokens.buttonPrimaryBorderRadius,
  },
  cdsButtonBorder: {
    borderWidth: cdsLightTokens.buttonPrimaryBorderWidth,
    borderStyle: 'solid',
  },
  cdsButtonSmall: {
    ...cdsLightTokens.buttonSmallFont,
    padding: cdsLightTokens.buttonPrimarySmallPaddingX,
  },
  cdsButtonMedium: {
    ...cdsLightTokens.buttonMediumFont,
    padding: cdsLightTokens.buttonPrimaryMediumPaddingX,
  },
  cdsButtonLarge: {
    ...cdsLightTokens.buttonLargeFont,
    padding: cdsLightTokens.buttonPrimaryLargePaddingX,
  },
  cdsButtonPrimary: {
    color: cdsLightTokens.buttonPrimaryDefaultTextColor,
    backgroundColor: cdsLightTokens.buttonPrimaryDefaultBackgroundColor,
    borderColor: cdsLightTokens.buttonPrimaryDefaultBorderColor,
  },
  cdsButtonCTA: {
    color: cdsLightTokens.buttonCtaPrimaryDefaultTextColor,
    backgroundColor: cdsLightTokens.buttonCtaPrimaryDefaultBackgroundColor,
    borderColor: cdsLightTokens.buttonCtaPrimaryDefaultBorderColor,
  },
});
