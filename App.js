// Trịnh Gia Bảo - 21521866
import React from 'react';
import {AuthContextProvider} from './context/auth-context';
import MainStack from './navigation/MainNavigation';

const App = () => {
  return (
    <AuthContextProvider>
      <MainStack />
    </AuthContextProvider>
  );
};

export default App;
