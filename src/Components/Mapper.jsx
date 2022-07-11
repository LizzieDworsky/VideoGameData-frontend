import React from "react";
import Game from "./Game";

const Mapper = ({ array }) => {
    return (
        <ul>
            {array.map((item) => (
                <li key={item.id}>
                    <Game item={item} array={array} />
                    <hr />
                </li>
            ))}
        </ul>
    );
};

export default Mapper;
