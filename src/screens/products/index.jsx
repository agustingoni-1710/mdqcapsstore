import { View, Text, Button } from "react-native";

import { styles } from "./styles";

function Product ({onHandleNavigate}) {
    return(
        <View style={styles.container}>
            <Button title='Go Back' onPress={onHandleNavigate} />
            <Text>Category Selected</Text>
          </View>
    )
}

export default Product;