import { TextInput, View, Text, Button } from "react-native";
import { useState } from "react";
import Actividad from "./Actividad";

export default function Actividades() {
    const [actividades, setActividades] = useState([
        { id: 1, descripcion: '1a. Catedra de Ingenieria', completado: true },
        { id: 2, descripcion: 'Platica de Servicio social', completado: false },
        { id: 3, descripcion: 'Baja de materias AGO-DIC 2024', completado: false },
        { id: 4, descripcion: 'Tarea 1', completado: true },
        { id: 5, descripcion: 'Tarea 2', completado: false },
    ]);

    const [descripcion, setDescripcion] = useState('');

    function agregarActividad() {
        const nuevaActividad = { id: Date.now(), descripcion, completado: false };
        setActividades([...actividades, nuevaActividad]);
        setDescripcion('');
    }

    function borrarActividad(id) {
        setActividades(actividades.filter(elemento => elemento.id !== id));
    }

    function completarActividad(id) {
        setActividades(actividades.map(
            elemento => (elemento.id === id ?
                { ...elemento, completado: !elemento.completado }
                :
                elemento)));
    }

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 25, paddingTop: 50, paddingBottom: 20 }}>
                Agenda Universitaria
            </Text>
            
            <TextInput
                value={descripcion}
                onChangeText={setDescripcion}
                placeholder="Nueva Actividad"
            />

            <Button title="Agregar Actividad" onPress={agregarActividad} />
            <Text style={{ fontSize: 20, paddingTop: 10 }}>
                Lista de actividades
            </Text>
            {actividades.map(elemento => (
                <Actividad
                    key={elemento.id}
                    actividad={elemento}
                    borrarActividad={borrarActividad}
                    completarActividad={completarActividad}
                    />
            ))}
        </View>
    );
}