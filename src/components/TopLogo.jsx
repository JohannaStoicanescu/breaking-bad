import React from "react";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const TopLogo = () => {
  return (
    <div className="logo">
      <Link to="/" >
        <img src={logo} alt="breaking-bad" />
      </Link>
    </div>
  );
};

export default TopLogo;
