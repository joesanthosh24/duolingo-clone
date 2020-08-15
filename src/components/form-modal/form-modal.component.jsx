import React, { useState } from "react";
import { Modal } from "@material-ui/core";

import "./form-modal.styles.css";

const FormModal = ({ showModal, closeModal, buttonText, submit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    submit(email, password, username);
    setEmail("");
    setPassword("");
    setUsername("");
    closeModal();
  }

  return (
    <Modal open={showModal} onClose={closeModal}>
      <div className="modal">
        <img
          width="153px"
          height="36px"
          className="modal__logo"
          src="//d35aaqx5ub95lt.cloudfront.net/images/logo-white.svg"
          alt="duolingo logo"
        />
        <form className="modal__form" onSubmit={submitForm}>
          <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    </Modal>
  );
};

export default FormModal;
