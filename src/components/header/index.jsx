import { View, Text } from "react-native";
import { styles } from "./styles";

// el style que pasa como parametro de la funcion, proviene directamente del style que pasa por la etiqueta del index principal y eso lo paso lo envio al style de la etiqueta view que esta abajo como un arreglo. De esta forma setea el color correspondiente a la categoria seleccionada. Por default paso el primario. 
const Header = ({ title, style }) =>{
    return(
        <View style={[styles.container, style]}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default Header;