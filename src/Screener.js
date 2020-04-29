import React, { Component } from 'react';
import axios from 'axios';
//import Form from './Form';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

let path;
//let remember;

class Screener extends React.Component {
    constructor(props) {
        super(props);
        path = this.props.history;
        this.state = {
            loading: false,
            datas: [],
            search1: '',
            searchT1: 1,
            sort1: 1,
            sort2: 1,
            sort3: 1,
        }
        this.updateSearch1 = this.updateSearch1.bind(this);
        this.updateSearchT1 = this.updateSearchT1.bind(this);
        this.updateSort1 = this.updateSort1.bind(this)
        this.updateSort2 = this.updateSort2.bind(this)
        this.updateSort3 = this.updateSort3.bind(this)
    }

    componentDidMount = () => {
        this.setState({ loading: true });
        this.getData();
    }

    // pushToNave(metaData){
    // 	path.push({
    // 		metaData
    // 	});
    // }

    onSubmit(metaData) {
        path.push({
            pathname: '/Quote',
            metaData
        })
        //pushToNave(metaData);
    }

    getData = async () => {
        let response = await axios.get(
            `https://stockify-119ec.firebaseio.com/1JgrLHB9XKLonTtayrqZ9D7zkLLfnAwdAHIdhRYmbVGs/StockList.json`
        ).then(res => {
            //const stockList = res.data;
            //console.log(stockList)
            //console.log(stockList["ABMD"]["Change"])
            //list.push(stockList);
            this.setState({
                datas: res.data
            });
        }).catch(error => {
            // this.setState({ error: true })
            console.log(error);
        });
    }
    // Filtering triggered
    updateSearch(sortVal1, sortVal2, sortVal3) {
        console.log("Change happened!");
        console.log(sortVal1, sortVal2, sortVal3);
    }
    updateSearch1(e) {
        this.setState({ search1: e.target.value.substr(0, 10) });
        this.updateSearch(e);
    }
    updateSearchT1(e) {
        console.log("SearchType = ", e.target.value);
        this.setState({ searchT1: e.target.value });
        this.updateSearch(e);
        console.log("SearchType = ", this.state.searchT1.value);
    }

    updateSort1(e) {
        let sortVal1 = e.target.value;
        this.setState({ sort1: sortVal1 });
        this.updateSearch(sortVal1, this.state.sort2, this.state.sort3);
    }
    updateSort2(e) {
        let sortVal2 = e.target.value;
        this.setState({ sort2: sortVal2 });
        this.updateSearch(this.state.sort1, sortVal2, this.state.sort3);
    }
    updateSort3(e) {
        let sortVal3 = e.target.value;
        this.setState({ sort3: sortVal3 });
        this.updateSearch(this.state.sort1, this.state.sort2, sortVal3);
    }

