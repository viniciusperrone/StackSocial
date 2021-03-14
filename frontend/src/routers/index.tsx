import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import About from '../pages/About';
import Post from '../pages/Post';
import Profile from '../pages/Profile';
import Logout from '../pages/Logout';
import Update from '../pages/Update';

const Routers: React.FC = () => {
  return(
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/logout" component={Logout} />
      <Route path="/dashboard"component={Dashboard} isPrivate/>
      <Route path="/post" component={Post} isPrivate/>
      <Route path="/profile" component={Profile} isPrivate/>
      <Route path="/about" component={About} isPrivate/>
      <Route path="/update" component={Update} isPrivate/>
    </Switch>
  )
}

export default Routers;