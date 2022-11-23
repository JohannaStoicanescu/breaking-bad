import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BurgerQuiz.css";
import "./GamePlay.css";
import Footer from "./Footer";
import TopLogo from "./TopLogo";
function BurgerQuiz() {
  /*const [finalScore, setFinalScore] = useState(false);*/
  const [score, setScore] = useState(0);
  const [currentQuote, setCurrentQuote] = useState({ quote: "" });
  const [answers, setAnswers] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [resultat, setResultat] = useState();
  const [disabled, setDisabled] = useState(false);
  const getQuote = () => {
    axios
      .get("https://www.breakingbadapi.com/api/quote/random")
      .then((response) => response.data)
      .then((data) => {
        setCurrentQuote(data[0]);
      });
  };

  const getCharacters = () => {
    axios
      .get("https://www.breakingbadapi.com/api/characters")
      .then((response) => response.data)
      .then((data) => {
        setCharacters(data);
      });
  };

  useEffect(() => {
    getCharacters();
    getQuote();
  }, []);

  useEffect(() => {
    if (characters.length && currentQuote) {
      randomCharacters();
      setResultat("");
      setDisabled(false);
    }
  }, [characters, currentQuote]);

  const randomCharacters = () => {
    const i = Math.floor(Math.random() * (characters.length - 2));
    setAnswers(
      shuffle([currentQuote.author, characters[i + 1].name, characters[i].name])
    );
  };

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  const result = (el) => {
    //TODO change le texte de resultat
    if (currentQuote.author === el) {
      setResultat("Good");
      setScore(score + 1);
    } else {
      setResultat("Wrong");
    }
  };

  return (
    <div className="burgerQuiz">
      <TopLogo />
      <div className="topBurger">
        <h3 className="titleBurger">Guess the character</h3>
        <h3 className="quoteBurger">" {currentQuote.quote} "</h3>
      </div>

      <p>{resultat}</p>
      <div className="buttons">
        {" "}
        {answers.map((el) => {
          return (
            <button
              disabled={disabled}
              key={el}
              onClick={() => {
                result(el);
                setTimeout(() => {
                  getQuote();
                }, 1500);
                setDisabled(true);
              }}
            >
              {el}
            </button>
          );
        })}
      </div>

      <p className="score">Score : {score}</p>
      <Footer />
    </div>
  );
}

export default BurgerQuiz;
