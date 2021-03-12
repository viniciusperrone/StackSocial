import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Background from '../../components/Background';
import ConteinerPublic from '../../components/ConteinerPublic';
import ConteinerImage from '../../components/ConteinerImage';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

import { messages } from '../../utils/message'

import { FormFirst, FormSecond } from './style';
import { ButtonMain } from '../../components/Button/style';

import api from '../../server/api';

interface UserData{
  username: string;
  password: string; 
}

interface SignInResponse{
  user: Object;
  token: string;
}

const SignIn: React.FC = () => {
  const space = " ";

  const history = useHistory();

  const [show, setShow] = useState(false);

  const [user, setUser] = useState<UserData>({
    username: "",
    password: ""
  });

  function closedModalHandler (){
    return setShow(false);
  }

  async function handleSignIn (){
    const validation = 
      user.username.trim().length >= 5 && user.password.trim().length >= 5 
    
    if(validation){
      console.log(user);
      const response = await api.post<SignInResponse>('/', {
        username: user.username,
        password: user.password
      });

      console.log(response);

      if(response){
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
        api.defaults.headers.authorization = `Bearer ${response.data.token}`;
        history.push('/dashboard');

      }
    } 

  }

  return(
    <>
      <div>
      { show ? <div style={{
          background: `rgba(63,61,61,0.8)`,
          height: `100%`,
          width: `100%`,
          position: `absolute`,
          zIndex: 9,
          transition: `all 1.3s`,
        }}></div> : null}
      </div>

      <Background justifyContent="center" alignItems="center">


        <ConteinerPublic width="80%" height="75%">
          <FormFirst >
            <ConteinerImage />
          </FormFirst >
          <FormSecond>
            <h1>Sign In</h1>
            <label>username</label>
            <Input 
              type="text" 
              value={user.username} 
              onChange={ (e: any)  => setUser({
                username: e.target.value,
                password: user.password
              })}
            />
            <label>password</label>
            <Input type="password"
            value={user.password} 
            onChange={ (e: any)  => setUser({
              username: user.username,
              password: e.target.value
            })}
          />
            <ButtonMain onClick={handleSignIn}>
              Login
            </ButtonMain>
            
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