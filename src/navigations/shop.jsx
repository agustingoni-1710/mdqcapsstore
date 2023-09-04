import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { Categories, Products } from "../screens";
import { COLORS, FONTS } from "../themes";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

function ShopNavigator(){    
    return(
        <Stack.Navigator 
            initialRouteName="Categories"
            screenOptions={{
                
                headerStyle: {
                    backgroundColor: COLORS.primary,
                    height: 80,
                },
                headerTitleStyle: {
                    fontFamily: FONTS.bold,
                    fontSize: 16,
                },
                headerTintColor: COLORS.white,
               
            }}> 
               
            <Stack.Screen name="Categories" component={Categories}/>
            <Stack.Screen 
                name="Products" 
                component={Products} 
                options={({ navigation, route }) => ({
                    headerStyle: {
                        backgroundColor: route.params.color,
                    },    
                    headerLeft: () => (
                        <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()} >
                            <Ionicons name="arrow-back-circle" size={30} color={COLORS.black}/>
                            
                        </TouchableOpacity>
                        ),
                })}/> 
        </Stack.Navigator>
    );    
}

const styles = StyleSheet.create({
    goBack: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    goBackText: {
        fontSize: 14,
        color: COLORS.text
    },
});

export default ShopNavigator;
