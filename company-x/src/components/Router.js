import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import App from '../App'
import Blog from '../pages/Blog'
import AboutUs from '../pages/AboutUs'
import NotFound from './NotFound'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/about" component={AboutUs} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router;