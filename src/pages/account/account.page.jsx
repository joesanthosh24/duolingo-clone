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
import Lesson from "../../components/lesson/lesson.component";

const AccountPage = () => {
  const [{ user, learningLanguages }, dispatch] = useDataContext();
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.replace("/");
    }

    changeColor(dispatch, "white");
  }, [user, history, dispatch]);

  useEffect(() => {
    if (user?.id) {
      db.collection("users")
        .doc(user.id)
        .collection("languages")
        .onSnapshot((snapshot) => {
          snapshot.docs.map((doc) => {
            return addLearningLanguage(dispatch, doc.data());
          });
        });
    }
  }, [user, dispatch]);

  console.log(learningLanguages);

  return (
    <div className="accountPage">
      <ProfileHeader />
      {/* SideContent */}
      {/* Lessons or Choose Courses */}
      {learningLanguages?.length > 0 ? (
        <div className="accountPage__container">
          <div className="accountpage__lessons">
            {learningLanguages[0].lessons.map((lesson) => (
              <Lesson lessonName={lesson} />
            ))}
          </div>
        </div>
      ) : (
        <ChooseLanguage />
      )}
    </div>
  );
};

export default AccountPage;
