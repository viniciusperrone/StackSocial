import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './style/global';

import Routers from './routers';

const App: React.FC = () => {
  return (
    <Router>
      <Routers />
      <GlobalStyle />
    </Router>
  );
}

export default App;
