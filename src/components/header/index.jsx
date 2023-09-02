import { View, Text, useWindowDimensions } from "react-native";
import { styles } from "./styles";

// el style que pasa como parametro de la funcion, proviene directamente del style que pasa por la etiqueta del index principal y eso lo paso lo envio al style de la etiqueta view que esta abajo como un arreglo. De esta forma setea el color correspondiente a la categoria seleccionada. Por default paso el primario. 
const Header = ({ title, style }) =>{

    const { width } = useWindowDimensions();

    const isTablet = width > 650;

    return(
        <View style={[isTablet ? styles.tabletContainer : styles.container, style]}>
            <Text style={isTablet ? styles.tabletTitle : styles.title}>{title}</Text>
        </View>
    );
};

export default Header;