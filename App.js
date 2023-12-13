// Trịnh Gia Bảo - 21521866
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
