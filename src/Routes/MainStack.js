import React from "react";
import TabRoutes from "./TabRoutes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const  Stack= createNativeStackNavigator();

export default function (){
    return(
        <>
        <Stack.Screen 
        name='TabRoutes'
        component={TabRoutes}
        />
        
        </>
    )
}