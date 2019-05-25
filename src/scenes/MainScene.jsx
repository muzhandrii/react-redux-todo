import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from './router';
import { Header, Nav, TodoList } from '../components';

function MainScene() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path={routes.index} component={TodoList} />
        <Route path={routes.new} component={TodoList} />
        <Route path={routes.completed} component={TodoList} />
      </Switch>
      <Nav />
    </div>
  );
}

export default MainScene;
