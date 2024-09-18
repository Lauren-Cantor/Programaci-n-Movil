import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

function DynamicForm(props) {
    const [text, setText] = useState('');
    const [textoGuardado, setTextoGuardado] = useState('');

    return (
        <View style={styles.container}>
            <TextInput placeholder="Escribe un texto" value={text} onChangeText={setText}/>
            <Button title="Guardar" onPress={() => setTextoGuardado(text)} />
            <Text style={styles.text}>Texto guardado: {textoGuardado} </Text>
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

export default DynamicForm;