import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabsNavigation from './TabsNavigation';
import AuthNavigation from './AuthNavigation';
import {useAuthContext} from '../context/auth-context';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const {isAuthenticated} = useAuthContext();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isAuthenticated ? (
          <Stack.Screen
            name="BottomTab"
            component={TabsNavigation}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen name="Authentication" component={AuthNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
