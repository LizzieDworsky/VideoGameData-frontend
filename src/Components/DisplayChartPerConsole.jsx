import React, { useState } from "react";
import { Chart } from "react-google-charts";

const DisplayChartPerConsole = ({ game, array }) => {
    const [displayChartBool, setDisplayChartBool] = useState(false);
    // now I need to do a compar or the game and find any matching titles, then use that data to create the chart

    const options = {
        title: "Amount Sold Per Console",
        is3D: true,
    };

    function generateDataForChart() {
        let sameGame = array.filter((item) => {
            if (item.name === game.name) {
                return true;
            }
        });

        console.log("Same Games", sameGame);

        let sameGameArrays = sameGame.map((item) => {
            return [item.platform, 10];
        });

        console.log(sameGameArrays);

        const data = [
            ["Console", "Amount Sold In Millions"],
            ...sameGameArrays,
        ];

        return data;
    }

    function displayPerConsoleChart() {
        setDisplayChartBool(!displayChartBool);
    }

    return (
        <div>
            <p onClick={displayPerConsoleChart}>Click to Learn More</p>
            {displayChartBool ? (
                <Chart
                    chartType="PieChart"
                    data={generateDataForChart()}
                    options={options}
                    width={"100%"}
                    height={"400px"}
                />
            ) : null}
        </div>
    );
};

export default DisplayChartPerConsole;
