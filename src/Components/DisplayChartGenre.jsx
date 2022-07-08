import React from "react";
import { Chart } from "react-google-charts";

const DisplayChartGenre = ({ array }) => {
    function generateDataForChart() {
        let genres = array.map((item) => item.genre);
        let distinctGenres = [...new Set(genres)];

        let genreArrays = distinctGenres.map((item) => {
            return [item, 10, "#3366CC"];
        });

        console.log(genreArrays);

        const data = [
            ["Genre", "Global Sales", { role: "style" }],
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
