import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeScreen } from "../Screens";

const  Stack= createNativeStackNavigator();

export default function NativeStack(){
    return(
        <Stack.Navigator>
           
            <Stack.Screen name='NativeScreen' component={NativeScreen}/>
        </Stack.Navigator>
    )
}