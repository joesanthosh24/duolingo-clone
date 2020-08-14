import React, { useState } from "react";

import { auth } from "../../firebase";

import { useDataContext } from "../../context/Provider";
import { setUser } from "../../context/actions/actions";

import "./navbar.styles.css";

import FormModal from "../form-modal/form-modal.component";

const Navbar = () => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const [{ user }, dispatch] = useDataContext();

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

  const submitSignUp = async (email, password) => {
    const user = await auth.createUserWithEmailAndPassword(email, password);

    setUser(dispatch, user);
  }

  const submitLogin = async (email, password) => {
    const user = await auth.signInWithEmailAndPassword(email, password);

    setUser(dispatch, user);
  }

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
        {!user ? (<div className="navbar__loginSignUp">
          <button onClick={signUp} id="signUp">
            Get Started
          </button>
          <button onClick={login} id="login">
            Login
          </button>
        </div>) : <p>Hello {user.user.email}</p>}
      </div>
      <FormModal buttonText="Sign Up" showModal={showSignUpModal} closeModal={handleCloseSignUp} submit={submitSignUp} />
      <FormModal buttonText="Log In" showModal={showLoginModal} closeModal={handleCloseLogin} submit={submitLogin} />
    </nav>
  );
};

export default Navbar;
