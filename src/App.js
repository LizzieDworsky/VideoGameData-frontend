import axios from "axios";
import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import Mapper from "./Components/Mapper";
import DisplayChart from "./Components/DisplayChart";

function App() {
    const [videoGames, setVideoGames] = useState([]);
    const [recentVideoGames, setRecentVideoGames] = useState([]);
    const [filter, setFilter] = useState("");
    const [filteredGames, setFilteredGames] = useState([]);

    useEffect(() => {
        getAllGames();
    }, []);

    useEffect(() => {
        filterRecentGames();
    }, [videoGames]);

    async function getAllGames() {
        let response = await axios.get("http://localhost:8080/all");
        console.log(response.data);
        setVideoGames(response.data);
    }

    function filterRecentGames() {
        let tempFilter = videoGames.filter((item) => {
            if (item.year > 2012) {
                return true;
            }
        });
        console.log(tempFilter);
        setRecentVideoGames(tempFilter);
    }

    function filterGames() {
        let tempFilter = videoGames.filter((item) => {
            if (item.name.includes(filter)) {
                return true;
            }
        });
        console.log(tempFilter);
        setFilteredGames(tempFilter);
    }

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <div>
                    <DisplayChart array={recentVideoGames} />
                </div>
                <div>
                    <h3>Search for Games to Learn More</h3>
                    <SearchBar setState={setFilter} />
                    <button onClick={filterGames}>Search</button>
                    {filteredGames[0] ? <Mapper array={filteredGames} /> : null}
                </div>
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
