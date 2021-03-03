import React from 'react';
 
import User from '../../assets/images/profile.svg';

import { Card, Profile, Content, Header, Body } from './style';

const PostCard: React.FC = () => {
  return( 
    <Card>
      <Profile>
        <img src={User} alt="User"/>
      </Profile>
      <Content>
        <Header>
          <h1><b>Vinicius Perrone</b></h1>
          <p>Jan 01 2021</p>
        </Header>
        <Body>
          <h1><b>Title</b></h1>
          <p>Content</p>
        </Body>
      </Content>
    </Card>
  )
}

export default PostCard;