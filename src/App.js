import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import db, { auth } from "./firebase";

import { setLanguages, setUser, changeColor } from "./context/actions/actions";
import { useDataContext } from "./context/Provider";

import "./App.css";

import LandingPage from "./pages/landing-page/landing.page.jsx";
import AccountPage from "./pages/account/account.page";

function App() {
  const [{ color }, dispatch] = useDataContext();

  useEffect(() => {
    db.collection("languages").onSnapshot((snapshot) => {
      const languages = snapshot.docs.map((doc) => ({
        id: doc.id,
        language: doc.data(),
      }));

      setLanguages(dispatch, languages);
    });
  }, [dispatch]);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("In user auth state");
        db.collection("users").onSnapshot((sn) => {
          const user = sn.docs.find(
            (user) => user.data().username === authUser.displayName
          );

          setUser(dispatch, {id: user?.id, user: user?.data()});
        });
      }
    });
  }, [dispatch]);

  return (
    <div className="app" style={{ backgroundColor: color }}>
      <Router>
        <Switch>
          <Route path="/account" component={AccountPage} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
