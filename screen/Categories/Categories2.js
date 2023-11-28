import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const Categories2 = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Categories2</Text>
    </View>
  );
};

export default Categories2;
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
