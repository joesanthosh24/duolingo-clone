import React, { useEffect } from "react";

import "./landing.styles.css";

import { changeColor } from "../../context/actions/actions";
import { useDataContext } from "../../context/Provider";

import Navbar from "../../components/navbar/navbar.component";
import MainContent from "../../components/landing-main/landing-main.component";

const LandingPage = ({ languages }) => {
  const dispatch = useDataContext()[1];

  useEffect(() => {
    changeColor(dispatch, "#13518B");
  }, [dispatch])

  return (
    <div className="accountPage">
      <Navbar />
      <MainContent />
    </div>
  );
};

export default LandingPage;
