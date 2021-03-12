import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import Post from '../pages/Post';
import Profile from '../pages/Profile';
import Logout from '../pages/Logout';
import Test from '../pages/Test';

const Routers: React.FC = () => {
  return(
    <BrowserRouter>
      <Route path="/" exact component={SignIn}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/dashboard"component={Dashboard}/>
      <Route path="/post" component={Post}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/about" component={About}/>
      <Route path="/logout" component={Logout}/>
      <Route path="/test" component={Test}/>
    </BrowserRouter>
  )
}

export default Routers;