import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetailsScreen from '../screen/ProductDetailsScreen';
import CategoriesScreen from '../screen/CategoriesScreen';
import HomeScreen from '../screen/HomeScreen';

const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={({route}) => {
          return {
            headerTitle: route.params.data.productName,
          };
        }}
      />
    </Stack.Navigator>
  );
};

const CategoriesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

export {HomeStack, CategoriesStack};
