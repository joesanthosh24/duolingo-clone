import React from "react";

import "./language.styles.css";

const Language = ({ flagUrl, name }) => {
  return (
    <div className="footerLanguage">
      <div className="footerLanguage__flagContainer">
        <img src={flagUrl} alt={`${name} language's main country flag`} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default Language;
