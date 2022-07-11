import React, { useState } from "react";
import { Chart } from "react-google-charts";

const DisplayChartPerConsole = ({ game, array }) => {
    const [displayChartBool, setDisplayChartBool] = useState(false);

    const options = {
        title: "Amount Sold Per Console",
        is3D: true,
        backgroundColor: "#c4e8e6",
    };

    function generateDataForChart() {
        let sameGame = array.filter((item) => {
            if (item.name === game.name) {
                return true;
            }
        });

        let sameGameArrays = sameGame.map((item) => {
            return [item.platform, item.globalsales];
        });

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
