import React from 'react';

import Background from '../../components/Background';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import UserProfile from '../../assets/images/profile.svg';
import { Conteiner, Content, HeaderContent, BodyContent } from './style';

const Profile: React.FC = () => {
  return(
    <>
      <Background justifyContent="none" alignItems="none">
        <Header />
        <Conteiner>
          <Content>
            <HeaderContent>
              <img src={UserProfile} alt=""/>
              <div>
                <h1><b>Vinicius Perrone</b></h1>
                <p>exemplo123@gmail.com</p>
              </div>
            </HeaderContent>
            <BodyContent>
              <h1>User Info</h1>
              <hr />
              <h1>Username</h1>
              <Input type="text" />
              <h1>Email</h1>
              <Input type="text" />
              <Button>Update</Button>
            </BodyContent>
          </Content>
        </Conteiner>
      </Background>
    </>
  )
}

export default Profile;