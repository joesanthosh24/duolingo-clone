import React, { useState } from "react";
import { Button } from "@material-ui/core";

import "./choose-language.styles.css";

import db from "../../firebase";

import { useDataContext } from "../../context/Provider";

import Language from "../language/language.component";

const ChooseLanguage = () => {
  const [{ languages, user }] = useDataContext();
  const [chosenLanguages, setChosenLanguages] = useState([]);

  const handleClick = (name, flagUrl) => {
    let lang = chosenLanguages.find((language) => language.name === name);
    if (!lang) {
      setChosenLanguages([...chosenLanguages, { name, flagUrl }]);
      console.log(chosenLanguages);
    } else {
      setChosenLanguages(chosenLanguages.filter((lang) => lang.name !== name));
      console.log(chosenLanguages);
    }
  };

  const addLanguages = () => {
    console.log(chosenLanguages);
    chosenLanguages.map(async (lang) => {
      await db
        .collection("users")
        .doc(user.id)
        .collection("languages")
        .add({...lang, lessons: ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4", "Lesson 5", "Lesson 6", "Lesson 7"]});
    });
  };

  return (
    <div className="chooseLanguage">
      <h1>Choose Languages</h1>
      <div className="chooseLanguage__container">
        {languages.map(({ id, language: { flagUrl, name } }) => (
          <Language
            key={id}
            flagUrl={flagUrl}
            name={name}
            showText
            blackText
            customStyle={{
              flexDirection: "column",
              padding: "10px",
              border: "1px solid #e0ece4",
              marginRight: "20px",
              marginLeft: "10px",
              borderRadius: "20px",
              flexWrap: "wrap",
              cursor: "pointer",
            }}
            hover
            click={handleClick}
          />
        ))}
      </div>
      <Button onClick={addLanguages}>Add Languages</Button>
    </div>
  );
};

export default ChooseLanguage;
