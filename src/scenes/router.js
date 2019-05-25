import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainScene from './MainScene';

export const routes = {
  index: '/',
  new: '/new',
  completed: '/completed',
};

function Router() {
  return (
    <BrowserRouter>
      <Route path={routes.index} component={MainScene} />
    </BrowserRouter>
  );
}

export default Router;
