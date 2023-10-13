import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SCREENS} from '../models/NavigationModel';
import MainScreen from '../screens/MainScreen';
import Story from '../screens/Story';

const MainStack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name={SCREENS.MainScreen}
          component={MainScreen}
          options={{headerShown: false}}
        />
        <MainStack.Screen name={SCREENS.Stories} component={Story} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
