import React from "react";
import { Chart } from "react-google-charts";

const DisplayChartConsole = ({ array }) => {
    const options = {
        title: "Global Sales in Millions",
        isStacked: true,
    };

    function generateDataForChart() {
        let platforms = array.map((game) => game.platform);
        let distinctPlatforms = [...new Set(platforms)];

        let platformArrays = distinctPlatforms.map((item) => {
            let allGamesForPlatform = array.filter(
                (game) => game.platform === item
            );

            let publishers = allGamesForPlatform.map((game) => game.publisher);
            let distinctPublishers = [...new Set(publishers)];
            console.log(item, distinctPublishers);

            let sum = 0;
            for (let i = 0; i < allGamesForPlatform.length; i++) {
                sum += allGamesForPlatform[i].globalsales;
            }
            return [item, sum, "#3366CC"];
        });

        const data = [
            ["Platform", "Global Sales in Millions", { role: "style" }],
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
                options={options}
            />
        </div>
    );
};

export default DisplayChartConsole;
