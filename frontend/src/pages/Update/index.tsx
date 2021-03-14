import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Background from '../../components/Background';
import { ButtonMain } from '../../components/Button/style';
import Header from '../../components/Header';
import Input from '../../components/Input';

import { HeaderPost, Content, TextField } from './style';

import api from '../../server/api';

interface PostDelete{
  id: number
}

interface PostUpdate{
  id_post: number;
  id_user: string
  title: string;
  content: string;
}
const Update: React.FC = () => {

  const history = useHistory();

  const [postDelete, setPostDelete] = useState<PostDelete>({
    id: 0
  });

  const [postUpdate, setPostUpdate] = useState<PostUpdate>({
    id_post: 0,
    id_user: "",
    title: "",
    content: ""
  });

  useEffect(() => {
    function getPost(){
      const postExist = localStorage.getItem('post');

      const post = postExist !== null ? JSON.parse(postExist) : null;

      setPostUpdate({
        id_post: post.id,
        id_user: "",
        title: post.title,
        content: post.content
      });

    }

    getPost();
  }, []);

  async function setUpdate(){
    const validation = postUpdate.title.trim().length >= 1 && postUpdate.title.trim().length >= 1;

    if(validation){
      const postAlready = localStorage.getItem('post');
 
      const userAlready = localStorage.getItem('user');

      const post = postAlready !== null ? JSON.parse(postAlready) : null;
 
      const user = userAlready !== null ? JSON.parse(userAlready) : null;
      
      const response = await api.put<PostUpdate>('/update', {
        id_post: post.id,
        id_user: String(user.id),
        title: postUpdate.title,
        content: postUpdate.content
      });

      if(response){
        localStorage.removeItem('post');
        history.push('/dashboard');
      } else{
        console.log('Error');
      }
    }else{
      console.log('Validation Error');
    }
  }

  async function deletePost(){
    const postAlready = localStorage.getItem('post');

    const post = postAlready !== null ? JSON.parse(postAlready) : null;

    setPostDelete({
      id: post.id
    })

    const response = await api.delete(`/delete/${post.id}`);
 
    if(response){
      console.log(post.id);
      localStorage.removeItem('post');
      history.push('/dashboard');
    }


  }
  return(
    <>
      <Background justifyContent="none" alignItems="none">
        <Header />

        <Content>
          <HeaderPost>
            <h1>Update Post</h1>
          </HeaderPost>
            <h1>Title: </h1>
            <Input 
              type="text"
              value={postUpdate.title}
              onChange={(e: any) => setPostUpdate({
                id_post: postUpdate.id_post,
                id_user: postUpdate.id_user,
                title: e.target.value,
                content: postUpdate.content
              })}
            />
            <h1>Content: </h1>
            <TextField 
              value={postUpdate.content}
              onChange={(e:any) => setPostUpdate({
                id_post: postUpdate.id_post,
                id_user: postUpdate.id_user,
                title: postUpdate.title,
                content: e.target.value
              })}
            />
            <ButtonMain onClick={setUpdate}>Update</ButtonMain>
            <ButtonMain onClick={deletePost}>Delete</ButtonMain>

        </Content>
      </Background>
    </>
  )
}

export default Update;