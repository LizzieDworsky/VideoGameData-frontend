import React from "react";
import { Chart } from "react-google-charts";

const DisplayChart = ({ array }) => {
    function generateDataForChart() {
        let platforms = array.map((game) => game.platform);
        let distinctPlatforms = [...new Set(platforms)];

        let platformArrays = distinctPlatforms.map((item) => {
            let allGamesForPlatform = array.filter(
                (game) => game.platform === item
            );
            let sum = 0;
            let newSum;
            for (let i = 0; i < allGamesForPlatform.length; i++) {
                sum += allGamesForPlatform[i].globalsales;
            }
            console.log(newSum);
            return [item, sum, "#3366CC"];
        });

        const data = [
            ["Platform", "Global Sales", { role: "style" }],
            ...platformArrays,
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

export default DisplayChart;
