import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

function RegistrationForm({ datosRecibidos }) {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    const envioDatos = () => {
        const datos = { nombre, correo, password };
        datosRecibidos(datos);
    }

    return (
        <View style={styles.container}>
            {/*nombre */}
            <TextInput
                style={styles.input}
                placeholder="Escribe tu nombre"
                value={nombre}
                onChangeText={setNombre}
            />
            {/*correo */}
            <TextInput
                style={styles.input}
                placeholder="Escribe tu correo"
                value={correo}
                onChangeText={setCorreo}
            />
            {/*contraseña */}
            <TextInput
                style={styles.input}
                placeholder="Ingresa tu contraseña"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Registrar" onPress={() => envioDatos()} />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default RegistrationForm;