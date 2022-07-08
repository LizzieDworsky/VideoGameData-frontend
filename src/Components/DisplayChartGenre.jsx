import React from "react";
import { Chart } from "react-google-charts";

const DisplayChartGenre = ({ array }) => {
    function generateDataForChart() {
        let genres = array.map((item) => item.genre);
        let distinctGenres = [...new Set(genres)];

        let genreArrays = distinctGenres.map((item) => {
            let allGamesInGenre = array.filter((game) => game.genre === item);

            let sum = 0;
            for (let i = 0; i < allGamesInGenre.length; i++) {
                sum += allGamesInGenre[i].globalsales;
            }

            return [item, sum, "#3366CC"];
        });

        console.log(genreArrays);

        const data = [
            ["Genre", "Global Sales in Millions", { role: "style" }],
            ...genreArrays,
        ];
        return data;
    }

    return (
        <div>
            <Chart
                chartType="ColumnChart"
                width="100%"
                height="400px"
                data={generateDataForChart()}
            />
        </div>
    );
};

export default DisplayChartGenre;
