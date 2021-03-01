import React from 'react';

import Background from '../../components/Background';
import ConteinerPublic from '../../components/ConteinerPublic';
import ConteinerImage from '../../components/ConteinerImage';

import { FormFirst, FormSecond } from './style';

const SignUp: React.FC = () => {
  return(
    <>
      <Background>
        <ConteinerPublic>
          <FormFirst >
            <h1>Sign Up</h1>
            <label>Ok</label>
          </FormFirst >
          <FormSecond>
            <ConteinerImage />
          </FormSecond>
        </ConteinerPublic>
      </Background>
    </>
  )
}

export default SignUp;