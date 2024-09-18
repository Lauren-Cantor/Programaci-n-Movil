import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Task from './Task';
import Greeting from './Greeting';
import UserDetails from './UserDetails';
import ToggleText from './ToggleText';
import DynamicForm from './DynamicForm';
import ClickCounter from './ClickCounter';
import RegistrationForm from './RegistrationForm';
import ThemeSwitcher from './ThemeSwitcher';
import AlertButton from './AlertButton';
import ParentCounter from './ParentCounter';

function Principal() {
    const [datos, setDatos] = useState([]);
    const [tema, setTema] = useState('light');

    const task = {
        tittle: 'practica 1',
        completed: true
    }

    const cambiarDeTema = (temaSeleccionado) => {
        setTema(temaSeleccionado);
    }

    const styles = tema === 'light'?estiloClaro : estiloOscuro;

    const  manejadorDatos = (data) =>{
        setDatos(data);                
    };

    return (
        <View style={styles.container}>
            {/* <Greeting name={"joseph"}/> */}
            {/* <UserDetails nombre={"Stefano"} edad={"30"} ocupacion={"Joyero"}/> */}
            {/* <Task task={task} /> */}
            {/* <ToggleText/> */}
            {/* <DynamicForm/> */}
            {/* <ClickCounter/> */}
            {/* <RegistrationForm datosRecibidos = { manejadorDatos }/> */}
            {/* <Text> Datos mostrados desde practica 1</Text> */}
            {/* <Text>Nombre: {datos.nombre}</Text> */}
            {/* <Text>correo: {datos.correo}</Text> */}
            {/* <Text>password: {datos.password}</Text> */}
            <Text style={styles.text}>Aplicación con tema {tema==='light'?'Claro':'Oscuro'}</Text>
            <ThemeSwitcher cambioDeTema = {cambiarDeTema}/>
            <AlertButton mensaje = {"Mensaje de Prueba"}/>
            <ParentCounter/>
        </View>
    );
};

const estiloClaro = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    text: {
      color: 'black',
      fontSize: 20,
    },
  });
  
  const estiloOscuro = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
    },
    text: {
      color: 'white',
      fontSize: 20,
    },
  });

export default Principal;