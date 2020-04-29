import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Form extends React.Component {
    state = {
        name: '',
        ticker: '',
        score: '',
        currentPrice: '',
        economicMoat: '',
        noOfFundsOwing: '',
        morningstarRating: '',
        standardDev3Yr: '',
        pegRatio: '',
        projEpsGrowth5Yr: '',
        revenueGrowth3Yr: '',
        sharpRatio: '',
        totalReturn5Yr: '',
        totalReturn10Yr: '',
        stockSector: '',
        roe: '',
        roa: '',
        currentRatio: '',
        grossMargin: '',
        operatingMargin: '',
        profitMargin: '',
        div: '',
        bearRank: '',
        relStrengthVsSAndP500_3Mon: '',
        trend: '',
        relStrengthVsSAndP500_1Yr: '',
        relStrengthVsSAndP500_3Yr: ''
    }
}

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

                <form name="Form1" method="post" action="mailto:yourname@yourdomain.com" enctype="text/plain" id="Form1">
                    <div id="wb_Text33"
                        style={{
                            position: "absolute", left: "619px", top: "14px", width: "80px", height: "16px", zindex: "2", textalign: "left"
                        }} >
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Trend</span></div>
                    <div id="wb_Text34"
                        style={{ position: "absolute", left: "619px", top: "43px", width: "80px", height: "16px", zindex: "3", textalign: "left" }}>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Moat</span></div>
                    <div id="wb_Text35"
                        style={{ position: "absolute", left: "619px", top: "72px", width: "80px", height: "16px", zindex: "4", textalign: "left" }}>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Fair Value</span></div>
                    <select name="Combobox1" size="1" id="Combobox17"
                        style={{ position: "absolute", left: "694px", top: "10px", width: "71px", height: "21px", zindex: "5" }}>
                        <option defaultValue="1">any</option>
                        <option value="2">uptrend</option>
                        <option value="3">downtrend</option>
                    </select>
                    <select name="Combobox1" size="1" id="Combobox3"
                        style={{ position: "absolute", left: "392px", top: "40px", width: "71px", height: "21px", zindex: "6" }}>
                        <option defaultValue="1">below</option>
                        <option value="2">equals</option>
                        <option value="3">above</option>
                        <option value="4">not equal</option>
                    </select>
                    <select name="Combobox1" size="1" id="Combobox2"
                        style={{ position: "absolute", left: "392px", top: "102px", width: "71px", height: "21px", zindex: "7" }}>
                        <option defaultValue="1">below</option>
                        <option value="2">equals</option>
                        <option value="3">above</option>
                        <option value="4">not equal</option>
                    </select>
                    <select name="Combobox1" size="1" id="Combobox1"
                        style={{ position: "absolute", left: "392px", top: "71px", width: "71px", height: "21px", zindex: "8" }}>
                        <option defaultValue="1">below</option>
                        <option value="2">equals</option>
                        <option value="3">above</option>
                        <option value="4">not equal</option>
                    </select>
                    <select name="Combobox1" size="1" id="Combobox6"
                        style={{ position: "absolute", left: "392px", top: "133px", width: "71px", height: "21px", zindex: "9" }}>
                        <option defaultValue="1">below</option>
                        <option value="2">equals</option>
                        <option value="3">above</option>
                        <option value="4">not equal</option>
                    </select>
                    <select name="Combobox1" size="1" id="Combobox5"
                        style={{ position: "absolute", left: "392px", top: "164px", width: "71px", height: "21px", zindex: "10" }}>
                        <option defaultValue="1">below</option>
                        <option value="2">equals</option>
                        <option value="3">above</option>
                        <option value="4">not equal</option>
                    </select>
                    <select name="Combobox1" size="1" id="Combobox4"
                        style={{ position: "absolute", left: "390px", top: "195px", width: "71px", height: "21px", zindex: "11" }}>
                        <option defaultValue="1">below</option>
                        <option value="2">equals</option>
                        <option value="3">above</option>
                        <option value="4">not equal</option>
                    </select>
                    <div id="wb_Text26"
                        style={{ position: "absolute", left: "473px", top: "195px", width: "56px", height: "16px", zindex: "12", textalign: "left" }}>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>value</span></div>
                    <input type="text" id="Editbox14"
                        style={{ position: "absolute", left: "515px", top: "188px", width: "85px", height: "18px", lineheight: "18px", zindex: "13" }} name="value"
                        value="" />
                    <div id="wb_Text27"
                        style={{ position: "absolute", left: "473px", top: "166px", width: "56px", height: "16px", zindex: "14", textalign: "left" }}>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>value</span></div>
                    <div id="wb_Text28"
                        style={{ position: "absolute", left: "473px", top: "135px", width: "56px", height: "16px", zindex: "15", textalign: "left" }}>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>value</span></div>
                    <div id="wb_Text29"
                        style={{ position: "absolute", left: "473px", top: "104px", width: "56px", height: "16px", zindex: "16", textalign: "left" }}>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>value</span></div>
                    <div id="wb_Text30"
                        style={{ position: "absolute", left: "473px", top: "73px", width: "56px", height: "16px", zindex: "17", textalign: "left" }}>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>value</span></div>
                    <div id="wb_Text31"
                        style={{ position: "absolute", left: "473px", top: "42px", width: "56px", height: "16px", zindex: "18", textalign: "left" }}>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>value</span></div>
                    <input type="text" id="Editbox9"
                        style={{ position: "absolute", left: "515px", top: "41px", width: "85px", height: "18px", lineheight: "18px", zindex: "19" }} name="value"
                        value="" />
                    <input type="text" id="Editbox10"
                        style={{ position: "absolute", left: "515px", top: "70px", width: "85px", height: "18px", lineheight: "18px", zindex: "20" }} name="value"
                        value="" />
                    <input type="text" id="Editbox11"
                        style={{ position: "absolute", left: "515px", top: "99px", width: "85px", height: "18px", lineheight: "18px", zindex: "21" }} name="value"
                        value="" />
                    <input type="text" id="Editbox12"
                        style={{ position: "absolute", left: "515px", top: "128px", width: "85px", height: "18px", lineheight: "18px", zindex: "22" }} name="value"
                        value="" />
                    <input type="text" id="Editbox13"
                        style={{ position: "absolute", left: "515px", top: "157px", width: "85px", height: "18px", lineheight: "18px", zindex: "23" }} name="value"
                        value="" />
                    <div id="wb_Text32"
                        style={{ position: "absolute", left: "473px", top: "11px", width: "56px", height: "16px", zindex: "24", textalign: "left" }}>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>value</span></div>
                    <input type="text" id="Editbox8"
                        style={{ position: "absolute", left: "516px", top: "12px", width: "85px", height: "18px", lineheight: "18px", zindex: "25" }} name="value"
                        value="" />
                    <div id="wb_Text19"
                        style={{ position: "absolute", left: "315px", top: "9px", width: "80px", height: "16px", zindex: "26", textalign: "left" }}>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Price.</span></div>
                    <select name="Combobox1" size="1" id="Combobox8"
                        style={{ position: "absolute", left: "393px", top: "9px", width: "71px", height: "21px", zindex: "27" }}>
                        <option defaultValue="1">below</option>
                        <option value="2">equals</option>
                        <option value="3">above</option>
                        <option value="4">not equal</option>
                    </select>
                    <div id="wb_Text20"
                        style={{ position: "absolute", left: "314px", top: "40px", width: "80px", height: "16px", zindex: "28", textalign: "left" }}>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>No. of funds.</span></div>
                    <div id="wb_Text21"
                        style={{ position: "absolute", left: "314px", top: "71px", width: "80px", height: "16px", zindex: "29", textalign: "left" }}>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Std 3 Yr</span></div>
                    <div id="wb_Text22"
                        style={{ position: "absolute", left: "314px", top: "102px", width: "80px", height: "16px", zindex: "30", textalign: "left" }}>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Bear Rank</span></div>
                    <div id="wb_Text23"
                        style={{ position: "absolute", left: "314px", top: "133px", width: "80px", height: "16px", zindex: "31", textalign: "left" }}>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Div Yield</span></div>
                    <div id="wb_Text24"
                        style={{ position: "absolute", left: "314px", top: "164px", width: "80px", height: "16px", zindex: "32", textalign: "left" }}>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Operating M.</span></div>
                    <div id="wb_Text25"
                        style={{ position: "absolute", left: "312px", top: "195px", width: "80px", height: "16px", zindex: "33", textalign: "left" }}>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Sharpe Ratio</span></div>
                    <div id="wb_Text5"
                        style={{ position: "absolute", left: "16px", top: "13px", width: "80px", height: "16px", zindex: "34", textalign: "left" }}>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Market Cap.</span></div>
                    <div id="wb_Text7"
                        style={{ position: "absolute", left: "15px", top: "44px", width: "80px", height: "16px", zindex: "35", textalign: "left" }}>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Score</span></div>
                    <div id="wb_Text10"
                        style={{ position: "absolute", left: "15px", top: "75px", width: "80px", height: "16px", zindex: "36", textalign: "left" }}>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>PEG</span></div>
                    <div id="wb_Text11"
                        style={{ position: "absolute", left: "15px", top: "106px", width: "80px", height: "16px", zindex: "37", textalign: "left" }}>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>ROE</span></div>
                    <div id="wb_Text13"
                        style={{ position: "absolute", left: "15px", top: "137px", width: "80px", height: "16px", zindex: "38", textalign: "left" }}>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Current Ratio</span></div>
                    <div id="wb_Text15"
                        style={{ position: "absolute", left: "14px", top: "168px", width: "80px", height: "32px", zindex: "39", textalign: "left" }}>
                        <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Cross Margin</span></div>
                </form>




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