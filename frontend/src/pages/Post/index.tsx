import React from 'react';

import Background from '../../components/Background';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { HeaderPost, Content, TextField } from './style';

const Post: React.FC = () => {
  return(
    <>
      <Background justifyContent="none" alignItems="none">
        <Header />
        <Content>
          <HeaderPost>
            <h1>Create Post</h1>
          </HeaderPost>
          <h1>Title: </h1>
          <Input type="text"/>
          <h1>Content: </h1>
          <TextField />
          <Button>Post</Button>
        </Content>
      </Background>
    </>
  )
}

export default Post;