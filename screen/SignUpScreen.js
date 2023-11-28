// Trịnh Gia Bảo - 21521866
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../UI/Header';
import InputField from '../UI/InputField';
import MainButton from '../UI/MainButton';
import BottomLine from '../UI/BottomLine';

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.body}>
      <Header title="Create New Account" />
      <InputField placeholder="Enter username" iconName="user" />
      <InputField
        placeholder="Enter email"
        keyboardType="email-address"
        iconName="envelope"
      />
      <InputField
        placeholder="Enter password"
        secureTextEntry={true}
        iconName="lock"
      />
      <InputField
        placeholder="Confirm password"
        iconName="lock"
        secureTextEntry={true}
      />
      {/* Trịnh Gia Bảo - 21521866 */}
      <MainButton title="CREATE" />
      <BottomLine
        content="Already have an account?"
        action="Login now!"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default SignUpScreen;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 40,
  },
});
