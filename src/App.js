import axios from "axios";
import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import Mapper from "./Components/Mapper";
import DisplayChartConsole from "./Components/DisplayChartConsole";
import DisplayChartGenre from "./Components/DisplayChartGenre";

function App() {
    const [videoGames, setVideoGames] = useState([]);
    const [recentVideoGames, setRecentVideoGames] = useState([]);
    const [filter, setFilter] = useState("");
    const [filteredGames, setFilteredGames] = useState([]);
    const [chartDisplay, setChartDisplay] = useState(true);

    useEffect(() => {
        getAllGames();
    }, []);

    useEffect(() => {
        filterRecentGames();
    }, [videoGames]);

    async function getAllGames() {
        let response = await axios.get("http://localhost:8080/all");
        setVideoGames(response.data);
    }

    function filterRecentGames() {
        let tempFilter = videoGames.filter((item) => {
            if (item.year > 2012) {
                return true;
            }
        });
        setRecentVideoGames(tempFilter);
    }

    function filterGames() {
        let tempFilter = videoGames.filter((item) => {
            if (item.name.includes(filter)) {
                return true;
            }
        });
        setFilteredGames(tempFilter);
    }

    function changeToConsoleChart() {
        if (!chartDisplay) {
            setChartDisplay(true);
        }
    }

    function changeToGenreChart() {
        if (chartDisplay) {
            setChartDisplay(false);
        }
    }

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <div>
                    {chartDisplay ? (
                        <DisplayChartConsole array={recentVideoGames} />
                    ) : (
                        <DisplayChartGenre array={recentVideoGames} />
                    )}
                    <p onClick={changeToConsoleChart}>By Console</p>
                    <p onClick={changeToGenreChart}>By Genre</p>
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
