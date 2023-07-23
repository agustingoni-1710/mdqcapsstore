import { TouchableHighlight, ImageBackground, Text } from "react-native";

import { styles } from "./styles";

const CategoryItem = ({ id, name, backgroundColor, backgroundImage, onSelectCategory }) => {
    return(
        <TouchableHighlight onPress={()=> onSelectCategory(id)} style={[styles.container, {backgroundColor}]}>
            <ImageBackground source={{ uri: backgroundImage}} style={styles.imageBackground} resizeMode="cover">
                <Text style={styles.categoryName}>{name}</Text>
            </ImageBackground>
        </TouchableHighlight>
    )
}

export default CategoryItem;