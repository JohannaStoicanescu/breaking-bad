import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character";
import Search from "./Search";
import Quote from "./Quote";
import Footer from "./Footer";
import BurgerQuiz from "./BurgerQuiz";
import "./GamePlay.css";
import TopLogo from "./TopLogo";

const initialQuote = {
  text: "Quote",
  author: "Author",
};

const GamePlay = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  const searchFunction = (el) => {
    setQuery(el);
  };

  const [quote, setQuote] = useState(initialQuote);

  const updateQuote = async () => {
    const url = "https://www.breakingbadapi.com/api/quote/random";
    const res = await fetch(url);
    const [newQuote] = await res.json();

    const { quote: text, author } = newQuote;

    setQuote({
      text,
      author,
    });
  };

  useEffect(() => {
    updateQuote();
  }, []);

  return (
    <div className="main">
      <TopLogo />
      <div className="quote">
        <h3>Find a random quote</h3>
        <Quote quote={quote} />
        <button onClick={() => updateQuote()}>Random Quote</button>
      </div>
      <Search getQuery={searchFunction} />
      <Character isLoading={isLoading} items={items} />
      <Footer />
    </div>
  );
};

export default GamePlay;
