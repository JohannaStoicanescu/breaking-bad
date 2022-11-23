import React from "react";
import CharacterItem from "./CharacterInfo";

const Character = ({ items }) => {
  return (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default Character;
