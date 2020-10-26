import React from "react";
import Constants from "../../../utils/js/Constants";
import "./Header.css";
const Header = (props) => {
  return (
    <header>
      <h1>{Constants.HEADER.TITLE}</h1>
    </header>
  );
};

export default Header;
