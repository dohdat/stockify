import React, { Component } from "react";
import { render } from "react-dom";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { getDataFromApi } from '../api/index';
import axios from 'axios';

class StockCharts extends Component {
    state = {
        data: null,
        ticker: "AAPL"
    }


     async componentDidMount() {
        const data = await getDataFromApi(this.state.ticker);
        this.setState({
            data: data
        })
    } 

    // async componentDidUpdate() {
    //     var data = await getDataFromApi(this.state.ticker);
    //     console.log("API", data)
    //     this.setState({
    //         data: data
    //     })
    // }


    render() {
        if (!this.state.data) {
            return <div/>
        }

//         const data = [
//     [1585526400000, 199.9, 216.39, 177.05, 208.48, 96323300],
//   [1582848000000, 216.39, 234.64, 195.18, 199.73, 50053232],
//   [1580428800000, 243, 243.85, 210.01, 216.05, 51203938],
//   [1577750400000, 234.54, 244.99, 230.78, 241.07, 41947919],
//   [1574985600000, 214.26, 235.8, 213.19, 234.72, 49063707],
//   [1572480000000, 192.58, 213.67, 188.78, 213.25, 48034059],
//   [1569801600000, 207.3, 209.35, 191.69, 193.51, 53660832],
//   [1567123200000, 186.4, 211.9, 179.61, 208.62, 84458698],
//   [1564531200000, 186.88, 189.42, 173.12, 186.58, 58621529], 
//   [1561680000000, 172, 187.13, 170.56, 184.28, 57448080],
//  [1559260800000, 175.4, 178.5, 166.3, 166.7, 64324492],
//  [1556582400000, 191.14, 196.87, 174.87, 179.32, 59197058],
//  [1553817600000, 191.39, 192.87, 179.01, 189.98, 60744024],
//  [1551312000000, 186.51, 192.19, 182.67, 190.08, 55148428],
//  [1548892800000, 192.52, 204.33, 179.65, 187.11, 73674263],
//  [1546214400000, 208.1, 208.3, 178.29, 194.67, 63217974],
//  [1543536000000, 192.81, 208.99, 185.83, 208.25, 56156042],
//  [1540944000000, 207.73, 209.34, 181.31, 192.79, 73064926],
//  [1538092800000, 199.25, 210.19, 194.75, 207.29, 52465782],
//  [1535673600000, 196.33, 200.9, 192.26, 199.81, 47006139],
//  [1532995200000, 184.09, 197.49, 182.7, 196.55, 52822533],
//  [1530230400000, 180.75, 188.09, 179.79, 184.59, 65122904],
//  [1527724800000, 172.15, 181.78, 165.22, 179.62, 71920908],
//  [1525046400000, 169.92, 178.74, 163.31, 174.48, 69654807],
//  [1522281600000, 184.21, 192.62, 168.02, 170.48, 149952181],
//  [1519776000000, 185, 192.6, 168.25, 183.77, 91676561],
//  [1517356800000, 175.35, 201.23, 174.42, 186.05, 64633848],
//  [1514505600000, 174.16, 180.74, 173.43, 173.9, 52654707],
//  [1512000000000, 175.3, 177.31, 168.15, 175.66, 52113663],
//  [1509408000000, 187.03, 190, 169.68, 175.22, 61227549],
//  [1506643200000, 178.14, 191.1, 175.36, 186.45, 53201643],
//  [1504137600000, 174.81, 178.64, 166.52, 177.77, 44917326],
//  [1501459200000, 172.63, 182.6, 170.53, 174.51, 54033242],
//  [1498780800000, 155.4, 175.45, 155.24, 172.23, 80586717],
//  [1496188800000, 163.68, 164.82, 152.16, 155.24, 67130467],
//  [1493337600000, 164.63, 165.61, 160, 163.32, 53919664],
//  [1490918400000, 178, 184.21, 162.94, 164.07, 85517054],
//  [1488240000000, 158.59, 178.25, 156.91, 176.53, 69621110],
//  [1485820800000, 147.86, 161, 147.12, 156.68, 75000844],
//  [1483056000000, 144.24, 151.21, 138.83, 146.21, 70550972],
//  [1480464000000, 141.17, 152.85, 133.64, 144.07, 98476356],
//  [1477872000000, 166.05, 168.69, 140.94, 141.16, 74479495],
//  [1475193600000, 170.55, 176.85, 165.27, 166.81, 60]
// ]    

        const data = this.state.data
        var ohlc = [],
            volume = [],
            dataLength = data.length,
            groupingUnits = [
                [
                    "week", // unit name
                    [1] // allowed multiples
                ],
                ["month", [1, 2, 3, 4, 6]]
            ],
            i = 0;

        for (i; i < dataLength; i += 1) {
            ohlc.push([
                data[i][0], // the date
                data[i][1], // open
                data[i][2], // high
                data[i][3], // low
                data[i][4] // close
            ]);

            volume.push([
                data[i][0], // the date
                data[i][5] // the volume
            ]);
        }
        const options = {
            yAxis: [{
                labels: {
                    align: 'left'
                },
                height: '80%',
                resize: {
                    enabled: true
                }
            }, {
                labels: {
                    align: 'left'
                },
                top: '80%',
                height: '20%',
                offset: 0
            }],
            tooltip: {
                shape: 'square',
                headerShape: 'callout',
                borderWidth: 0,
                shadow: false,
                positioner: function (width, height, point) {
                    var chart = this.chart,
                        position;
    
                    if (point.isHeader) {
                        position = {
                            x: Math.max(
                                // Left side limit
                                chart.plotLeft,
                                Math.min(
                                    point.plotX + chart.plotLeft - width / 2,
                                    // Right side limit
                                    chart.chartWidth - width - chart.marginRight
                                )
                            ),
                            y: point.plotY
                        };
                    } else {
                        position = {
                            x: point.series.chart.plotLeft,
                            y: point.series.yAxis.top - chart.plotTop
                        };
                    }
    
                    return position;
                }
            },
            chart: {
                zoomType: 'x'
            },
            series: [{
                type: 'ohlc',
                id: 'aapl-ohlc',
                name: 'AAPL Stock Price',
                data: ohlc
            }, {
                type: 'column',
                id: 'aapl-volume',
                name: 'AAPL Volume',
                data: volume,
                yAxis: 1
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 800
                    },
                    chartOptions: {
                        rangeSelector: {
                            inputEnabled: false, // it supports only days
                        },
                    }
                }]
            }
        } ;
        return (
            <div>
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={"stockChart"}
                    options={options}
                />
            </div>);
    }
};

