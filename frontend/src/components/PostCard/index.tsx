import React from 'react';
 
import User from '../../assets/images/profile.svg';

import { Card, Profile, Content, Header, Body } from './style';

import { Post } from '../../pages/Dashboard';

const PostCard: React.FC<Post> = ( props ) => {
  return( 
    <Card>
      <Profile>
        <img src={User} alt="User"/>
      </Profile>
      <Content>
        <Header>
          <h1><b>{props.user_name}</b></h1>
          <p>{props.date_post}</p>
        </Header>
        <Body>
          <h1><b>{props.title}</b></h1>
          <p>{props.content}</p>
        </Body>
      </Content>
    </Card>
  )
}

export default PostCard;