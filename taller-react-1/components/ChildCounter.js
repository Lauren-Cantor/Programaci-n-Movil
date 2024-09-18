import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ChildCounter = ({ counter, incrementCounter }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Contador: {counter}</Text>
      <Button title="Incrementar contador" onPress={incrementCounter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  counterText: {
    fontSize: 24,
    marginBottom: 10,
  },
});

export default ChildCounter;
