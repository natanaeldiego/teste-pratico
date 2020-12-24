import React from 'react';
import { StatusBar } from "react-native";
import { useSelector } from 'react-redux';
import { selectors } from '../redux/selectors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { resultHome } from '../services/api';
import Home from '../pages/home';
import Content from '../pages/content';
import { View } from 'native-base';

const Stack = createStackNavigator();

const App = ({ navigation }: any) => {
  const listPages = useSelector(selectors.getPages);
  const isPages = useSelector(selectors.isPages);

  if (!isPages.isPages) {
    resultHome();
  }

  if (listPages.resultPages.length <= 0) return <View />

  function HomeStackScreen() {
    return (
      <Stack.Navigator>
        {
          listPages.resultPages.length > 0 && listPages.resultPages.map((data:any, indice:string) => (
            <Stack.Screen key={indice} options={{ headerShown: false }} name={data.title} component={indice == '0' ? pagesScreens : Content} />
          ))
        }
      </Stack.Navigator>
    );
  }

  return (
    <>
      <StatusBar backgroundColor="#05589c" barStyle={'default'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen options={{ headerShown: false }} name="HomePage" component={Home} />
          <Stack.Screen options={{ headerShown: false }} name="ContentHomePage" component={Home} />
          <Stack.Screen name="Detalhes" component={Content} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
