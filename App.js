// import 'react-native-gesture-handler';
import React from 'react';
import {AuthContextProvider} from './context/auth-context';
import Main from './UI/Wrapper';

const App = () => {
  return (
    <AuthContextProvider>
      <Main />
    </AuthContextProvider>
  );
};

export default App;
