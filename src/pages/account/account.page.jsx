import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useDataContext } from "../../context/Provider";
import { changeColor } from "../../context/actions/actions";

import "./account.styles.css";

import ProfileHeader from "../../components/profile-header/profile-header.component";

const AccountPage = () => {
  const [{ user, color }, dispatch] = useDataContext();
  const history = useHistory();

  useEffect(() => {
    if(!user) {
      history.replace("/");
    }

    changeColor(dispatch, "white");
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
