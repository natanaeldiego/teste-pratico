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
import Icon from 'react-native-vector-icons/MaterialIcons';
import {IconFontAwesome} from '../components';
import Home from '../pages/home';
import Content from '../pages/content';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const pagesScreens = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="HomePage" component={Home} />
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
        <Tab.Navigator
          screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            switch (route.name) {
              case 'Inicio':
                iconName = focused ? 'home' : 'home';
                break;
              case 'Camara':
                iconName = focused ? 'university' : 'university';
                return IconFontAwesome({ iconName, size, color });
              case 'Comunicar':
                iconName = focused ? 'comment' : 'comment';
                break;
              case 'Proteção Civil':
                iconName = focused ? 'exclamation-triangle' : 'exclamation-triangle';
                return IconFontAwesome({ iconName, size, color });
              case 'COVID':
                iconName = focused ? 'healing' : 'healing';
                break;
              case 'Agenda':
                iconName = focused ? 'today' : 'today';
                break;
            
              default:
                break;
            }
            return <Icon name={`${iconName}`} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
        >
          <Tab.Screen name="Inicio" component={pagesScreens} />
          <Tab.Screen name="Camara" component={Content} />
          <Tab.Screen name="Comunicar" component={Content} options={{ tabBarBadge: 3 }} />
          <Tab.Screen name="Proteção Civil" component={Content} />
          <Tab.Screen name="COVID" component={Content} />
          <Tab.Screen name="Agenda" component={Content} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
