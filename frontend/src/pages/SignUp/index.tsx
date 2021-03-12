import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Background from '../../components/Background';
import ConteinerPublic from '../../components/ConteinerPublic';
import ConteinerImage from '../../components/ConteinerImage';
import Input from '../../components/Input';
import Modal from '../../components/Modal';

import { FormFirst, FormSecond } from './style';
import { ButtonMain } from '../../components/Button/style';

interface UserData{
  username: string;
  email: string;
  password: string;
}
const SignUp: React.FC = () => {
  const space = " ";

  const [user, setUser] = useState<UserData>({
    username: "",
    email: "",
    password: ""
  });

  const [show, setShow] = useState(false);

  function closedModalHandler (){
    return setShow(false);
  }

  console.log(user);
  return(
    <>
      { show ? <div style={{
          background: `rgba(63,61,61,0.8)`,
          height: `100%`,
          width: `100%`,
          position: `absolute`,
          zIndex: 9,
          transition: `all 1.3s`,
      }}></div> : null}

      <Background justifyContent="center" alignItems="center">
        <Modal message="Failed in compare it's not ok!" show={show} closedModalHandler={closedModalHandler}/>

        <ConteinerPublic width="80%" height="90%">
          <FormFirst >
            <h1>Sign Up</h1>
            <label>username</label>
            <Input 
              type="text"
              value={user.username}
              onChange={ (e: any) => setUser({
                username: e.target.value,
                email: user.email,
                password: user.password
              })}
            />
            <label>email</label>
            <Input 
              type="text"
              value={user.email}
              onChange={ (e: any) => setUser({
                username: user.username,
                email: e.target.value,
                password: user.password
              })}
            />
            <label>password</label>
            <Input 
              type="password"
              value={user.password}
              onChange={ (e: any) => setUser({
                username: user.username,
                email: user.email,
                password: e.target.value 
              })}
            />
            <label>confirm</label>
            <Input 
              type="password"
            />
            <ButtonMain onClick={() => setShow(true)} style={{ cursor: `pointer`}}>
              Create
            </ButtonMain>
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