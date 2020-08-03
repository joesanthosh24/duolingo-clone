import React, { useState, useEffect } from "react";
import { ArrowDropDown } from "@material-ui/icons";
import { ClickAwayListener } from "@material-ui/core";

import db from "../../firebase";

import "./navbar.styles.css";

const Navbar = () => {
  const [selectedLanguage, setselectedLanguage] = useState("English");
  const [languages, setLanguages] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    db.collection("languages").onSnapshot((snapshot) => {
      setLanguages(
        snapshot.docs.map((doc) => ({ id: doc.id, language: doc.data() }))
      );
    });
  });

  const selectLanguage = (name) => {
    setselectedLanguage(name);
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <img
        width="153px"
        height="36px"
        className="navbar__logo"
        src="//d35aaqx5ub95lt.cloudfront.net/images/logo-white.svg"
        alt="duolingo logo"
      />
      <div className="navbar__right">
        Choose Language: <span>{selectedLanguage}</span>
        <div className="navbar__rightLanguageDropdown">
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <>
              <ArrowDropDown onClick={() => setOpen(true)} />
              {open ? (
                <div>
                  {languages.map(({ id, language: { name, flagUrl } }) => (
                    <div
                      key={id}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p onClick={() => selectLanguage(name)}>{name}</p>
                      <img
                        src={flagUrl}
                        alt={`Flag of country speaking ${name}`}
                        style={{
                          objectFit: "contain",
                          height: "20px",
                          width: "20px",
                        }}
                      />
                    </div>
                  ))}
                </div>
              ) : null}
            </>
          </ClickAwayListener>
        </div>
        {!open ? (
          <div className="navbar__loginSignUp">
            <button id="signUp">Get Started</button>
            <button id="login">Login</button>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
