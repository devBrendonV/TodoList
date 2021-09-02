import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../views/Home";
import TodoList from "../views/TodoList";
const Content = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/TodoList">
          <TodoList />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
