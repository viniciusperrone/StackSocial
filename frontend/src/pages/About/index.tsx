import React from 'react';

import Background from '../../components/Background';
import Header from '../../components/Header';

import Logo from '../../assets/images/icon.svg';

import { Content } from './style';

const About: React.FC = () => {
  return(
    <>
      <Background justifyContent="none" alignItems="none">
        <Header />
        <Content>
          <h1>Join us in this community to live the feeling of helping</h1>
          <p>Be a code helper or ask for help! Go through your difficulties and find for wayas</p>
          <p>everyone has the ability to do everything...</p>
          <img src={Logo} alt="Stack Social"/>
          <p>By Vinicius Perrone</p>
        </Content>
      </Background>
    </>
  )
}

export default About;