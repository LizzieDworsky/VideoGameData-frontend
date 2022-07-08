import React, { useState } from "react";
import { Chart } from "react-google-charts";

const DisplayChartPerConsole = ({ game }) => {
    const [displayChartBool, setDisplayChartBool] = useState(false);

    const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
    ];

    const options = {
        title: "My Daily Activities",
        is3D: true,
    };

    function displayPerConsoleChart() {
        setDisplayChartBool(!displayChartBool);
    }

    return (
        <div>
            <p onClick={displayPerConsoleChart}>Click to Learn More</p>
            {displayChartBool ? (
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"400px"}
                />
            ) : null}
        </div>
    );
};

export default DisplayChartPerConsole;
