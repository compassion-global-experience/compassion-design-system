import { cdsLightTokens } from '../../cds-tokens/cds-light-tokens';
import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

export const cdsBadgeStyles: { [key: string]: ViewStyle } = StyleSheet.create({
  cdsBadge: {
    display: 'flex',
    textAlign: 'center',
    padding: cdsLightTokens.badgePaddingX,
    borderWidth: cdsLightTokens.badgeBorderWidth,
  },
  cdsBadgeRounded: {
    borderRadius: cdsLightTokens.badgeBorderRadius,
  },
  cdsBadgePill: {
    borderRadius: cdsLightTokens.borderRadiusCircle,
  },
  cdsBadgePrimary: {
    backgroundColor: cdsLightTokens.badgePrimaryBackgroundColor,
    borderColor: cdsLightTokens.badgePrimaryBorderColor,
  },
  cdsBadgeWarning: {
    backgroundColor: cdsLightTokens.badgeWarningBackgroundColor,
    borderColor: cdsLightTokens.badgeWarningBorderColor,
  },
  cdsBadgeDanger: {
    backgroundColor: cdsLightTokens.badgeDangerBackgroundColor,
    borderColor: cdsLightTokens.badgeDangerBorderColor,
  },
  cdsBadgeSuccess: {
    backgroundColor: cdsLightTokens.badgeSuccessBackgroundColor,
    borderColor: cdsLightTokens.badgeSuccessBorderColor,
  },
  cdsBadgeInfo: {
    backgroundColor: cdsLightTokens.badgeInfoBackgroundColor,
    borderColor: cdsLightTokens.badgeInfoBorderColor,
  },
  cdsBadgeNeutral: {
    backgroundColor: cdsLightTokens.badgeNeutralBackgroundColor,
    borderColor: cdsLightTokens.badgeNeutralBorderColor,
  },
});

export const cdsBadgeTextStyles: { [key: string]: TextStyle } =
  StyleSheet.create({
    cdsBadge: {
      ...(cdsLightTokens.badgeFont as TextStyle),
    },
    cdsBadgePrimary: {
      color: cdsLightTokens.badgePrimaryTextColor,
    },
    cdsBadgeWarning: {
      color: cdsLightTokens.badgeWarningTextColor,
    },
    cdsBadgeDanger: {
      color: cdsLightTokens.badgeDangerTextColor,
    },
    cdsBadgeSuccess: {
      color: cdsLightTokens.badgeSuccessTextColor,
    },
    cdsBadgeInfo: {
      color: cdsLightTokens.badgeInfoTextColor,
    },
    cdsBadgeNeutral: {
      color: cdsLightTokens.badgeNeutralTextColor,
    },
  });
