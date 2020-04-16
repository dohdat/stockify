export default function(historical, currentFavorite){
    const data = historical.slice(0,50)
      var ohlc = [],
        volume = [],
        dataLength = data.length,
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
    return{
        title:{
        	text: `${currentFavorite} Stock Charts`
        },
        xAxis: {
          minRange: 3600000
        },
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
        series: [{
            type: 'ohlc',
            id: 'aapl-ohlc',
            name: `${currentFavorite} Stock Price`,
            data: ohlc,
            dataGrouping: {
              enabled: false
         }
        }, {
            type: 'column',
            id: 'aapl-volume',
            name: 'AAPL Volume',
            data: volume,
            yAxis: 1,
            dataGrouping: {
              enabled: false
         }
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 2000
                },
                chartOptions: {
                    rangeSelector: {
                      buttons: [{
                        type: 'month',
                        count: 1,
                        text: '1m'
                    }, {
                        type: 'month',
                        count: 2,
                        text: '3m'
                    }, {
                        type: 'ytd',
                        text: 'YTD'
                    }],
                        allbuttonEnabled: true

                    }
                }
            }]
        }
    };
}
// export function sim () {
//   var data = [[1220832000000, 22.56], [1220918400000, 21.67], [1221004800000, 21.66], [1221091200000, 21.81], [1221177600000, 21.28], [1221436800000, 20.05], [1221523200000, 19.98], [1221609600000, 18.26], [1221696000000, 19.16], [1221782400000, 20.13], [1222041600000, 18.72], [1222128000000, 18.12], [1222214400000, 18.39], [1222300800000, 18.85], [1222387200000, 18.32], [1222646400000, 15.04], [1222732800000, 16.24], [1222819200000, 15.59], [1222905600000, 14.3], [1222992000000, 13.87], [1223251200000, 14.02], [1223337600000, 12.74], [1223424000000, 12.83], [1223510400000, 12.68], [1223596800000, 13.8], [1223856000000, 15.75], [1223942400000, 14.87], [1224028800000, 13.99], [1224115200000, 14.56], [1224201600000, 13.91], [1224460800000, 14.06], [1224547200000, 13.07], [1224633600000, 13.84], [1224720000000, 14.03], [1224806400000, 13.77], [1225065600000, 13.16], [1225152000000, 14.27], [1225238400000, 14.94], [1225324800000, 15.86], [1225411200000, 15.37], [1225670400000, 15.28], [1225756800000, 15.86], [1225843200000, 14.76], [1225929600000, 14.16], [1226016000000, 14.03], [1226275200000, 13.7], [1226361600000, 13.54], [1226448000000, 12.87], [1226534400000, 13.78], [1226620800000, 12.89], [1226880000000, 12.59], [1226966400000, 12.84], [1227052800000, 12.33], [1227139200000, 11.5], [1227225600000, 11.8], [1227484800000, 13.28], [1227571200000, 12.97], [1227657600000, 13.57], [1227830400000, 13.24], [1228089600000, 12.7], [1228176000000, 13.21], [1228262400000, 13.7], [1228348800000, 13.06], [1228435200000, 13.43], [1228694400000, 14.25], [1228780800000, 14.29], [1228867200000, 14.03], [1228953600000, 13.57], [1229040000000, 14.04], [1229299200000, 13.54]];

//   return {
//     rangeSelector: {
//       selected: 1
//     },
//     title: {
//       text: 'AAPL Stock Price'
//     },
//     series: [{
//       name: 'AAPL',
//       data: data,
//       tooltip: {
//         valueDecimals: 2
//       }
//     }]
//   };
// }

// export  function sim2(historical) {
//   if (!historical) {
//     return;
//   }

