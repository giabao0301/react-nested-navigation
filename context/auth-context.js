// Trịnh Gia Bảo - 21521866
import React, {useState, useContext, createContext} from 'react';
import {Alert} from 'react-native';

const AuthContext = createContext({
  email: '',
  password: '',
  onChangeEmail: () => {},
  onChangePassword: () => {},
  isAuthenticated: false,
  onLogin: (email, password) => {},
  onLogout: () => {},
});

export const AuthContextProvider = props => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const changeEmailHandler = enteredValue => {
    setEnteredEmail(enteredValue);
  };

  const changePasswordHandler = enteredValue => {
    setEnteredPassword(enteredValue);
  };
  // Trịnh Gia Bảo - 21521866
  const loginHandler = (email, password) => {
    if (email === '21521866@gm.uit.edu.vn' && password === '123456789') {
      setIsAuthenticated(true);
    } else {
      Alert.alert('Incorrect email or password.', '', [
        {
          text: 'OK',
          onPress: () => console.log('OK pressed'),
        },
      ]);
    }
  };

  const logoutHandler = () => {
    setIsAuthenticated(false);
  };
  // Trịnh Gia Bảo - 21521866
  return (
    <AuthContext.Provider
      value={{
        email: enteredEmail,
        password: enteredPassword,
        onChangeEmail: changeEmailHandler,
        onChangePassword: changePasswordHandler,
        isAuthenticated: isAuthenticated,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
