import {  View, Text, TouchableOpacity, FlatList } from "react-native";

import { styles } from "./styles";
import { useGetOrdersQuery } from "../../store /orders/api";
import { OrderItem } from "../../components";

const Orders = () => {
    const { data, error, isLoading } = useGetOrdersQuery();
    
   

    const renderItem = ({ item }) => <OrderItem {...item} />;
    const keyExtractor = (item) => item.id.toString();
    return(
        <View style={styles.container}>
            <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
        </View>
    )
};


export default Orders;