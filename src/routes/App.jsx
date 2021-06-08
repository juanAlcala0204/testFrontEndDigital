/** Import Dependencies */
import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

/** Import Components */
import {
  Home
} from '../modules/index'

import Main from '../layouts/Main'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Main>
          <Route path="/" component={Home}></Route>
          <Route exact strict path={["/(.+)"]}>
          </Route>
        </Main>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
