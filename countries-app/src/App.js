import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
function App() {
  return (
    <Router>
      <div className="countries-app">
        <Switch>
          <Route exact path="/">
            {() => "listing page"}
          </Route>
          <Route path="/details">{() => "details"}</Route>

          <Route path="*">{() => "not found"}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
