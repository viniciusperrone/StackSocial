import React from 'react';
import { Link } from 'react-router-dom';

import Background from '../../components/Background';
import ConteinerPublic from '../../components/ConteinerPublic';
import ConteinerImage from '../../components/ConteinerImage';

import { FirstForm, SecondForm } from './style';
const Logout: React.FC = () => {
  return(
    <>
      <Background justifyContent="center" alignItems="center">
        <ConteinerPublic width="80%" height="75%">
          <FirstForm>
            <ConteinerImage />
          </FirstForm>
          <SecondForm>
            <h1><Link to="/">Sign In</Link></h1>
            <p>Thank you and welcome back!</p>
          </SecondForm>
        </ConteinerPublic>
      </Background>
    </>
  )
}

export default Logout;