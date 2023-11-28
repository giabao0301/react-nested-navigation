// Trịnh Gia Bảo - 21521866
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const MainButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#E67205',
    borderRadius: 30,
    margin: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    padding: 10,
  },
});
