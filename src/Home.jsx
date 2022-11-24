import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";

function Home() {
  return (
    <div className="home">
      <div className="divLogo">
        {" "}
        <img className="logoHome" src={logo} alt="" />
      </div>

      <button className="buttonHome">
        <Link
          style={{ textDecoration: "none", color: "rgb(20, 20, 20)" }}
          to="/characters"
        >
          All characters
        </Link>
      </button>
      <button className="buttonHome">
        <Link
          style={{ textDecoration: "none", color: "rgb(20, 20, 20)" }}
          to="/game"
        >
          Let's play a game
        </Link>
      </button>
    </div>
  );
}

export default Home;
