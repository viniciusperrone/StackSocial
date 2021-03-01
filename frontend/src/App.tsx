import React from 'react';
import Routers from './routers';

import GlobalStyle from './style/global';

const App: React.FC = () => {
  return (
    <>
      <Routers />
      <GlobalStyle />
    </>
  );
}

export default App;
