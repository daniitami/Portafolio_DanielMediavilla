import { Button, View, Text } from "react-native";

interface InicioProps {
    navigation: any;
}

const Inicio: React.FC<InicioProps> = ({ navigation }) => {
    return (
        <View>
            <Text style={{ fontSize: 20 }}>Bienvenidos</Text>
            <Button title="Ver actividades"
                onPress={() => navigation.navigate("Actividades")}
            />
            <Button title="TercerComponente"
                onPress={() => navigation.navigate("TercerComponente")}
            />
        </View>
    );
};

export default Inicio;

