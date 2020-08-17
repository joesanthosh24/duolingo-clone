import React from "react";

import { useDataContext } from "../../context/Provider";

import "./account.styles.css";

import ProfileHeader from "../../components/profile-header/profile-header.component";

const AccountPage = () => {
  const [{ user }] = useDataContext();

  return (
    <div className="accountPage">
      {/* ProfileHeader */}
      <ProfileHeader />
      {/* Lessons */}
      {/* SideContent */}
    </div>
  );
};

export default AccountPage;
