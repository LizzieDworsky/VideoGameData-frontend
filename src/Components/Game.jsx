import React from "react";
import DisplayChartPerConsole from "./DisplayChartPerConsole";

const Game = ({ item, array }) => {
    return (
        <div>
            <h3 className="mapped-item-heading">{item.name}</h3>
            <p className="mapped-item">Genre: {item.genre}</p>
            <p className="mapped-item">Publisher: {item.publisher}</p>
            <p className="mapped-item">Release Year: {item.year}</p>
            <DisplayChartPerConsole game={item} array={array} />
        </div>
    );
};

export default Game;
