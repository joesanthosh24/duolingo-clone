import React from "react";

import "./language.styles.css";

const Language = ({ flagUrl, name, showText }) => {
  return (
    <div className="footerLanguage">
      <div className="footerLanguage__flagContainer">
        <img src={flagUrl} alt={`${name} language's main country flag`} />
      </div>
      {showText ? <p>{name}</p> : null}
    </div>
  );
};

export default Language;
