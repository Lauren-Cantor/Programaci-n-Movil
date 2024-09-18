import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function UserDetails(props) {
    return (
        <View style={styles.container}>
            <Text>Nombre:{props.nombre}</Text>
            <Text>Edad:{props.edad} años</Text>
            <Text>Ocupación:{props.ocupacion}</Text>
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

export default UserDetails;