// Trịnh Gia Bảo - 21521866
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
const NotificationsScreen = ({navigation}) => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Notifications Screen</Text>
      <Button
        title="GO TO DETAILS"
        onPress={() => navigation.navigate('NotificationDetails')}
      />
    </View>
  );
};

export default NotificationsScreen;
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
