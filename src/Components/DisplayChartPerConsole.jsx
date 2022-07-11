import React, { useState } from "react";
import { Chart } from "react-google-charts";

const DisplayChartPerConsole = ({ game, array }) => {
    const [displayChartBool, setDisplayChartBool] = useState(false);
    // now I need to do a compar or the game and find any matching titles, then use that data to create the chart

    const options = {
        title: "Number Sold Per Console",
        is3D: true,
    };

    function generateDataForChart() {
        let sameGame = array.filter((item) => {
            if (item.name === game.name) {
                return true;
            }
        });

        console.log("Same Games", sameGame);

        const data = [
            ["Task", "Hours per Day"],
            ["Work", 11],
            ["Eat", 2],
            ["Commute", 2],
            ["Watch TV", 2],
            ["Sleep", 7],
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
