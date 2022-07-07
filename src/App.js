import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
    const [videoGames, setVideoGames] = useState([]);

    useEffect(() => {
        getAllGames();
    }, []);

    async function getAllGames() {
        let response = await axios.get("http://localhost:8080/all");
        setVideoGames(response.data);
    }

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}

export default App;
