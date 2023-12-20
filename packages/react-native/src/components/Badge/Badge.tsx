import React from 'react';
import { View, Text } from 'react-native';
import { cdsBadgeStyles, cdsBadgeTextStyles } from './BadgeStyles';

export interface BadgeProps {
  status?: 'primary' | 'warning' | 'danger' | 'success' | 'info' | 'neutral';
  label: string;
  borderRadius?: 'rounded' | 'pill';
}

const statusToStyleMap = {
  primary: 'cdsBadgePrimary',
  warning: 'cdsBadgeWarning',
  danger: 'cdsBadgeDanger',
  success: 'cdsBadgeSuccess',
  info: 'cdsBadgeInfo',
  neutral: 'cdsBadgeNeutral',
};

const Badge = ({
  label,
  status = 'primary',
  borderRadius = 'rounded',
}: BadgeProps) => {
  const badgeViewStyles = [
    cdsBadgeStyles.cdsBadge,
    cdsBadgeStyles[statusToStyleMap[status] as keyof typeof cdsBadgeStyles],
    cdsBadgeStyles[
      borderRadius === 'pill' ? 'cdsBadgePill' : 'cdsBadgeRounded'
    ],
  ];
  const badgeTextStyles = [
    cdsBadgeTextStyles.cdsBadge,
    cdsBadgeTextStyles[
      statusToStyleMap[status] as keyof typeof cdsBadgeTextStyles
    ],
  ];

  return (
    <View style={badgeViewStyles}>
      <Text style={badgeTextStyles}>{label}</Text>
    </View>
  );
};

export default Badge;
