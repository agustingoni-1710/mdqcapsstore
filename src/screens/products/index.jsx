import { View, Text, Button, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { styles } from "./styles";
import { Input } from "../../components";
import { useState } from "react";
import { COLORS } from "../../themes";
import PRODUCTS from "../../constants/data/products.json"

function Product ({onHandleGoBack, catergoryId }) {

    const [search, setSearch] = useState('');
    const [borderColor, setBoderColor] = useState(COLORS.primary);
    const onHandleBlur = () => {};
    const onHandleChangeText = (text) => {
        setSearch(text);
    };
    const onHandleFocus = () => {};

    const filterProducts = PRODUCTS.filter((product) => product.categoryId == catergoryId);
    return(
        <View style={styles.container}>
            
            <TouchableOpacity style={styles.goBack} onPress={onHandleGoBack}>
                <Ionicons name="arrow-back-circle" size={30} color={COLORS.black}/>
                <Text style={styles.goBackText}>Go Back</Text>
            </TouchableOpacity>
            
            <View style={styles.header}>
                <Input
                    onHandleBlur={onHandleBlur}
                    onHandleChangeText={onHandleChangeText}
                    onHandleFocus={onHandleFocus}
                    value={search}
                    placeholder="Search"
                    borderColor={borderColor}
                />
                <Ionicons name="search-circle" size={40} color={COLORS.text} />
                {search.length > 0 && <Ionicons name="close-circle" size={40} color={COLORS.black} />}    
            </View>
            <FlatList
                data={filterProducts}
                renderItem={({item}) => <Text>{item.name}</Text>}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}

export default Product;