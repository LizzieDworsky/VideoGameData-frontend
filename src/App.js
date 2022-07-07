import axios from "axios";
import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";

function App() {
    const [videoGames, setVideoGames] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        getAllGames();
    }, []);

    async function getAllGames() {
        let response = await axios.get("http://localhost:8080/all");
        setVideoGames(response.data);
    }

    function filterGames() {
        let tempFilter = videoGames.filter((item) => {
            if (item.name.includes(filter)) {
                return true;
            }
        });
        console.log(tempFilter);
        setVideoGames(tempFilter);
    }

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <div>
                    <h3>Search for Games to Learn More</h3>
                    <SearchBar setState={setFilter} />
                    <button onClick={filterGames}>Search</button>
                </div>
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
