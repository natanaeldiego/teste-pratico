/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home';
import Content from '../pages/content';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const pagesScreens = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen
            options={{
              headerTitle: 'Detalhes',
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#0973c8',
              }
            }}
            name="ContentPage"
            component={Content}
          />
      </Stack.Navigator>
    </>
  );
};

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#05589c" barStyle={'default'} />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Inicio" component={pagesScreens} />
          <Tab.Screen name="Camara" component={Content} />
          <Tab.Screen name="Comunicar" component={Content} />
          <Tab.Screen name="Proteção Civil" component={Content} />
          <Tab.Screen name="Covid" component={Content} />
          <Tab.Screen name="Agenda" component={Content} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
