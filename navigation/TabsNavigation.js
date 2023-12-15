import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CategoriesStack, HomeStack} from './StackNavigation';
import CartScreen from '../screen/CartScreen';
import ProfileScreen from '../screen/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tabs = createBottomTabNavigator();
const TabsNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Categories') {
            iconName = 'th-large';
          } else if (route.name === 'Cart') {
            iconName = 'shopping-cart';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }
          return (
            <Icon
              name={iconName}
              size={30}
              color={focused ? '#578CEE' : '#000'}
            />
          );
        },
        tabBarBadge: route.name === 'Cart' ? 3 : null,
        tabBarStyle: {
          padding: 10,
          height: 70,
        },
        // Trịnh Gia Bảo - 21521866
        tabBarLabelStyle: {
          margin: 5,
        },
        tabBarBadgeStyle: {
          position: 'absolute',
          top: -5,
          left: 5,
          fontSize: 12,
          lineHeight: 14,
        },
      })}
      initialRouteName="HomeScreen"
      id="Home">
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Categories" component={CategoriesStack} />
      <Tabs.Screen name="Cart" component={CartScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default TabsNavigation;
