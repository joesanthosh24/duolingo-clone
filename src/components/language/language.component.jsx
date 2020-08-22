import React, { useState } from "react";

import "./language.styles.css";

const Language = ({
  flagUrl,
  name,
  showText,
  blackText,
  customStyle,
  hover,
  click,
}) => {
  const [selected, setSelected] = useState(false);

  const chooseLang = (name, flagUrl) => {
    if (click && hover) {
      setSelected(!selected);
      console.log(name);
      click(name, flagUrl);
    }
  };

  return (
    <div
      className={`language ${hover && "hover"} ${selected && "selected"}`}
      style={customStyle}
      onClick={() => chooseLang(name, flagUrl)}
    >
      <div className="language__flagContainer">
        <img src={flagUrl} alt={`${name} language's main country flag`} />
      </div>
      {showText ? (
        <p style={{ color: `${blackText ? "black" : "white"}` }}>{name}</p>
      ) : null}
    </div>
  );
};

export default Language;
