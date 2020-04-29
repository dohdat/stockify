import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


var data = require('./data.json'); // forward slashes will depend on the file location

for (var i = 0; i < data.length; i++) {
    var obj = data[i];
    console.log("Key: " + obj.Key + ", Name: " + obj.Name);
}

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: "width",
    },
});


function createData(ticker, name, currPrice, sharesHeld, purchPrice, sector, chPercent, markVal, score) {
    return { ticker, name, currPrice, sharesHeld, purchPrice, sector, chPercent, markVal, score };
}

const rows = [
    createData('FB', 'FaceBook Inc', 187.90, 200, 180.00, 'Internet', 0.90, 1.90, 36000.00, 140.89, 0),
    createData('AAPL', 'Apple Inc', 212.08, 100, 190.12, 'Consumer', 1.90, 3.06, 32065.50, 120.89, 1),
    createData('ADBE', 'Adobe Inc', 309.87, 221, 305.55, 'Software', -1.31, -4.76, 32324.00, 130.78, 2),
    createData(' ', 'LKQ Corp', 29.08, 300, 32.00, 'Industrials', -1.6, -1.4, 21313.89, 66.09, 3),
];

export default function SimpleTable() {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <div className="Image1" style={{ left: "30px", top: "20px", minWidth: "width" }}>
                <img src={require("./images/logo.png")} alt='' style={{ maxWidth: 'width', minWidth: 'width', height: 'auto' }} />
            </div>
            <div className="FormDiv">
                <div id="Col1"
                    style={{ float: "left", padding: "10px", width: "30%", height: "160px", textalign: "left" }}>
                    <div id="Row1" align="left">
                        <span style={{ width: "120px", color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Market Cap </span>
                        <select name="Combo1" size="1" id="Combo1"
                            style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                            <option defaultValue="1">below</option>
                            <option value="2">equals</option>
                            <option value="3">above</option>
                            <option value="4">not equal</option>
                        </select>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                        <input type="text" id="Value1"
                            style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value"
                            value="" />
                    </div>
                    <div id="Row2" align="left">
                        <span style={{ width: "120px", color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Score </span>
                        <select name="Combo2" size="1" id="Combo2"
                            style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                            <option defaultValue="1">below</option>
                            <option value="2">equals</option>
                            <option value="3">above</option>
                            <option value="4">not equal</option>
                        </select>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                        <input type="text" id="Value2"
                            style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value"
                            value="" />
                    </div>
                    <div id="Row3" align="left">
                        <span style={{ width: "120px", color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>PEG </span>
                        <select name="Combo3" size="1" id="Combo3"
                            style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                            <option defaultValue="1">below</option>
                            <option value="2">equals</option>
                            <option value="3">above</option>
                            <option value="4">not equal</option>
                        </select>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                        <input type="text" id="Value3"
                            style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value"
                            value="" />
                    </div>
                    <div id="Row4" align="left">
                        <span style={{ width: "120px", color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>ROE </span>
                        <select name="Combo4" size="1" id="Combo4"
                            style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                            <option defaultValue="1">below</option>
                            <option value="2">equals</option>
                            <option value="3">above</option>
                            <option value="4">not equal</option>
                        </select>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                        <input type="text" id="Value4"
                            style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value"
                            value="" />
                    </div>
                    <div id="Row5" align="left">
                        <span style={{ width: "120px", color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Current Ratio </span>
                        <select name="Combo5" size="1" id="Combo5"
                            style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                            <option defaultValue="1">below</option>
                            <option value="2">equals</option>
                            <option value="3">above</option>
                            <option value="4">not equal</option>
                        </select>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                        <input type="text" id="Value5"
                            style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value"
                            value="" />
                    </div>
                    <div id="Row6" align="left">
                        <span style={{ width: "120px", color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Cross Margin </span>
                        <select name="Combo6" size="1" id="Combo6"
                            style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                            <option defaultValue="1">below</option>
                            <option value="2">equals</option>
                            <option value="3">above</option>
                            <option value="4">not equal</option>
                        </select>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                        <input type="text" id="Value6"
                            style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value"
                            value="" />
                    </div>
                    <div id="Row7" align="left">
                        <span style={{ width: "120px", color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Reven. Gr. 3Yr </span>
                        <select name="Combo7" size="1" id="Combo7"
                            style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                            <option defaultValue="1">below</option>
                            <option value="2">equals</option>
                            <option value="3">above</option>
                            <option value="4">not equal</option>
                        </select>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                        <input type="text" id="Value7"
                            style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value"
                            value="" />
                    </div>
                </div>
                <div id="Col2"
                    style={{ float: "left", borderLeft: "3PX double", padding: "10px", width: "30%", height: "160px", textalign: "left" }}>
                    <div id="Row21" align="left">
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> Price </span>
                        <select name="Combo21" size="1" id="Combo21"
                            style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                            <option defaultValue="1">below</option>
                            <option value="2">equals</option>
                            <option value="3">above</option>
                            <option value="4">not equal</option>
                        </select>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                        <input type="text" id="Value21"
                            style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value"
                            value="" />
                    </div>
                    <div id="Row2" align="left">
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}># of funds </span>
                        <select name="Combo22" size="1" id="Combo22"
                            style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                            <option defaultValue="1">below</option>
                            <option value="2">equals</option>
                            <option value="3">above</option>
                            <option value="4">not equal</option>
                        </select>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                        <input type="text" id="Value22"
                            style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value"
                            value="" />
                    </div>
                    <div id="Row3" align="left">
                        <span style={{ width: "120px", color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Sid 3 Yr </span>
                        <select name="Combo23" size="1" id="Combo23"
                            style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                            <option defaultValue="1">below</option>
                            <option value="2">equals</option>
                            <option value="3">above</option>
                            <option value="4">not equal</option>
                        </select>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                        <input type="text" id="Value23"
                            style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value"
                            value="" />
                    </div>
                    <div id="Row4" align="left">
                        <span style={{ width: "120px", color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Bear Rank </span>
                        <select name="Combo24" size="1" id="Combo24"
                            style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                            <option defaultValue="1">below</option>
                            <option value="2">equals</option>
                            <option value="3">above</option>
                            <option value="4">not equal</option>
                        </select>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                        <input type="text" id="Value24"
                            style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value"
                            value="" />
                    </div>
                    <div id="Row5" align="left">
                        <span style={{ width: "120px", color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Div Yield </span>
                        <select name="Combo25" size="1" id="Combo25"
                            style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                            <option defaultValue="1">below</option>
                            <option value="2">equals</option>
                            <option value="3">above</option>
                            <option value="4">not equal</option>
                        </select>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                        <input type="text" id="Value25"
                            style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value"
                            value="" />
                    </div>
                    <div id="Row6" align="left">
                        <span style={{ width: "120px", color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Operating M </span>
                        <select name="Combo26" size="1" id="Combo26"
                            style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                            <option defaultValue="1">below</option>
                            <option value="2">equals</option>
                            <option value="3">above</option>
                            <option value="4">not equal</option>
                        </select>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                        <input type="text" id="Value26"
                            style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value"
                            value="" />
                    </div>
                    <div id="Row7" align="left">
                        <span style={{ width: "120px", color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Sharpe Ratio </span>
                        <select name="Combo27" size="1" id="Combo27"
                            style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                            <option defaultValue="1">below</option>
                            <option value="2">equals</option>
                            <option value="3">above</option>
                            <option value="4">not equal</option>
                        </select>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                        <input type="text" id="Value27"
                            style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value"
                            value="" />
                    </div>
                </div>
                <div id="Col3"
                    style={{ float: "left", padding: "10px", borderLeft: "3PX double", width: "30%", height: "160px", textalign: "left" }}>
                    <div id="Row1" align="left">
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Trend </span>
                        <select name="Combo31" size="1" id="Combo31"
                            style={{ left: "694px", top: "10px", width: "85px", height: "21px", zindex: "5" }}>
                            <option defaultValue="1">any</option>
                            <option value="2">uptrend</option>
                            <option value="3">downtrend</option>
                        </select>
                    </div>
                    <div id="Row2" align="left">
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Fair Value </span>
                        <select name="Combo32" size="1" id="Combo32"
                            style={{ left: "694px", top: "10px", width: "85px", height: "21px", zindex: "5" }}>
                            <option defaultValue="1">any</option>
                            <option value="2">uptrend</option>
                            <option value="3">downtrend</option>
                        </select>
                    </div>
                    <div id="Row3" align="left">
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Moat </span>
                        <select name="Combo33" size="1" id="Combo33"
                            style={{ left: "694px", top: "10px", width: "85px", height: "21px", zindex: "5" }}>
                            <option defaultValue="1">any</option>
                            <option value="2">uptrend</option>
                            <option value="3">downtrend</option>
                        </select>
                    </div>
                </div>
            </div>

            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Ticker</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Current Price $</TableCell>
                        <TableCell align="right">Shares Held</TableCell>
                        <TableCell align="right">Purchase Price $</TableCell>
                        <TableCell align="right">Sector</TableCell>
                        <TableCell align="right">% Change</TableCell>
                        <TableCell align="right">Market Value $</TableCell>
                        <TableCell align="right">Score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.ticker}>
                            <TableCell component="th" scope="row">
                                {row.ticker}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.currPrice}</TableCell>
                            <TableCell align="right">{row.sharesHeld}</TableCell>
                            <TableCell align="right">{row.purchPrice}</TableCell>
                            <TableCell align="right">{row.sector}</TableCell>
                            <TableCell align="right">{row.chPercent}</TableCell>
                            <TableCell align="right">{row.markVal}</TableCell>
                            <TableCell align="right">{row.score}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper >
    );
}