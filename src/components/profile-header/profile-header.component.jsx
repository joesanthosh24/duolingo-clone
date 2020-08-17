import React from "react";
import { Storefront, MoreHoriz } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

import { useDataContext } from "../../context/Provider";

import "./profile-header.styles.css";

import Language from "../language/language.component";

const ProfileHeader = () => {
  const [{ languages }] = useDataContext();

  console.log(languages[0]);
  return (
    <div className="profileHeader">
      <div className="profileHeader__main">
        <div className="profileHeader__section">
          <img
            src="//d35aaqx5ub95lt.cloudfront.net/images/icons/learn.svg"
            alt="Learn"
          />
          <p>Learn</p>
        </div>
        <div className="profileHeader__section">
          <img
            src="//d35aaqx5ub95lt.cloudfront.net/images/icons/discuss-inactive.svg"
            alt="Discuss"
          />
          <p>Discuss</p>
        </div>
        <div className="profileHeader__section">
          <Storefront />
          <p>Shop</p>
        </div>
        <div className="profileHeader__section">
          <IconButton>
            <MoreHoriz />
          </IconButton>
          <p>More</p>
        </div>
      </div>
      <div className="profileHeader__right">
          
      </div>
    </div>
  );
};

export default ProfileHeader;
