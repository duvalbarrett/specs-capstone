import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/games.css";

const Games = () => {
  const [gamesData, setgamesData] = useState([]);

  useEffect(() => {
    const getGames = () => {
      axios
        .get("http://localhost:4041/api/games")
        .then((res) => {
          setgamesData(res.data[0]);
        })
        .catch((err) => {
          console.error(err.response.data);
        });
    };
    getGames();
  });

  const gamesDisplay = gamesData.map((items) => {
    function GamesCard({ game_id, name, photo, price }) {
      return (
        <div className="games-card-container" key={game_id}>
          <h1 className="game-name">{name}</h1>
          <img className="game-photo" src={photo} alt="" />
          <h2 className="game-price">${price}</h2>
        </div>
      );
    }
    return <GamesCard {...items} />;
  });

  return (
    <div className="games">
      <div className="games-container">{gamesDisplay}</div>
    </div>
  );
};

export default Games;
