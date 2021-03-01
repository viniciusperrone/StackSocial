import React from 'react';
import { Link } from 'react-router-dom';

import Background from '../../components/Background';
import ConteinerPublic from '../../components/ConteinerPublic';
import ConteinerImage from '../../components/ConteinerImage';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { FormFirst, FormSecond } from './style';

const SignUp: React.FC = () => {
  const space = " ";
  return(
    <>
      <Background>
        <ConteinerPublic width="80%" height="90%">
          <FormFirst >
            <h1>Sign Up</h1>
            <label>username</label>
            <Input />
            <label>email</label>
            <Input />
            <label>password</label>
            <Input />
            <label>confirm</label>
            <Input />
            <Button>
              Create
            </Button>
            <p>
              Already have an account?{space}
              <Link to="/">
                Sign in!
              </Link>
            </p>
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