import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function ToggleText() {
    const [showText, setShowText] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{showText ? 'Presionaste el boton' : ''}</Text>
            <Button title="presionar" onPress={() => setShowText(!showText)} />
        </View>
    );
}

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

export default ToggleText;