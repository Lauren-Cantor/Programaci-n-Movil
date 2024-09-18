import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';

const ThemeSwitcher = ({ cambioDeTema }) => {
    const [modoOscuro, setModoOscuro] = useState(false);

    const selectorDeTema = () => {
        setModoOscuro(!modoOscuro);
        cambioDeTema(!modoOscuro ? 'dark' : 'light');
    };

    return (
        <View style={styles.container}>
            <Button
                title={`Cambiar a ${modoOscuro ? 'Tema Claro' : 'Tema Oscuro'}`}
                onPress={selectorDeTema}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignItems: 'center',
    },
});

export default ThemeSwitcher;
