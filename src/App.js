import axios from "axios";
import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";

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
            <header>
                <NavBar />
            </header>
        </div>
    );
}

export default App;
