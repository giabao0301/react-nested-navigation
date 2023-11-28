// Trịnh Gia Bảo - 21521866
import React, {useLayoutEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Categories1 from './Categories1';
import Categories2 from './Categories2';
import Categories3 from './Categories3';
const CategoriesScreen = ({navigation, route}) => {
  const Tab = createMaterialTopTabNavigator();

  useLayoutEffect(() => {
    if (!navigation || !route) return;
    const drawerNavigator = navigation.getParent('Drawer');
    if (drawerNavigator) {
      if (route.name === 'Categories') {
        drawerNavigator.setOptions({
          headerShown: false,
        });
      }
    }

    return drawerNavigator
      ? () => {
          drawerNavigator.setOptions({
            headerShown: true,
          });
        }
      : undefined;
  }, [navigation, route]);

  return (
    <Tab.Navigator initialRouteName="CATEGORIES1">
      <Tab.Screen name="CATEGORIES1" component={Categories1} />
      <Tab.Screen name="CATEGORIES2" component={Categories2} />
      <Tab.Screen name="CATEGORIES3" component={Categories3} />
    </Tab.Navigator>
  );
};

export default CategoriesScreen;
