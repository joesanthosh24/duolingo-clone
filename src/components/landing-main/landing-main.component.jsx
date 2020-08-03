import React from "react";

import "./landing-main.styles.css";

const MainContent = () => {
  return (
    <div className="mainContent">
      <div className="mainContent__globe">
      </div>
      <div className="mainContent__heading">
        <h1>Learn a language for free. Forever</h1>
        <button id="main_signUp">Get Started</button>
        <button id="main_login">Already Have an Account</button>
      </div>
    </div>
  );
};

export default MainContent;
