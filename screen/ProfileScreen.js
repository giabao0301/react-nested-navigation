// Trịnh Gia Bảo - 21521866
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useAuthContext} from '../context/auth-context';
const ProfileScreen = () => {
  const {onLogout} = useAuthContext();

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
