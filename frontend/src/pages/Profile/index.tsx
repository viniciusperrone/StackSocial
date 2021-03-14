import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Background from '../../components/Background';
import Header from '../../components/Header';
import Input from '../../components/Input';

import UserProfile from '../../assets/images/profile.svg';
import { Conteiner, Content, HeaderContent, BodyContent } from './style';

import api from '../../server/api';
import { ButtonMain } from '../../components/Button/style';

interface ProfileUpdate{
  username: string;
  email: string;
}

interface ProfileText{
  name: string;
  email: string;
}
const Profile: React.FC = () => {

  const history = useHistory();

  const[profile, setProfile] = useState<ProfileText>({
    name: "",
    email: ""
  });

  const [update, setUpdate] = useState<ProfileUpdate>({
    username: "",
    email: ""
  });

  useEffect(() => {
    const userExist = localStorage.getItem('user');

    const user = userExist !== null ? JSON.parse(userExist) : null
    
    setUpdate({
      username: user.username,
      email: user.email
    });

    setProfile({
      name: user.username,
      email: user.email
    })


  }, []);

  async function updateProfile(){
    if(update.email.trim().length >= 5 && update.username.trim().length >= 5){
      
      const userExist = localStorage.getItem('user');

      const user = userExist !== null ? JSON.parse(userExist) : null;

      const id_user = user.id;

      console.log({
        id_user,
        ...update
      });
  
      const response = await api.put('/profile', {
        id: id_user,
        username: update.username,
        email: update.email
      });

      if(response){
        history.push('/dashboard');
      }
    }
  }

  return(
    <>
      <Background justifyContent="none" alignItems="none">
        <Header />
        <Conteiner>
          <Content>
            <HeaderContent>
              <img src={UserProfile} alt=""/>
              <div>
                <h1><b>{profile.name}</b></h1>
                <p>{profile.email}</p>
              </div>
            </HeaderContent>
            <BodyContent>
              <h1>User Info</h1>
              <hr />
              <h1>Username</h1>
              <Input 
                type="text"
                value={update.username}
                onChange={ (e:any) => setUpdate({
                  username: e.target.value,
                  email: update.email
                })}
              />
              <h1>Email</h1>
              <Input 
                type="text"
                value={update.email}
                onChange={ (e:any) => setUpdate({
                  username: update.username,
                  email: e.target.value
                })}
              />
              <ButtonMain onClick={updateProfile} style={{cursor: `pointer`}}>Update</ButtonMain>
            </BodyContent>
          </Content>
        </Conteiner>
      </Background>
    </>
  )
}

export default Profile;