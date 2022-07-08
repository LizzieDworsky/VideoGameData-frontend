import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const DisplayChart = ({ array }) => {
    function generateDataForChart() {
        let platforms = array.map((game) => game.platform);
        let distinctPlatforms = [...new Set(platforms)];

        let platformArrays = distinctPlatforms.map((item) => {
            let allGamesForPlatform = array.filter(
                (game) => game.platform === item
            );
            console.log(item, allGamesForPlatform);
            return [item, 10, "silver"];
        });

        const data = [
            ["Platform", "Global Sales", { role: "style" }],
            ...platformArrays,
        ];

        return data;
    }

    return (
        <div>
            <h1>Hello</h1>
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
