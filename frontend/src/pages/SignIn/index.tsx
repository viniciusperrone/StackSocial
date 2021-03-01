import React from 'react';
import { Link } from 'react-router-dom';

import Background from '../../components/Background';
import ConteinerPublic from '../../components/ConteinerPublic';
import ConteinerImage from '../../components/ConteinerImage';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { FormFirst, FormSecond } from './style';

const SignIn: React.FC = () => {
  const space = " ";
  return(
    <>
      <Background>
        <ConteinerPublic width="80%" height="75%">
          <FormFirst >
            <ConteinerImage />
          </FormFirst >
          <FormSecond>
            <h1>Sign In</h1>
            <label>username</label>
            <Input />
            <label>password</label>
            <Input />
            <Button>
              Login
            </Button>
            <p>
              Don't have an account?{space}
              <Link to="/signup">
                Sign up!
              </Link>
            </p>
          </FormSecond>
        </ConteinerPublic>
      </Background>
    </>
  )
}

export default SignIn;