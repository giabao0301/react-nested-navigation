import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const Categories1 = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Categories1</Text>
    </View>
  );
};

export default Categories1;
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
