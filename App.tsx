import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Actividades from './components/Actividades';
import Inicio from './components/Inicio';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TercerComponente from './components/TercerComponente';

const Navegador = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navegador.Navigator>
        <Navegador.Screen name="Inicio" component={Inicio}/>
        <Navegador.Screen name="Actividades" component={Actividades}/>
        <Navegador.Screen name="TercerComponente" component={TercerComponente}/>
      </Navegador.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
