import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (el) => {
    setText(el);
    getQuery(el);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form"
          placeholder=" Search Character"
          value={text}
          onChange={(el) => onChange(el.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
