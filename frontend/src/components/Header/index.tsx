import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderConteiner } from './style';

const Header: React.FC = () =>{ 
  
  return(
    <HeaderConteiner>
      <h1> <b>Stack Social</b></h1>
      <h1><Link to="/dashboard">Home</Link></h1>
      <h1><Link to="/about">About</Link></h1>          
      <h1><Link to="/post">New Post</Link></h1>
      <h1><Link to="/profile">Profile</Link></h1>
      
      <h1><span onClick={() => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }}><Link to="/logout">Logout</Link></span></h1>
    </HeaderConteiner>
  )
}

export default Header;