import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// import React from "react";
// import { render } from "react-dom";
// import Highcharts from "highcharts/highstock";
// import HighchartsReact from "highcharts-react-official";

// const options = {
//   title: {
//     text: "My stock chart"
//   },
//   series: [
//     {
//       data: [1, 2, 1, 4, 3, 6, 7, 3, 8, 6, 9]
//     }
//   ]
// };

// const App = () => (
//   <div>
//     <HighchartsReact
//       highcharts={Highcharts}
//       constructorType={"stockChart"}
//       options={options}
//     />
//   </div>
// );

// render(<App />, document.getElementById("root"));