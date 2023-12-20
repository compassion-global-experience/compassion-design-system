import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { multiply, Badge } from '@compassion-design-system/react-native';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  return (
    <View style={[styles.container]}>
      <Text>CDS Badges: </Text>
      <Badge label="Primary" status="primary" />
      <Badge label="Warning" status="warning" />
      <Badge label="Danger" status="danger" />
      <Badge label="Success" status="success" />
      <Badge label="Info" status="info" />
      <Badge label="Neutral" status="neutral" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
