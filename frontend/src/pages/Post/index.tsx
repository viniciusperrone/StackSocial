import React, { useState, useEffect } from 'react';

import Background from '../../components/Background';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import { messages } from '../../utils/message';

import { HeaderPost, Content, TextField } from './style';

import api from '../../server/api';
import { ButtonMain } from '../../components/Button/style';

interface PostCreate {
  title: string;
  content: string;
  id_user: string;
}
const Post: React.FC = () => {

  const [post, setPost] = useState<PostCreate>({
    title: "",
    content: "",
    id_user: ""
  });

  useEffect(() => {
    const user = localStorage.getItem('user');

    const userExist = user != null ? JSON.parse(user) : null;

    const id = userExist != null ? userExist.id : null;

    return setPost({
      title: post.title,
      content: post.content,
      id_user: String(id)
    });
  }, []);

  const [show, setShow] = useState(false);

  async function handlePost(){
    const validation = post.title.trim().length >= 1 && post.content.trim().length >= 1 && post.id_user != '';

    if(validation){
      
      setPost({
        title: post.title,
        content: post.content,
        id_user: post.id_user
      });

      console.log(post);

      const response = await api.post<PostCreate>('/post',{
        title: post.title,
        content: post.content,
        id_user: post.id_user
      });

      console.log(response);

      if(!response){
        console.log('fmoefme');
      }
    }
    else{
      setShow(true);
    }
  }

  function closedModalHandler (){
    return setShow(false);
  }
  return(
    <>
      <Background justifyContent="none" alignItems="none">
        
        <Modal message={messages.postSucess} show={show} closedModalHandler={closedModalHandler}/>

        <Header />
        <Content>
          <HeaderPost>
            <h1>Create Post</h1>
          </HeaderPost>
          <h1>Title: </h1>
          <Input 
            type="text"
            value={post.title}
            onChange={ (e: any) => setPost({
              title: e.target.value,
              content: post.content,
              id_user: post.id_user
            }) 
          }

          />
          <h1>Content: </h1>
          <TextField 
            value={post.content} 
            onChange={ (e: any) => setPost({
              title: post.title,
              content: e.target.value,
              id_user: post.id_user
              })
            }
          />
          <ButtonMain onClick={handlePost}>Post</ButtonMain>
        </Content>
      </Background>
    </>
  )
}

export default Post;