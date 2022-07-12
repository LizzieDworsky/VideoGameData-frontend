import React from "react";
import { Chart } from "react-google-charts";

const DisplayChartConsoleUpdated = ({ array }) => {
    const options = {
        title: "Global Sales in Millions",
        isStacked: true,
        backgroundColor: "#c4e8e6",
    };

    function generateDataForChart() {
        let platforms = array.map((game) => game.platform);
        let distinctPlatforms = [...new Set(platforms)];
        let allPublishers = array.map((game) => game.publisher);
        let allDistinctPublishers = [...new Set(allPublishers)];

        let platformArrays = distinctPlatforms.map((platform) => {
            let allGamesForPlatform = array.filter(
                (game) => game.platform === platform
            );
            let publishersOnEachPlatform = allGamesForPlatform.map(
                (game) => game.publisher
            );
            let distinctPublishersOnEachPlatform = [
                ...new Set(publishersOnEachPlatform),
            ];
            let publisherArray = allDistinctPublishers.map((publisher) => {
                if (distinctPublishersOnEachPlatform.includes(publisher)) {
                    let allGamesForPublisherAndPlatform =
                        allGamesForPlatform.filter(
                            (game) => game.publisher === publisher
                        );
                    let sum = 0;
                    for (
                        let i = 0;
                        i < allGamesForPublisherAndPlatform.length;
                        i++
                    ) {
                        sum += allGamesForPublisherAndPlatform[i].globalsales;
                    }
                    return sum;
                } else {
                    let sum = null;
                    return sum;
                }
            });
            return [platform, ...publisherArray];
        });

        const data = [
            ["Platform", ...allDistinctPublishers],
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

export default DisplayChartConsoleUpdated;
