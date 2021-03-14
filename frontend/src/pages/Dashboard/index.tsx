import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import PostCard from '../../components/PostCard';

import { Conteiner } from './style';

import api from '../../server/api';
import { BackgroundConteiner } from '../../components/Background/style';

export interface Post{
  id: number;
  title: string;
  content: string;
  user_id: string;
  user_name: string;
  date_post: string;
}

const Dashboard: React.FC = () => {

  const history = useHistory();

  const [posts, setPosts] = useState<Post[]>([]); 

  useEffect(() => {
    async function getPosts(){
      const response = await api.get<Post[]>('/dashboard');
      setPosts(response.data);
     
    }

    getPosts();
  }, []);

  function handleUpdatePost(id_post: number, username: string,title: string, content: string){
    
    const userExist = localStorage.getItem('user');

    const user = userExist !== null ? JSON.parse(userExist) : null;

    const name = user.username;

    if(name === username){

      const post = {
        id: id_post,
        username: username,
        title: title,
        content: content
      }

      localStorage.setItem('post', JSON.stringify(post));

      history.push(`/update?id_post=${id_post}`);
    }

  }
  
  return(
    <>
      <BackgroundConteiner justifyContent="none" alignItems="none">
        <Header />
        <Conteiner>
          {
            posts.map(post => (
              <ul key={post.id}>
                <span onClick={() => handleUpdatePost(post.id, post.user_name,post.title, post.content)} style={{cursor: `pointer`}}><PostCard {...post}/></span>
              </ul>
              )
            )
          }
          
        </Conteiner>
      </BackgroundConteiner>
    </>
  )
}

export default Dashboard;