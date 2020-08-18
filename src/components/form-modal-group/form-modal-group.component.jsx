import React, { Fragment } from "react";

import database, { auth } from "../../firebase";

import { useDataContext } from "../../context/Provider";
import { closeLogin, closeSignUp } from "../../context/actions/actions";

import FormModal from "../form-modal/form-modal.component";

const FormModalGroup = () => {
  const [{ signUpModalOpen, loginModalOpen }, dispatch] = useDataContext();

  const handleCloseSignUp = () => {
    closeSignUp(dispatch);
  };

  const handleCloseLogin = () => {
    closeLogin(dispatch);
  };

  const submitSignUp = async (email, password, username) => {
    auth.createUserWithEmailAndPassword(email, password).then((user) => {
      return user.user
        .updateProfile({
          displayName: username,
        })
        .then((res) => {
          database.collection("users").add({
            username: username,
            email: email,
            _id: user.user.uid,
          });
        });
    });
  };

  const submitLogin = async (email, password) => {
    await auth.signInWithEmailAndPassword(email, password);
  };

  return (
    <Fragment>
      <FormModal
        buttonText="Sign Up"
        showModal={signUpModalOpen}
        closeModal={handleCloseSignUp}
        submit={submitSignUp}
      />
      <FormModal
        buttonText="Log In"
        showModal={loginModalOpen}
        closeModal={handleCloseLogin}
        submit={submitLogin}
        noUsername
      />
    </Fragment>
  );
};

export default FormModalGroup;
