import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <button className="buttonHome">
        <Link to="/characters">All characters</Link>
      </button>
      <button className="buttonHome">
        <Link to="/game">Let's play a game</Link>
      </button>
    </div>
  );
}

export default Home;
