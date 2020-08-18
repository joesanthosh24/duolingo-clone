import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useDataContext } from "../../context/Provider";

import "./account.styles.css";

import ProfileHeader from "../../components/profile-header/profile-header.component";

const AccountPage = () => {
  const [{ user }] = useDataContext();
  const history = useHistory();

  useEffect(() => {
    if(!user) {
      history.replace("/");
    }
  }, [user]);

  return (
    <div className="accountPage">
      {/* ProfileHeader */}
      <ProfileHeader />
      {/* Lessons or Choose Courses */}
      {/* SideContent */}
    </div>
  );
};

export default AccountPage;
