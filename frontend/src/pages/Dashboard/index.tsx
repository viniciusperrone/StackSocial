import React from 'react';
// import { Link } from 'react-router-dom';

import Background from '../../components/Background';
import Header from '../../components/Header';
import PostCard from '../../components/PostCard';

import { Conteiner } from './style';

const Dashboard: React.FC = () => {
  return(
    <>
      <Background justifyContent="none" alignItems="none">
        <Header />
        <Conteiner>
          <PostCard />
        </Conteiner>
      </Background>
    </>
  )
}

export default Dashboard;