// Trịnh Gia Bảo - 21521866
import React from 'react';
import LoginScreen from '../screen/LoginScreen';
import SignUpScreen from '../screen/SignUpScreen';
import HomeScreen from '../screen/HomeScreen';
import HomeDetailsScreen from '../screen/HomeDetailsScreen';
import CategoriesScreen from '../screen/Categories/CategoriesScreen';
import FavouritesScreen from '../screen/FavouritesScreen';
import ProfileScreen from '../screen/ProfileScreen';
import NotificationsScreen from '../screen/NotificationsScreen';
import NotificationDetailsScreen from '../screen/NotificationDetailsScreen';
import HelpsScreen from '../screen/HelpsScreen';
import {useAuthContext} from '../context/auth-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const MainBottom = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const AuthScreen = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Sign up" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};
const BottomTab = () => {
  return (
    <MainBottom.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Categories') {
            iconName = 'th-large';
          } else if (route.name === 'Favourites') {
            iconName = 'heart';
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
        tabBarBadge: route.name === 'Favourites' ? 3 : null,
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
      initialRouteName="Home">
      <MainBottom.Screen name="Home" component={HomeScreen} />
      <MainBottom.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerShown: true,
          unmountOnBlur: true,
        }}
      />
      <MainBottom.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          headerShown: true,
          unmountOnBlur: true,
        }}
      />
      <MainBottom.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          unmountOnBlur: true,
        }}
      />
    </MainBottom.Navigator>
  );
};

const DrawerContent = () => {
  return (
    <Drawer.Navigator
      id="Drawer"
      screenOptions={({route}) => ({
        drawerIcon: ({focused}) => {
          let iconName;
          if (route.name === 'HomeBottom') {
            iconName = 'home-outline';
          } else if (route.name === 'Notifications') {
            iconName = 'notifications-outline';
          } else if (route.name === 'Helps') {
            iconName = 'help-circle-outline';
          }
          return (
            <Ionicons
              name={iconName}
              size={30}
              color={focused ? '#578CEE' : '#000'}
            />
          );
        },
      })}>
      <Drawer.Screen
        name="HomeBottom"
        component={BottomTab}
        options={{headerTitle: 'Home', drawerLabel: 'Home'}}
      />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Helps" component={HelpsScreen} />
    </Drawer.Navigator>
  );
};

const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={DrawerContent}
        options={{headerShown: false}}
      />
      <Stack.Screen name="HomeDetails" component={HomeDetailsScreen} />
      <Stack.Screen
        name="NotificationDetails"
        component={NotificationDetailsScreen}
      />
    </Stack.Navigator>
  );
};

// Trịnh Gia Bảo - 21521866
const Wrapper = () => {
  const {isAuthenticated} = useAuthContext();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuthenticated ? (
          <Stack.Screen name="DrawerContent" component={Root} />
        ) : (
          <Stack.Screen name="Authentication" component={AuthScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Wrapper;
