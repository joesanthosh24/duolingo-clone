import React, { useState } from "react";
import { Modal } from "@material-ui/core";

import { auth } from "../../firebase";

import { useDataContext } from "../../context/Provider";

import "./navbar.styles.css";

const Navbar = () => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const signUp = () => {
    setShowSignUpModal(true);
  };

  const login = () => {
    setShowLoginModal(true);
  };

  const handleCloseSignUp = () => {
    setShowSignUpModal(false);
  };

  const handleCloseLogin = () => {
    setShowLoginModal(false);
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
      <Modal open={showSignUpModal} onClose={handleCloseSignUp}>
        <h1>Sign Up</h1>
      </Modal>
    </nav>
  );
};

export default Navbar;
