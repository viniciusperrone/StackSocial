import React from 'react';

import Background from '../../components/Background';
import Header from '../../components/Header';

const Post: React.FC = () => {
  return(
    <>
      <Background justifyContent="none" alignItems="none">
        <Header />
        Post
      </Background>
    </>
  )
}

export default Post;