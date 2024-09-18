import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Principal from './components/Principal';

export default function App() {
  return (
    <View style={styles.container}>
      <Principal/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
