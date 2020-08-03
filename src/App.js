import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import "./App.css";

import LandingPage from "./pages/landing-page/landing.page.jsx";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route to="/" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
