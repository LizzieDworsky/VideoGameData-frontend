import React from "react";
import DisplayChartPerConsole from "./DisplayChartPerConsole";

const Game = ({ item, array }) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>{item.genre}</p>
            <p>{item.platform}</p>
            <p>{item.pubpsher}</p>
            <p>{item.year}</p>
            <DisplayChartPerConsole game={item} array={array} />
        </div>
    );
};

export default Game;
