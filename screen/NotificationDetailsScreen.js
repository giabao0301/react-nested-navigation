// Trịnh Gia Bảo - 21521866
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const NotificationDetailsScreen = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Notification Details Screen</Text>
    </View>
  );
};

export default NotificationDetailsScreen;
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
