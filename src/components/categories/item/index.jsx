import { TouchableHighlight, ImageBackground, Text, useWindowDimensions } from "react-native";

import {styles} from "./styles";
import {COLORS} from "../../../themes";

// cuando decimos ver la dimencion de la ventana(windows) nos referimos a la ventana de la aplicacion y no a toda la pantalla del telefono. Osea al usar windowsDimensions se va renderisar lo que esta en esa ventana.

const CategoryItem = ({ id, name, backgroundColor, backgroundImage, onSelectCategory, style}) => {
    /* console.log("funcion",onSelectCategory) */
    
    /* const { width} = useWindowDimensions(); */

   /*  console.warn({ width }); */
    
    /* const isTablet = width > 650; esta constante la voy a utilizar para validar si es una tablet o un movil, de la siguiente forma:
    style={isTablet ? styles.imageBackgroundTablet : [styles.imageBackground, style]} 
    resizeMode={isTablet ? 'contain' :'cover'}>
    <Text style={isTablet ? styles.categoryNameTablet : styles.categoryName}>{(name)}</Text> */

   
    return (
        <TouchableHighlight 
            onPress={() => onSelectCategory(id)} 
            style={[styles.container, { backgroundColor }]} 
            underlayColor={COLORS.primary}
        >
            <ImageBackground 
                source={{ uri: backgroundImage }} 
                style={[styles.imageBackground, style]} 
                resizeMode='cover'>
                <Text style={styles.categoryName}>{(name)}</Text>
            </ImageBackground>
        </TouchableHighlight>
    );
};

export default CategoryItem;