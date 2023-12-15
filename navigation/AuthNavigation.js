import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screen/LoginScreen';
import SignUpScreen from '../screen/SignUpScreen';

const AuthStack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Sign up" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
