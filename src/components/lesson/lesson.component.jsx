import React from "react";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

import "./lesson.styles.css";

const Lesson = ({ lessonName }) => {
  return (
    <div className="lesson">
      <div className="lesson__container">
        <div className="lesson__innerContainer">
          <LibraryBooksIcon />
        </div>
      </div>
      <p className="lesson__title">{lessonName}</p>
    </div>
  );
};

export default Lesson;
