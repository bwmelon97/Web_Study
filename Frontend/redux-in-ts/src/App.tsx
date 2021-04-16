import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, PostList, PostDetail } from "./components";


function App() {
  return (
    <Switch>
      <Route exact path='/' > <Home /> </Route>
      <Route exact path='/posts' > <PostList /> </Route>
      <Route path='/posts/:id' > <PostDetail /> </Route>
    </Switch>
  );
}

export default App;
