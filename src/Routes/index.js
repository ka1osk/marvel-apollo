import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import Form from "pages/Form";

export default () => {
  function NoMatch() {
    let location = useLocation();

    return (
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/character/:id" component={Detail} />
      <Route exact path="/character/:id/edit" component={Form} />

      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
};
