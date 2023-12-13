// Trịnh Gia Bảo - 21521866
import React from 'react';
import LoginScreen from '../screen/LoginScreen';
import SignUpScreen from '../screen/SignUpScreen';
import HomeScreen from '../screen/HomeScreen';
import CategoriesScreen from '../screen/CategoriesScreen';
import CartScreen from '../screen/CartScreen';
import ProfileScreen from '../screen/ProfileScreen';
import {useAuthContext} from '../context/auth-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeDetailsScreen from '../screen/HomeDetailsScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const MainBottom = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const AuthScreen = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Sign up" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="HomeDetails"
        component={HomeDetailsScreen}
        options={({route}) => {
          return {
            headerTitle: route.params.data.productName,
          };
        }}
      />
    </HomeStack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <MainBottom.Navigator
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
      <MainBottom.Screen name="Home" component={HomeStackScreen} />
      <MainBottom.Screen name="Categories" component={CategoriesScreen} />
      <MainBottom.Screen name="Cart" component={CartScreen} />
      <MainBottom.Screen name="Profile" component={ProfileScreen} />
    </MainBottom.Navigator>
  );
};

const Wrapper = () => {
  const {isAuthenticated} = useAuthContext();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isAuthenticated ? (
          <Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen name="Authentication" component={AuthScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Wrapper;
