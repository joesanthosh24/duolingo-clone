import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import "./navbar.styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img
        width="153px"
        height="36px"
        className="navbar__logo"
        src="//d35aaqx5ub95lt.cloudfront.net/images/logo-white.svg"
        alt="duolingo logo"
      />
      <div className="navbar__right">
        Site Language: <span>English</span>
        <div className="navbar__rightLanguageDropdown">
          <ArrowDropDownIcon />
        </div>
        <div className="navbar__loginSignUp">
          <button id="signUp">Get Started</button>
          <button id="login">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
