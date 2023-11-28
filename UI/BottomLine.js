// Trịnh Gia Bảo - 21521866
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const BottomLine = props => {
  return (
    <View style={styles.bottomLine}>
      <Text style={styles.normalText}>{props.content}</Text>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.blueBoldText}>{props.action}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default BottomLine;
const styles = StyleSheet.create({
  bottomLine: {
    flexDirection: 'row',
  },
  blueBoldText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 16,
  },
  normalText: {
    color: '#000',
    fontSize: 16,
    marginRight: 5,
  },
});
