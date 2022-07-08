import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const DisplayChart = ({ array }) => {
    function generateDataForChart() {
        const data = [
            ["Platform", "Sales", { role: "style" }],
            ["PS3", 8.94, "blue"],
            ["Silver", 10.49, "blue"],
            ["Gold", 19.3, "gold"],
            ["Platinum", 21.45, "gold"],
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
