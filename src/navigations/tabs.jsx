import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "./shop";
import CartNavigator from "./cart";
import OrdersNavigator from "./orders";

const BottomTab = createBottomTabNavigator();
/* Sirver para eliminar texto de cabecera
screenOptions={{
            headerShown: false,
        }} */

const TabsNavigator = () => {
    return(
        <BottomTab.Navigator 
        initialRouteName="ShopTap" 
        screenOptions={{
            headerShown: false,
        }}> 
             <BottomTab.Screen name="ShopTab" component={ShopNavigator}/>
             <BottomTab.Screen name="CartTab" component={CartNavigator}/>
             <BottomTab.Screen name="OrdersTab" component={OrdersNavigator}/>
        </BottomTab.Navigator>
    );
};

export default TabsNavigator;
