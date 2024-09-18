import React, { useState } from 'react';
import { Button, View, StyleSheet, Alert } from 'react-native';

function AlertButton(props) {
    const [alerta, setAlerta] = useState(props.mensaje);

    const pulsarBoton = (mensaje) => {
        Alert.alert(
            "Mensaje de alerta",
            alerta,
            [{ text: "OK" }]
        );
    }

    return (
        <View style={styles.container}>
            <Button
                title='Alerta'
                onPress={pulsarBoton}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'center',
    },
});
export default AlertButton;