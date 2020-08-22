import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Storefront, MoreHoriz, Whatshot, ExitToApp } from "@material-ui/icons";
import { IconButton, Avatar } from "@material-ui/core";

import { useDataContext } from "../../context/Provider";
import { logOut, clearLearningLanguages } from "../../context/actions/actions";

import { auth } from "../../firebase";

import "./profile-header.styles.css";

import Language from "../language/language.component";

const ProfileHeader = () => {
  const [{ languages, user, learningLanguages }, dispatch] = useDataContext();
  const history = useHistory();

  const logout = () => {
    auth.signOut().then((success) => {
      logOut(dispatch);
      clearLearningLanguages(dispatch);
    });
  };

  console.log(learningLanguages[0]);
  return (
    <div className="profileHeader">
      <div className="profileHeader__main">
        <div className="profileHeader__section">
          <img
            src="//d35aaqx5ub95lt.cloudfront.net/images/icons/learn.svg"
            alt="Learn"
          />
          <span>Learn</span>
        </div>
        <div className="profileHeader__section">
          <img
            src="//d35aaqx5ub95lt.cloudfront.net/images/icons/discuss-inactive.svg"
            alt="Discuss"
          />
          <span>Discuss</span>
        </div>
        <div className="profileHeader__section">
          <Storefront />
          <span>Shop</span>
        </div>
        <div className="profileHeader__section">
          <IconButton>
            <MoreHoriz />
          </IconButton>
          <span>More</span>
        </div>
      </div>
      <div className="profileHeader__right">
        <div className="profileHeader__section">
          {learningLanguages?.length > 0 ? (
            // <Language
            //   name={learningLanguages[0].name}
            //   flagUrl={learningLanguages[0].flagUrl}
            // />
            <img
              class="flag"
              src={learningLanguages[0].flagUrl}
              alt={learningLanguages[0].name}
            />
          ) : null}
        </div>
        <div className="profileHeader__section">
          <img
            src="//d35aaqx5ub95lt.cloudfront.net/web-ui/images/b3ede3d53c932ee30d981064671c8032.svg"
            alt="Crown"
          />
          <span>0</span>
        </div>
        <div className="profileHeader__section">
          <Whatshot />
          <span>0</span>
        </div>
        <div className="profileHeader__section">
          <img
            src="//d35aaqx5ub95lt.cloudfront.net/web-ui/images/icons/9d4f704de73abbe35b631a2279ae1fe7.svg"
            alt="Lingots"
          />
          <span>0</span>
        </div>
        {user ? (
          <div className="profileHeader__section">
            <Avatar
              src="//duolingo-images.s3.amazonaws.com/avatars/332507057/wvziqc0s4A/medium"
              alt="Profile"
            />
          </div>
        ) : null}
        <div className="profileHeader__section signOut" onClick={logout}>
          <ExitToApp />
          <span>Sign Out</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
