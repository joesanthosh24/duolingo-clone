import React from "react";

import { useDataContext } from "../../context/Provider";

import "./account.styles.css";

const AccountPage = () => {
  const [{ user }] = useDataContext();

  return (
    <div className="accountPage">
      <h1>
        Hi <span>{user?.username}</span> Welcome To Your Account
      </h1>
    </div>
  );
};

export default AccountPage;
