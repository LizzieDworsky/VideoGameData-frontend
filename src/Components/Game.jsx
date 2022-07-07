import React from "react";

const Game = ({ item }) => {
    return (
        <div>
            <li>{item.name}</li>
            <li>{item.genre}</li>
            <li>{item.platform}</li>
            <li>{item.publisher}</li>
            <li>{item.year}</li>
        </div>
    );
};

export default Game;
