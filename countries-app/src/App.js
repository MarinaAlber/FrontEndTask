import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header";

import "./App.scss";
import AllCountries from "./pages/AllCountries";

class App extends React.Component {
  state = {
    isDarkTheme: false,
  };

  toggleThemeHandler = () => {
    this.setState((prevState) => ({
      isDarkTheme: !prevState.isDarkTheme,
    }));
  };

  render() {
    const { isDarkTheme } = this.state;
    return (
      <Router>
        <div className={`countries-app ${isDarkTheme ? "dark-mode" : ""}`}>
          <Header isDark={isDarkTheme} toggleTheme={this.toggleThemeHandler} />
          <Switch>
            <Route exact path="/">
              <AllCountries />
            </Route>
            <Route exact path="/details/:name">
              {() => <div className="alt-state">details</div>}
            </Route>

            <Route path="*">
              {() => <div className="alt-state">not found</div>}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
