import {  View, Text, TouchableOpacity, FlatList } from "react-native";

import { styles } from "./styles";
import { useGetOrdersQuery } from "../../store /orders/api";

const Orders = () => {
    const { data, error, isLoading } = useGetOrdersQuery();
    
    console.warn('useGetOrdersQuery', [data, error, isLoading]);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => {}} style={styles.orderItem}>
            <Text style={styles.orderItemId}>{item.id}</Text>
            <Text style={styles.orderItemTotal}>{item.total}</Text>
            <Text style={styles.orderItem}>{item.createAt}</Text>
        </TouchableOpacity>
    );
    const keyExtractor = (item) => item.id.toString();
    return(
        <View style={styles.container}>
            <FlatList data={data} renderItem={renderItem} keyExtractor={keyExtractor} />
        </View>
    )
};


export default Orders;