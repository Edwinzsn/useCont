import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import { FirstProvider } from './contexts/FirstContext';
import { SecondProvider } from './contexts/SecondContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <FirstProvider>
        <SecondProvider>
          <Stack.Navigator initialRouteName="ScreenOne">
            <Stack.Screen name="ScreenOne" component={ScreenOne} />
            <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
          </Stack.Navigator>
        </SecondProvider>
      </FirstProvider>
    </NavigationContainer>
  );
}
