import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function ClickCounter() {

    const [valor, setValor] = useState(0);

    return (
        <View style={styles.container}>
            <Button title={`El botón ha sido presionado ${valor} veces`} onPress={() => setValor(valor + 1)} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default ClickCounter;
