import React, { useState, useEffect } from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Badge } from '@compassion-design-system/react-native';
import * as Font from 'expo-font';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Gotham-Bold': require('../assets/fonts/Gotham-Bold.otf'),
        'Gotham-Book': require('../assets/fonts/Gotham-Book.otf'),
        'Gotham-Medium': require('../assets/fonts/Gotham-Medium.otf'),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  return (
    fontLoaded && (
      <View style={[styles.container]}>
        <Text>CDS Badges: </Text>
        <Badge label="Primary" status="primary" />
        <Badge label="Primary Pill" status="primary" borderRadius="pill" />
        <Badge label="Warning" status="warning" />
        <Badge label="Danger" status="danger" />
        <Badge label="Success" status="success" />
        <Badge label="Info" status="info" />
        <Badge label="Neutral" status="neutral" />
      </View>
    )
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
