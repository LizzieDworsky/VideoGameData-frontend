import React from "react";
import { Chart } from "react-google-charts";

const DisplayChartGenre = ({ array }) => {
    const options = {
        backgroundColor: "#c4e8e6",
    };
    function generateDataForChart() {
        let genres = array.map((item) => item.genre);
        let distinctGenres = [...new Set(genres)];

        let genreArrays = distinctGenres.map((item) => {
            let allGamesInGenre = array.filter((game) => game.genre === item);

            let sum = 0;
            for (let i = 0; i < allGamesInGenre.length; i++) {
                sum += allGamesInGenre[i].globalsales;
            }

            return [item, sum, "#3366CC", sum];
        });

        const data = [
            [
                "Genre",
                "Global Sales in Millions",
                { role: "style" },
                { role: "annotation" },
            ],
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
                options={options}
            />
        </div>
    );
};

export default DisplayChartGenre;
