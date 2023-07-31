import { View, Text, Button, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { styles } from "./styles";
import { Input } from "../../components";
import { useState } from "react";
import { COLORS } from "../../themes";
import PRODUCTS from "../../constants/data/products.json"

function Product ({onHandleGoBack, catergoryId }) {

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

    const filteredProductsByCategory = PRODUCTS.filter((product) => product.categoryId == catergoryId);

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
              
                {search.length > 0 && <Ionicons onPress={clearSearch} name="close-circle" size={30} color={COLORS.black} />}    
            </View>
            <FlatList
                style={styles.products}
                data={search.length > 0 ? filteredProducts : filteredProductsByCategory}
                renderItem={({item}) => <Text>{item.name}</Text>}
                keyExtractor={(item) => item.id.toString()}
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