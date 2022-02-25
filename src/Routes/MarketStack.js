import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen, MarketScreen } from "../Screens";

const  Stack= createNativeStackNavigator();

export default function AccountStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='MarketScreen' component={MarketScreen}/>
            <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
        </Stack.Navigator>
    )
}