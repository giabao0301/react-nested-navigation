// Trịnh Gia Bảo - 21521866
import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Image style={styles.headerLogo} source={require('../assets/logo.png')} />
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  headerTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
});
