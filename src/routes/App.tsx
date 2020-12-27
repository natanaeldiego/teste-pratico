import React, {useEffect} from 'react';
import { StatusBar } from "react-native";
import { useSelector } from 'react-redux';
import { selectors } from '../redux/selectors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { resultHome } from '../services/api';
import Home from '../pages/home';
import Content from '../pages/content';
import { Loading } from '../components';

const Stack = createStackNavigator();

const App = () => {
  const listPages = useSelector(selectors.getPages);
  const isPages = useSelector(selectors.isPages);

  if (!isPages.isPages) {
    resultHome();
  }

  if (listPages.resultPages.length <= 0) {
    return Loading()
  }

  return (
    <>
      <StatusBar backgroundColor="#f0f0f0" barStyle={'dark-content'} />
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
