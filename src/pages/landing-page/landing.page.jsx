import React from "react";

import "./landing.styles.css";

import Navbar from "../../components/navbar/navbar.component";
import MainContent from "../../components/landing-main/landing-main.component";

const LandingPage = ({ languages }) => {
  return (
    <>
      <Navbar  />
      <MainContent />
    </>
  );
};

export default LandingPage;
