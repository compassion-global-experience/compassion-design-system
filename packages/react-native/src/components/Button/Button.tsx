import { Button as RNButton, View, Text } from 'react-native';
import { cdsButtonStyles } from './ButtonStyles';

export interface ButtonProps {
  label: string;
  kind?: 'cta';
  size?: 'small' | 'medium' | 'large';
  onClick?: (event: any) => void;
}

const Button = (props: ButtonProps) => {
  const { label, kind, size = 'medium', onClick } = props;
  const buttonStyles = [
    cdsButtonStyles['cdsButton'],
    cdsButtonStyles['cdsButtonSmall'],
  ];

  if (size === 'small') {
    buttonStyles.push(cdsButtonStyles['cdsButtonSmall']);
  }

  return (
    <View style={buttonStyles}>
      {/* <RNButton title={label} onPress={onClick} /> */}
      <Text>Hello</Text>
    </View>
  );
};

export default Button;
