import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>Phantasm</Text>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F1E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
