import React from "react";

const CharacterItem = ({ item }) => {
  return (
    <div className="card">
      <img src={item.img} alt="" />

      <div className="cardInfo">
        <h1>{item.name}</h1>
        <ul style={{ listStyle: "none" }}>
          <li>
            <strong>AKA :</strong> {item.nickname}
          </li>
          <li>
            <strong>Actor :</strong> {item.portrayed}
          </li>

          <li>
            <strong>Birthday :</strong> {item.birthday}
          </li>
          <li>
            <strong>Status :</strong> {item.status}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterItem;
