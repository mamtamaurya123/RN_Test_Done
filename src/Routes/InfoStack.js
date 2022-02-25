import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MarketScreen,InfoScreen ,DetailsScreen} from "../Screens";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='InfoScreen' component={InfoScreen} />
      <Stack.Screen name='MarketScreen' component={MarketScreen} />
      <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
    </Stack.Navigator>
  );
}