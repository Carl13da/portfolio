import React from 'react';

import GlobalStyle from './assets/styles/global';
import Header from './components/Header/index';
import Main from './pages/Main/index';

function App() {
  return (
    <>
      <Header />
      <Main />
      <GlobalStyle />
    </>
  );
}

export default App;
