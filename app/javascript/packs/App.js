import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import NotFound from "./pages/notfound";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              render={NotFound}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