    render() {
        const tempt = this.state.datas;
        const arr = Object.keys(tempt)
            .map((dataKey) => {
                return tempt[dataKey]
            })
        let filteredArr = arr.filter(
            (row) => {
                // console.log(row.MarketCap, parseFloat(this.state.search1))
                // console.log(this.state.sort1, this.state.sort2, this.state.sort3);
                if (this.state.search1 !== "" && this.state.searchT1 == 1) {
                    return (row.MarketCap < parseFloat(this.state.search1));
                }
                if (this.state.search1 !== "" && this.state.searchT1 == 2) {
                    return (Math.abs(row.MarketCap - parseFloat(this.state.search1)) < 0.99);
                }
                if (this.state.search1 !== "" && this.state.searchT1 == 3) {
                    return (row.MarketCap > parseFloat(this.state.search1));
                }
                if (this.state.search1 !== "" && this.state.searchT1 == 4) {
                    return (Math.abs(row.MarketCap - parseFloat(this.state.search1)) > 0.99);
                }
                return row.MarketCap;
            }
        );
        console.log("sort1 =", this.state.sort1);

        // Sort1 
        if (this.state.sort1 == 1 && this.state.sort2 == 1 && this.state.sort3 == 1) {
            filteredArr.sort((a, b) => a.Ticker - b.Ticker);
        }
        if (this.state.sort1 == 2) {
            filteredArr.sort((a, b) => a.Price - b.Price);
        }
        if (this.state.sort1 == 3) {
            filteredArr.sort((a, b) => b.Price - a.Price);
        }
        // Sort2 
        if (this.state.sort2 == 2) {
            filteredArr.sort((a, b) => a.Score - b.Score);
        }
        if (this.state.sort2 == 3) {
            filteredArr.sort((a, b) => b.Score - a.Score);
        }
        console.log(filteredArr)
        // Sort3 
        if (this.state.sort3 == 2) {
            filteredArr.sort((a, b) => a.Change - b.Change);
        }
        if (this.state.sort3 == 3) {
            filteredArr.sort((a, b) => b.Change - a.Change);
        }

        //     (item) => {
        //         return item.MarketCap.indexOf(this.state.search1) !== -1;
        //     }
        // );

        return (
            <Paper >
                <div className="Image1" style={{ left: "30px", top: "20px", minWidth: "width" }}>
                    <img src={require("./images/logo.png")} alt='' style={{ maxWidth: 'width', minWidth: 'width', height: 'auto' }} />
                </div>
                <div className="FormDiv">
                    <div id="Col1"
                        style={{ float: "left", padding: "10px", width: "30%", height: "160px", textalign: "left" }}>
                        <div id="Row1" align="left">
                            <span style={{ width: "120px", color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Market Cap </span>
                            <select name="Combo1" size="1" id="Combo1" onMouseUp={this.updateSearchT1}
                                style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                                <option Value="1">below</option>
                                <option value="2">equals</option>
                                <option value="3">above</option>
                                <option value="4">not equal</option>
                            </select>
                            <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                            <input type="text" id="Value1" value={this.state.search1} onChange={this.updateSearch1}
                                style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value" />
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
                        <div id="Row2" align="left">
                            <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Score </span>
                            <select name="Combo32" size="1" id="Combo32" onMouseUp={this.updateSort2}
                                style={{ left: "694px", top: "10px", width: "85px", height: "21px", zindex: "5" }}>
                                <option Value="1">any</option>
                                <option value="2">uptrend</option>
                                <option value="3">downtrend</option>
                            </select>
                        </div>
                        <div id="Row1" align="left">
                            <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Current Price </span>
                            <select name="Combo31" size="1" id="Combo31" onMouseUp={this.updateSort1}
                                style={{ left: "694px", top: "10px", width: "85px", height: "21px", zindex: "5" }}>
                                <option Value="1" >any</option>
                                <option value="2" >uptrend</option>
                                <option value="3" >downtrend</option>
                            </select>
                        </div>
                        <div id="Row3" align="left">
                            <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Change % </span>
                            <select name="Combo33" size="1" id="Combo33" onMouseUp={this.updateSort3}
                                style={{ left: "694px", top: "10px", width: "85px", height: "21px", zindex: "5" }}>
                                <option Value="1">any</option>
                                <option value="2">uptrend</option>
                                <option value="3">downtrend</option>
                            </select>
                        </div>
                    </div>
                </div>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Ticker</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Current Price $</TableCell>
                            <TableCell align="right">Sector</TableCell>
                            <TableCell align="right">% Change</TableCell>
                            <TableCell align="right">Market Cap($)</TableCell>
                            <TableCell align="right">Current Ratio</TableCell>
                            <TableCell align="right">Reven. Gr. 3Yr</TableCell>
                            <TableCell align="right">Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredArr.map(row => (
                            <TableRow key={row.Ticker}>
                                <TableCell component="th" scope="row">
                                    {row.Ticker}
                                </TableCell>
                                <TableCell align="right">{row.Name}</TableCell>
                                <TableCell align="right">{row.Price}</TableCell>
                                <TableCell align="right">{row.Sector}</TableCell>
                                <TableCell align="right">{row.Change}</TableCell>
                                <TableCell align="right">{row.MarketCap}</TableCell>
                                <TableCell align="right">{row.CurrentRatio}</TableCell>
                                <TableCell align="right">{row.Rev3YrGrowth}</TableCell>
                                <TableCell align="right">{parseFloat(row.Score).toFixed(2)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </Paper >
        )
    }
}
export default Screener;