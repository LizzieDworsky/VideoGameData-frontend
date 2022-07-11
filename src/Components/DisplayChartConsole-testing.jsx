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
        let publishers = array.map((game) => game.publisher);
        let distinctPublishers = [...new Set(publishers)];

        let platformArrays = distinctPlatforms.map((item) => {
            let allGamesForPlatform = array.filter(
                (game) => game.platform === item
            );
            let gamePublishers = allGamesForPlatform.map(
                (game) => game.publisher
            );
            let distinctGamePublishers = [...new Set(gamePublishers)];
            for (let i = 0; i < distinctGamePublishers; i++) {
                if (distinctPublishers.includes(distinctGamePublishers[i])) {
                    null;
                } else {
                    null;
                }
            }
            let publisherArray = distinctPublishers.map((item) => {
                let allGamesForPublisher = array.filter(
                    (game) => game.publisher === item
                );

                // let seperate = distinctPublishers.map();

                let total = 0;
                for (let i = 0; i < allGamesForPublisher.length; i++) {
                    total += allGamesForPublisher[i].globalsales;
                }
            });

            // let distinctGamePublishers = [...new Set(game)];

            // do the mapping for all games for platform and publisher,
            // then do a for loop to add those together

            // let sum = 0;
            // for (let i = 0; i < allGamesForPlatform.length; i++) {
            //     sum += allGamesForPlatform[i].globalsales;
            // }
            return [
                item,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
            ];
        });

        const data = [["Platform", ...distinctPublishers], ...platformArrays];
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
