import React from "react";

import { useDataContext } from "../../context/Provider";

import "./landing-main.styles.css";

import FooterLanguage from "../footer-language/footer-language.component";

const MainContent = () => {
  const [{ languages }] = useDataContext();

  return (
    <div className="mainContent">
      <div className="mainContent__header">
        {/* <div className="mainContent__globe"></div> */}
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
