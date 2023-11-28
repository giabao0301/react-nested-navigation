// Trịnh Gia Bảo - 21521866
import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
const FavouritesScreen = ({navigation, route}) => {
  useLayoutEffect(() => {
    if (!navigation || !route) return;
    const drawerNavigator = navigation.getParent('Drawer');
    if (drawerNavigator) {
      if (route.name === 'Favourites') {
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
      <Text style={styles.text}>Favourites Screen</Text>
    </View>
  );
};

export default FavouritesScreen;
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
