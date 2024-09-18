import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Task(props) {

    const { tittle, completed } = props.task;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tarea = {tittle} </Text>
            <Text style={styles.text}>La tarea esta completa = {completed ? 'Completada' : 'No completada'} </Text>
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

export default Task;