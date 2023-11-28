// Trịnh Gia Bảo - 21521866
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import MainButton from '../UI/MainButton';
import Header from '../UI/Header';
import BottomLine from '../UI/BottomLine';
import InputField from '../UI/InputField';
import {useAuthContext} from '../context/auth-context';

const LoginScreen = ({navigation}) => {
  const {onLogin, email, password, onChangeEmail, onChangePassword} =
    useAuthContext();

  const loginHandler = () => {
    onLogin(email, password);
    Keyboard.dismiss();
  };
  // Trịnh Gia Bảo - 21521866
  return (
    <View style={styles.body}>
      <Header title="Welcome" />
      <InputField
        placeholder="Email"
        keyboardType="email-address"
        iconName="envelope"
        value={email}
        onChangeText={onChangeEmail}
      />
      <InputField
        placeholder="Password"
        iconName="lock"
        secureTextEntry={true}
        value={password}
        onChangeText={onChangePassword}
      />

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.pinkText}>Forgot password?</Text>
      </TouchableOpacity>

      <MainButton title="LOG IN" onPress={loginHandler} />
      {/* Trịnh Gia Bảo - 21521866 */}
      <View style={styles.loginOption}>
        <Text style={styles.blackBoldText}>Or login with</Text>
        <View style={styles.logoOptionLogo}>
          <Image
            style={styles.logo}
            source={require('../assets/facebook_logo.png')}
          />
          <Image
            style={styles.logo}
            source={require('../assets/google_logo.png')}
          />
        </View>
      </View>

      <BottomLine
        content={`Don't have an account?`}
        action="Sign up here!"
        onPress={() => navigation.navigate('Sign up')}
      />
    </View>
  );
};

export default LoginScreen;
// Trịnh Gia Bảo - 21521866
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 40,
  },

  loginOption: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoOptionLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  logo: {
    width: 60,
    height: 60,
    margin: 10,
    borderRadius: 50,
  },
  // Trịnh Gia Bảo - 21521866
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  pinkText: {
    color: '#DA67A3',
    marginTop: 5,
  },

  blackBoldText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
