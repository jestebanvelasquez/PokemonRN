import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {HomeScreen} from '../views/Home/index';
export type RooStackParams = {
  HomeScreen: undefined;
};

const Stack = createStackNavigator<RooStackParams>();

const NavegationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavegationStack;
