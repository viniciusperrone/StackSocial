import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import Post from '../pages/Post';
import Profile from '../pages/Profile';
import Logout from '../pages/Logout';

const Routers: React.FC = () => {
  return(
    <BrowserRouter>
      <Route path="/" exact component={SignIn}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/dashboard"component={Dashboard}/>
      <Route path="/post" component={About}/>
      <Route path="/profile" component={Post}/>
      <Route path="/about" component={Profile}/>
      <Route path="/logout" component={Logout}/>

    </BrowserRouter>
  )
}

export default Routers;