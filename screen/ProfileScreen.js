// Trịnh Gia Bảo - 21521866
import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useAuthContext} from '../context/auth-context';
const ProfileScreen = ({navigation, route}) => {
  const {onLogout} = useAuthContext();
  useLayoutEffect(() => {
    if (!navigation || !route) return;
    const drawerNavigator = navigation.getParent('Drawer');
    if (drawerNavigator) {
      if (route.name === 'Profile') {
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
    <View style={styles.body}>
      <Text style={styles.text}>Profile Screen</Text>
      <Button title="LOG OUT" onPress={onLogout} />
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
  },
});
