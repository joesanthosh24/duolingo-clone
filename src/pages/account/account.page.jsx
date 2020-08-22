import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useDataContext } from "../../context/Provider";
import {
  changeColor,
  addLearningLanguage,
} from "../../context/actions/actions";

import db from "../../firebase";

import "./account.styles.css";

import ProfileHeader from "../../components/profile-header/profile-header.component";
import ChooseLanguage from "../../components/choose-language/choose-language.component";

const AccountPage = () => {
  const [{ user, learningLanguages }, dispatch] = useDataContext();
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.replace("/");
    }

    changeColor(dispatch, "white");
  }, [user]);

  useEffect(() => {
    if (user?.id) {
      db.collection("users")
        .doc(user.id)
        .collection("languages")
        .onSnapshot((snapshot) => {
          snapshot.docs.map((doc) => {
            addLearningLanguage(dispatch, doc.data());
          });
        });
    }
  }, [user]);

  return (
    <div className="accountPage">
      <ProfileHeader />
      {/* SideContent */}
      {/* Lessons or Choose Courses */}
      {learningLanguages?.length > 0 ? <h1>Lessons</h1> : <ChooseLanguage />}
    </div>
  );
};

export default AccountPage;
