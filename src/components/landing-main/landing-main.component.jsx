import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useDataContext } from "../../context/Provider";

import "./landing-main.styles.css";

import Language from "../language/language.component";

const MainContent = () => {
  const history = useHistory();
  const [{ languages, user }] = useDataContext();

  useEffect(() => {
    function initialize() {
      if(user) {
        history.push('/account');
      }
      else {
        return;
      }
    }

    initialize();
  }, [user]);

  return (
    <div className="mainContent">
      <div className="mainContent__header">
        <div className="mainContent__heading">
          <h1>Learn a language for free. Forever</h1>
          <button id="main_signUp">Get Started</button>
          <button id="main_login">Already Have an Account</button>
        </div>
      </div>
      <div className="mainContent__footer">
        {languages.map(({ id, language: { name, flagUrl } }) => {
          return <Language key={id} name={name} flagUrl={flagUrl} />;
        })}
      </div>
    </div>
  );
};

export default MainContent;
