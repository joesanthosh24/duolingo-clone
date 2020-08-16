import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useDataContext } from "../../context/Provider";

import "./landing-main.styles.css";

import FooterLanguage from "../footer-language/footer-language.component";

const MainContent = () => {
  const history = useHistory();
  const [{ languages, user }] = useDataContext();

  useEffect(() => {
    return function initialize() {
      if(user) {
        history.push('/account');
      }
      else {
        return;
      }
    }
  }, [user, history]);

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
          return <FooterLanguage key={id} name={name} flagUrl={flagUrl} />;
        })}
      </div>
    </div>
  );
};

export default MainContent;
