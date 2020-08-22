import React from "react";

import { useDataContext } from "../../context/Provider";
import { openLogin, openSignUp } from "../../context/actions/actions";

import "./navbar.styles.css";
import FormModalGroup from "../form-modal-group/form-modal-group.component";

const Navbar = () => {
  const dispatch = useDataContext()[1];

  const signUp = () => {
    openSignUp(dispatch);
  };

  const login = () => {
    openLogin(dispatch);
  };

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
        <div className="navbar__loginSignUp">
          <button onClick={signUp} id="signUp">
            Get Started
          </button>
          <button onClick={login} id="login">
            Login
          </button>
        </div>
      </div>
      <FormModalGroup />
    </nav>
  );
};

export default Navbar;
