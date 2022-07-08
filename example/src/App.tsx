import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import I18n from './i18n';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{I18n.t(['HomeScreen', 'welcome'])}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
