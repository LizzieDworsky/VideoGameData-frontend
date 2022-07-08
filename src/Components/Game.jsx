import React from "react";

const Game = ({ item }) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>{item.genre}</p>
            <p>{item.platform}</p>
            <p>{item.pubpsher}</p>
            <p>{item.year}</p>
        </div>
    );
};

export default Game;
