import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

import Background from '../../components/Background';
import Header from '../../components/Header';
import PostCard from '../../components/PostCard';

import { Conteiner } from './style';

import api from '../../server/api';

export interface Post{
  id: number;
  title: string;
  content: string;
  user_id: string;
  user_name: string;
  date_post: string;
}

const Dashboard: React.FC = () => {

  const [posts, setPosts] = useState<Post[]>([]); 

  useEffect(() => {
    async function getPosts(){
      const response = await api.get<Post[]>('/dashboard');
      setPosts(response.data);
     
    }

    getPosts();
  }, []);
  
  return(
    <>
      <Background justifyContent="none" alignItems="none">)
        <Header />
        <Conteiner>
          {
            posts.map(post => (
              <ul key={post.id}>
                <PostCard {...post}/>
              </ul>
              )
            )
          }
          
        </Conteiner>
      </Background>
    </>
  )
}

export default Dashboard;