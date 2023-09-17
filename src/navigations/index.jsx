import { NavigationContainer } from "@react-navigation/native";

import TabsNavigator from "./tabs";
import { useState } from "react";
import AuthNavigator from "./auth";

function RootNavigator() {
    const [userId, setUserId ] = useState(null);
    return(
        <NavigationContainer>
            {userId ? <TabsNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    );
}

export default RootNavigator;