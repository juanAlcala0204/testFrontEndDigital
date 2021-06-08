/** Import Dependencies */
import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

/** Import Components */
import {
  Home,
  Albums,
  Posts,
  Users
} from '../modules/index'

import Main from '../layouts/Main'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Main>
          <Route exact path="/" component={Home}></Route>
          <Route exact strict path={["/(.+)"]}>
            <Route path="/Users" component={Users}></Route>
            <Route path="/Albums" component={Albums}></Route>
            <Route path="/Posts" component={Posts}></Route>
          </Route>
        </Main>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