//   const data = [
//   [1585526400000, 308.89, 322.97, 308.01, 318.39, 4254765],
//   [1585267200000, 311.7, 314.29, 300.63, 305.83, 4862124],
//   [1585180800000, 305.99, 324.43, 305.69, 322.67, 4534399],
//   [1585094400000, 308, 317.65, 298.13, 305.91, 4830363],
//   [1585008000000, 322.96, 326.99, 301.59, 310, 6592213],
//   [1584921600000, 296.67, 312.49, 287.78, 307.27, 6016822],
//   [1584662400000, 312.92, 324.8, 293.77, 295.34, 7461753],
//   [1584576000000, 291.77, 318.71, 281.1, 307.51, 6023835],
//   [1584489600000, 290, 296.87, 255.13, 294.61, 7278981],
//   [1584403200000, 291.2, 312.95, 278.35, 311.81, 6189140],
//   [1584316800000, 288.36, 307.11, 283.25, 286.03, 7140139],
//   [1584057600000, 312.88, 336, 298, 335.5, 8935220],
//   [1583971200000, 290.41, 310.13, 283, 285, 7230152],
//   [1583884800000, 324.32, 326.36, 309, 315.23, 4874326],
//   [1583798400000, 318.98, 332.94, 309.31, 332.38, 5973672],
//   [1583712000000, 311.68, 322.44, 305.33, 305.79, 5291910],
//   [1583452800000, 340.45, 344.16, 326.6, 336.77, 5622911],
//   [1583366400000, 355.06, 360.45, 347.19, 351.03, 3199]
// ]
//   const data = historical
//   var ohlc = [],
//     volume = [],
//     dataLength = data.length,
//     groupingUnits = [
//       [
//         "week", // unit name
//         [1] // allowed multiples
//       ],
//       ["month", [1, 2, 3, 4, 5, 6, 7]]
//     ],
//     i = 0;

//   for (i; i < dataLength; i += 1) {
//     ohlc.push([
//       data[i][0], // the date
//       data[i][1], // open
//       data[i][2], // high
//       data[i][3], // low
//       data[i][4] // close
//     ]);

//     volume.push([
//       data[i][0], // the date
//       data[i][5] // the volume
//     ]);
//   }
//   return {
//     rangeSelector: {
//       selected: 5
//     },

//     title: {
//       text: `${""} Historical`
//     },

//     yAxis: [
//       {
//         labels: {
//           align: "right",
//           x: -3
//         },
//         title: {
//           text: "OHLC"
//         },
//         height: "60%",
//         lineWidth: 2,
//         resize: {
//           enabled: true
//         }
//       },
//       {
//         labels: {
//           align: "right",
//           x: -3
//         },
//         title: {
//           text: "Volume"
//         },
//         top: "65%",
//         height: "35%",
//         offset: 0,
//         lineWidth: 2
//       }
//     ],

//     tooltip: {
//       split: true
//     },

//     series: [
//       {
//         type: "candlestick",
//         name: "MSFT",
//         data: ohlc,
//         dataGrouping: {
//           units: groupingUnits
//         }
//       },
//       {
//         type: "line",
//         name: "Volume",
//         data: volume,
//         yAxis: 1,
//         dataGrouping: {
//           units: groupingUnits
//         }
//       }
//     ]
//   };
// }

// export function run(historical) {
//   return {

//     title: {
//       text: ''
//     },

//     yAxis: {
//       title: {
//         text: 'Price'
//       }
//     },

//     xAxis: {
//       accessibility: {
//         rangeDescription: 'Range: 2010 to 2017'
//       }
//     },

//     legend: {
//       layout: 'vertical',
//       align: 'right',
//       verticalAlign: 'middle'
//     },

//     plotOptions: {
//       series: {
//         label: {
//           connectorAllowed: false
//         },
//         pointStart: 2010
//       }
//     },

//     series: [{
//       name: 'Installation',
//       data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
//     },],

//     responsive: {
//       rules: [{
//         condition: {
//           maxWidth: 500
//         },
//         chartOptions: {
//           legend: {
//             layout: 'horizontal',
//             align: 'center',
//             verticalAlign: 'bottom'
//           }
//         }
//       }]
//     }

//   };
// }

// export default function () {
//   return {


//     rangeSelector: {
//         selected: 1
//     },

//     title: {
//         text: 'AAPL Stock Price'
//     },

//     series: [{
//         name: 'AAPL',
//         data: data,
//         tooltip: {
//             valueDecimals: 2
//         }
//     }]
//   }
// }

