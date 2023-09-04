import { View, Text, TouchableOpacity, FlatList, ImageBackground } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { styles } from "./styles";
import { Input } from "../../components";
import { useState } from "react";
import { COLORS } from "../../themes";
import PRODUCTS from "../../constants/data/products.json"

function Product ({navigation, route}) {
    const { categoryId, color } = route.params;
    const [search, setSearch] = useState('');
    const [filteredProducts, setFilteredProdcuts] = useState([]);
    const [borderColor, setBoderColor] = useState(COLORS.primary);
    const onHandleBlur = () => {};
    const onHandleChangeText = (text) => {
        setSearch(text);
        // cuando realizo la busqueda,osea ingreso el produnto a buscar en el input, lo va a filtrar directamente con el filterBySearch. 
        filterBySearch(text);
    };
    const onHandleFocus = () => {};

    const filteredProductsByCategory = PRODUCTS.filter((product) => product.categoryId == categoryId);

    const filterBySearch = (query) => {
        // hago una copia del filtro anterior para poder volver a filtralo.
        let updatePoductList = [...filteredProductsByCategory]; 

        // en este nuevo filtro busco una conincidencia de la misma cantidad de caracteres con el indexOf y lo paso a minuscula con el toLowerCase
        updatePoductList = updatePoductList.filter((product) => {
            return product.name.toLowerCase().indexOf(query.toLowerCase()) != -1;
        })

        setFilteredProdcuts(updatePoductList);
    }

    const clearSearch = () => {
        setSearch('');
        setFilteredProdcuts([]);
    }
    
    return(
        <View style={styles.container}>
            
            
            <View style={styles.header}>
                <Input
                    onHandleBlur={onHandleBlur}
                    onHandleChangeText={onHandleChangeText}
                    onHandleFocus={onHandleFocus}
                    value={search}
                    placeholder="Search"
                    borderColor={borderColor}
                />
              
                {search.length > 0 && (
                <Ionicons 
                    style={styles.clearIcon} 
                    onPress={clearSearch} 
                    name="close-circle" 
                    size={20} color={COLORS.black} 
                />
                )}    
            </View>
            <FlatList
                style={styles.products}
                data={search.length > 0 ? filteredProducts : filteredProductsByCategory}
                
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => null} style={styles.productContainer}>
                        <ImageBackground 
                            source={{ uri: item.image }}
                            style={[styles.productImage, { backgroundColor: color }]}
                     TouchableOpacity   />
                        <View style={styles.productDetail}>
                            <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
                            <Text style={styles.productPrice}>{`${item.currency.code} ${item.price}`}</Text>
                        </View>
                        
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.productsContent}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
            
            {filteredProducts.length == 0 && search.length > 0 && (
                <View style={styles.notFound}>
                    <Text style={styles.notFoundText}>No products found</Text>
                </View>
            )}
        </View>
    )
}

export default Product;