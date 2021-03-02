import React from 'react';
import { Link } from 'react-router-dom';

import Background from '../../components/Background';
import Header from '../../components/Header';
import ConteinerPrivate from '../../components/ConteinerPrivate';

const Dashboard: React.FC = () => {
  return(
    <>
      <Background justifyContent="none" alignItems="none">
        <Header />
        <ConteinerPrivate>
          <h1>Vinicius</h1>
        </ConteinerPrivate>
        {/* <Footer /> */}
      </Background>
    </>
  )
}

export default Dashboard;