// const StockCharts = Highcharts.getJSON('https://www.highcharts.com/samples/data/aapl-ohlcv.json', function (data) {

//     // split the data set into ohlc and volume
//     var ohlc = [],
//         volume = [],
//         dataLength = data.length,
//         i = 0;

//     for (i; i < dataLength; i += 1) {
//         ohlc.push([
//             data[i][0], // the date
//             data[i][1], // open
//             data[i][2], // high
//             data[i][3], // low
//             data[i][4] // close
//         ]);

//         volume.push([
//             data[i][0], // the date
//             data[i][5] // the volume
//         ]);
//     }

//     Highcharts.stockChart('container', {
//         yAxis: [{
//             labels: {
//                 align: 'left'
//             },
//             height: '80%',
//             resize: {
//                 enabled: true
//             }
//         }, {
//             labels: {
//                 align: 'left'
//             },
//             top: '80%',
//             height: '20%',
//             offset: 0
//         }],
//         tooltip: {
//             shape: 'square',
//             headerShape: 'callout',
//             borderWidth: 0,
//             shadow: false,
//             positioner: function (width, height, point) {
//                 var chart = this.chart,
//                     position;

//                 if (point.isHeader) {
//                     position = {
//                         x: Math.max(
//                             // Left side limit
//                             chart.plotLeft,
//                             Math.min(
//                                 point.plotX + chart.plotLeft - width / 2,
//                                 // Right side limit
//                                 chart.chartWidth - width - chart.marginRight
//                             )
//                         ),
//                         y: point.plotY
//                     };
//                 } else {
//                     position = {
//                         x: point.series.chart.plotLeft,
//                         y: point.series.yAxis.top - chart.plotTop
//                     };
//                 }

//                 return position;
//             }
//         },
//         series: [{
//             type: 'ohlc',
//             id: 'aapl-ohlc',
//             name: 'AAPL Stock Price',
//             data: ohlc
//         }, {
//             type: 'column',
//             id: 'aapl-volume',
//             name: 'AAPL Volume',
//             data: volume,
//             yAxis: 1
//         }],
//         responsive: {
//             rules: [{
//                 condition: {
//                     maxWidth: 800
//                 },
//                 chartOptions: {
//                     rangeSelector: {
//                         inputEnabled: false
//                     }
//                 }
//             }]
//         }
//     });
// });

export default StockCharts;



// var ohlc = [],
// volume = [],
// dataLength = data.length,
// groupingUnits = [
//     [
//         "week", // unit name
//         [1] // allowed multiples
//     ],
//     ["month", [1, 2, 3, 4, 6]]
// ],
// i = 0;

// for (i; i < dataLength; i += 1) {
// ohlc.push([
//     data[i][0], // the date
//     data[i][1], // open
//     data[i][2], // high
//     data[i][3], // low
//     data[i][4] // close
// ]);

// volume.push([
//     data[i][0], // the date
//     data[i][5] // the volume
// ]);
// }
// const options = {
// rangeSelector: {
//     selected: 1
// },

// title: {
//     text: `${""} Historical`
// },

// yAxis: [
//     {
//         labels: {
//             align: "right",
//             x: -3
//         },
//         title: {
//             text: "OHLC"
//         },
//         height: "60%",
//         lineWidth: 2,
//         resize: {
//             enabled: true
//         }
//     },
//     {
//         labels: {
//             align: "right",
//             x: -3
//         },
//         title: {
//             text: "Volume"
//         },
//         top: "65%",
//         height: "35%",
//         offset: 0,
//         lineWidth: 2
//     }
// ],

// tooltip: {
//     split: true
// },

// series: [
//     {
//         type: "ohlc",
//         name: "MSFT",
//         data: ohlc,
//         dataGrouping: {
//             units: groupingUnits
//         }
//     },
//     {
//         type: "line",
//         name: "Volume",
//         data: volume,
//         yAxis: 1,
//         dataGrouping: {
//             units: groupingUnits
//         }
//     }
// ]
// };