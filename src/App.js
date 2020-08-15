import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import db, { auth } from "./firebase";

import { setLanguages, setUser } from "./context/actions/actions";
import { useDataContext } from "./context/Provider";

import "./App.css";

import LandingPage from "./pages/landing-page/landing.page.jsx";

function App() {
  const [_, dispatch] = useDataContext();

  useEffect(() => {
    db.collection("languages").onSnapshot((snapshot) => {
      const languages = snapshot.docs.map((doc) => ({
        id: doc.id,
        language: doc.data()
      }));

      setLanguages(dispatch, languages);
    });
  }, [dispatch]);

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        setUser(dispatch, authUser);
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" component={LandingPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
