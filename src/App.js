import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import db from "./firebase";

import { setLanguages } from "./context/actions/actions";
import { useDataContext } from "./context/Provider";

import "./App.css";

import LandingPage from "./pages/landing-page/landing.page.jsx";

function App() {
  const [{}, dispatch] = useDataContext();

  useEffect(() => {
    db.collection("languages").onSnapshot((snapshot) => {
      const languages = snapshot.docs.map((doc) => ({
        id: doc.id,
        language: doc.data()
      }));

      setLanguages(dispatch, languages);
    });
  });

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
