// Trịnh Gia Bảo - 21521866
import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
const CartScreen = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Cart Screen</Text>
    </View>
  );
};

export default CartScreen;
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
