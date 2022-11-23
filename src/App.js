import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character";
import Search from "./components/Search";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import "./App.css";
import TopLogo from "./components/TopLogo";

const initialQuote = {
  text: "Quote",
  author: "Author",
};

const App = () => {
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
        <h3>Quotes and Characters</h3>
        <Quote quote={quote} />
        <button onClick={() => updateQuote()}>Random Quote</button>
      </div>
      <Search getQuery={searchFunction} />
      <Character isLoading={isLoading} items={items} />
      <Footer />
    </div>
  );
};

export default App;
