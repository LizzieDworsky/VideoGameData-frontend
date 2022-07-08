import React from "react";
import DisplayChartPerConsole from "./DisplayChartPerConsole";

const Game = ({ item }) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>{item.genre}</p>
            <p>{item.platform}</p>
            <p>{item.pubpsher}</p>
            <p>{item.year}</p>
            <DisplayChartPerConsole game={item} />
        </div>
    );
};

export default Game;
