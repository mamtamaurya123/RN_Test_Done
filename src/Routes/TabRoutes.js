import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View, Image} from 'react-native';
import InfoStack from './InfoStack';
import MarketStack from './MarketStack';
import NativeStack from './NativeStack';


const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#ffff',
        },
      }}>
      <Tab.Screen
        name="InfoStack"
        component={InfoStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
              <Text
                style={{color: focused ? '#F4560C' : '#748c94', fontSize: 12}}>
                Info
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MarketScreen
        "
        component={MarketStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
              <Text
                style={{color: focused ? '#F4560C' : '#748c94', fontSize: 12}}>
                MarketScreen
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="NativeStack"
        component={NativeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
              <Text
                style={{color: focused ? '#F4560C' : '#748c94', fontSize: 12}}>
                NativeScreen
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;
