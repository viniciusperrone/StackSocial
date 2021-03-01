import React from 'react';

import Background from '../../components/Background';
import ConteinerPublic from '../../components/ConteinerPublic';
import ConteinerImage from '../../components/ConteinerImage';

import { FormFirst, FormSecond } from './style';

const SignIn: React.FC = () => {
  return(
    <>
      <Background>
        <ConteinerPublic>
          <FormFirst >
            <ConteinerImage />
          </FormFirst >
          <FormSecond>
            <h1>Vinicius</h1>
            
          </FormSecond>
        </ConteinerPublic>
      </Background>
    </>
  )
}

export default SignIn;