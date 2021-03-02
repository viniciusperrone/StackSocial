import React from 'react';

import Background from '../../components/Background';
import Header from '../../components/Header';

const Logout: React.FC = () => {
  return(
    <>
      <Background justifyContent="none" alignItems="none">
        <Header />
        Logout
      </Background>
    </>
  )
}

export default Logout;