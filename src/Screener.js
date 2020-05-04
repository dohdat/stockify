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
            search2: '',
            searchT2: 1,
            search3: '',
            searchT3: 1,
            search4: '',
            searchT4: 1,
            search5: '',
            searchT5: 1,
            search6: '',
            searchT6: 1,
            search7: '',
            searchT7: 1,
            search21: '',
            searchT21: 1,
            search22: '',
            searchT22: 1,
            search23: '',
            searchT23: 1,
            search24: '',
            searchT24: 1,
            search25: '',
            searchT25: 1,
            search26: '',
            searchT26: 1,
            search27: '',
            searchT27: 1,
            sort1: 1,
            sort2: 1,
            sort3: 1,
        }
        this.updateSearch1 = this.updateSearch1.bind(this);
        this.updateSearchT1 = this.updateSearchT1.bind(this);
        this.updateSearch2 = this.updateSearch2.bind(this);
        this.updateSearchT2 = this.updateSearchT2.bind(this);
        this.updateSearch3 = this.updateSearch3.bind(this);
        this.updateSearchT3 = this.updateSearchT3.bind(this);
        this.updateSearch4 = this.updateSearch4.bind(this);
        this.updateSearchT4 = this.updateSearchT4.bind(this);
        this.updateSearch5 = this.updateSearch5.bind(this);
        this.updateSearchT5 = this.updateSearchT5.bind(this);
        this.updateSearch6 = this.updateSearch6.bind(this);
        this.updateSearchT6 = this.updateSearchT6.bind(this);
        this.updateSearch7 = this.updateSearch7.bind(this);
        this.updateSearchT7 = this.updateSearchT7.bind(this);
        this.updateSearch21 = this.updateSearch21.bind(this);
        this.updateSearchT21 = this.updateSearchT21.bind(this);
        this.updateSearch22 = this.updateSearch22.bind(this);
        this.updateSearchT22 = this.updateSearchT22.bind(this);
        this.updateSearch23 = this.updateSearch23.bind(this);
        this.updateSearchT23 = this.updateSearchT23.bind(this);
        this.updateSearch24 = this.updateSearch24.bind(this);
        this.updateSearchT24 = this.updateSearchT24.bind(this);
        this.updateSearch25 = this.updateSearch25.bind(this);
        this.updateSearchT25 = this.updateSearchT25.bind(this);
        this.updateSearch26 = this.updateSearch26.bind(this);
        this.updateSearchT26 = this.updateSearchT26.bind(this);
        this.updateSearch27 = this.updateSearch27.bind(this);
        this.updateSearchT27 = this.updateSearchT27.bind(this);
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
    updateSearch2(e) {
        this.setState({ search2: e.target.value.substr(0, 10) });
        console.log("SearchType = ", this.state.search2);
        this.updateSearch(e);
    }
    updateSearchT2(e) {
        console.log("SearchType = ", e.target.value);
        this.setState({ searchT2: e.target.value });
        this.updateSearch(e);
        console.log("SearchType = ", this.state.searchT2.value);
    }
    updateSearch3(e) {
        this.setState({ search3: e.target.value.substr(0, 10) });
        this.updateSearch(e);
    }
    updateSearchT3(e) {
        console.log("SearchType = ", e.target.value);
        this.setState({ searchT3: e.target.value });
        this.updateSearch(e);
        console.log("SearchType = ", this.state.searchT3.value);
    }
    updateSearch4(e) {
        this.setState({ search4: e.target.value.substr(0, 10) });
        this.updateSearch(e);
    }
    updateSearchT4(e) {
        console.log("SearchType = ", e.target.value);
        this.setState({ searchT4: e.target.value });
        this.updateSearch(e);
        console.log("SearchType = ", this.state.searchT4.value);
    }
    updateSearch5(e) {
        this.setState({ search5: e.target.value.substr(0, 10) });
        this.updateSearch(e);
    }
    updateSearchT5(e) {
        console.log("SearchType = ", e.target.value);
        this.setState({ searchT5: e.target.value });
        this.updateSearch(e);
        console.log("SearchType = ", this.state.searchT5.value);
    }
    updateSearch6(e) {
        this.setState({ search6: e.target.value.substr(0, 10) });
        this.updateSearch(e);
    }
    updateSearchT6(e) {
        console.log("SearchType = ", e.target.value);
        this.setState({ searchT6: e.target.value });
        this.updateSearch(e);
        console.log("SearchType = ", this.state.searchT6.value);
    }
    updateSearch7(e) {
        this.setState({ search7: e.target.value.substr(0, 10) });
        this.updateSearch(e);
    }
    updateSearchT7(e) {
        console.log("SearchType = ", e.target.value);
        this.setState({ searchT7: e.target.value });
        this.updateSearch(e);
        console.log("SearchType = ", this.state.searchT7.value);
    }
    updateSearch21(e) {
        this.setState({ search21: e.target.value.substr(0, 10) });
        this.updateSearch(e);
    }
    updateSearchT21(e) {
        console.log("SearchType = ", e.target.value);
        this.setState({ searchT21: e.target.value });
        this.updateSearch(e);
        console.log("SearchType = ", this.state.searchT21.value);
    }
    updateSearch22(e) {
        this.setState({ search22: e.target.value.substr(0, 10) });
        this.updateSearch(e);
    }
    updateSearchT22(e) {
        console.log("SearchType = ", e.target.value);
        this.setState({ searchT22: e.target.value });
        this.updateSearch(e);
        console.log("SearchType = ", this.state.searchT22.value);
    }
    updateSearch23(e) {
        this.setState({ search23: e.target.value.substr(0, 10) });
        this.updateSearch(e);
    }
    updateSearchT23(e) {
        console.log("SearchType = ", e.target.value);
        this.setState({ searchT23: e.target.value });
        this.updateSearch(e);
        console.log("SearchType = ", this.state.searchT23.value);
    }
    updateSearch24(e) {
        this.setState({ search24: e.target.value.substr(0, 10) });
        this.updateSearch(e);
    }
    updateSearchT24(e) {
        console.log("SearchType = ", e.target.value);
        this.setState({ searchT24: e.target.value });
        this.updateSearch(e);
        console.log("SearchType = ", this.state.searchT24.value);
    }
    updateSearch25(e) {
        this.setState({ search25: e.target.value.substr(0, 10) });
        this.updateSearch(e);
    }
    updateSearchT25(e) {
        console.log("SearchType = ", e.target.value);
        this.setState({ searchT25: e.target.value });
        this.updateSearch(e);
        console.log("SearchType = ", this.state.searchT25.value);
    }
    updateSearch26(e) {
        this.setState({ search26: e.target.value.substr(0, 10) });
        this.updateSearch(e);
    }
    updateSearchT26(e) {
        console.log("SearchType = ", e.target.value);
        this.setState({ searchT26: e.target.value });
        this.updateSearch(e);
        console.log("SearchType = ", this.state.searchT26.value);
    }
    updateSearch27(e) {
        this.setState({ search27: e.target.value.substr(0, 10) });
        this.updateSearch(e);
    }
    updateSearchT27(e) {
        console.log("SearchType = ", e.target.value);
        this.setState({ searchT27: e.target.value });
        this.updateSearch(e);
        console.log("SearchType = ", this.state.searchT27.value);
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
                // Search1 block
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

        filteredArr = filteredArr.filter(
            (row) => {
                // Search2 block
                if (this.state.search2 !== "" && this.state.searchT2 == 1) {
                    return (row.Score < parseFloat(this.state.search2));
                }
                if (this.state.search2 !== "" && this.state.searchT2 == 2) {
                    return (Math.abs(row.Score - parseFloat(this.state.search2)) < 0.99);
                }
                if (this.state.search2 !== "" && this.state.searchT2 == 3) {
                    return (row.Score > parseFloat(this.state.search2));
                }
                if (this.state.search2 !== "" && this.state.searchT2 == 4) {
                    return (Math.abs(row.Score - parseFloat(this.state.search2)) > 0.99);
                }
                return row.Score;
            }
        );
        filteredArr = filteredArr.filter(
            (row) => {

                // Search3 block
                if (this.state.search3 !== "" && this.state.searchT3 == 1) {
                    return (row.PEGRatio < parseFloat(this.state.search3));
                }
                if (this.state.search3 !== "" && this.state.searchT3 == 2) {
                    return (Math.abs(row.PEGRatio - parseFloat(this.state.search3)) < 0.99);
                }
                if (this.state.search3 !== "" && this.state.searchT3 == 3) {
                    return (row.PEGRatio > parseFloat(this.state.search3));
                }
                if (this.state.search3 !== "" && this.state.searchT3 == 4) {
                    return (Math.abs(row.PEGRatio - parseFloat(this.state.search3)) > 0.99);
                }
                return row.PEGRatio;
            }
        );
        filteredArr = filteredArr.filter(
            (row) => {

                // Search4 block
                if (this.state.search4 !== "" && this.state.searchT4 == 1) {
                    return (row.ROE < parseFloat(this.state.search4));
                }
                if (this.state.search4 !== "" && this.state.searchT4 == 2) {
                    return (Math.abs(row.ROE - parseFloat(this.state.search4)) < 0.99);
                }
                if (this.state.search4 !== "" && this.state.searchT4 == 3) {
                    return (row.ROE > parseFloat(this.state.search4));
                }
                if (this.state.search4 !== "" && this.state.searchT4 == 4) {
                    return (Math.abs(row.ROE - parseFloat(this.state.search4)) > 0.99);
                }
                return row.ROE;
            }
        );
        filteredArr = filteredArr.filter(
            (row) => {
                // Search5 block
                if (this.state.search5 !== "" && this.state.searchT5 == 1) {
                    return (row.CurrentRatio < parseFloat(this.state.search5));
                }
                if (this.state.search5 !== "" && this.state.searchT5 == 2) {
                    return (Math.abs(row.CurrentRatio - parseFloat(this.state.search5)) < 0.99);
                }
                if (this.state.search5 !== "" && this.state.searchT5 == 3) {
                    return (row.CurrentRatio > parseFloat(this.state.search5));
                }
                if (this.state.search5 !== "" && this.state.searchT5 == 4) {
                    return (Math.abs(row.CurrentRatio - parseFloat(this.state.search5)) > 0.99);
                }
                return row.ROE;
            }
        );
        filteredArr = filteredArr.filter(
            (row) => {

                // Search6 block
                if (this.state.search6 !== "" && this.state.searchT6 == 1) {
                    return (row.GrossMargin < parseFloat(this.state.search6));
                }
                if (this.state.search6 !== "" && this.state.searchT6 == 2) {
                    return (Math.abs(row.GrossMargin - parseFloat(this.state.search6)) < 0.99);
                }
                if (this.state.search6 !== "" && this.state.searchT6 == 3) {
                    return (row.GrossMargin > parseFloat(this.state.search6));
                }
                if (this.state.search6 !== "" && this.state.searchT6 == 4) {
                    return (Math.abs(row.GrossMargin - parseFloat(this.state.search6)) > 0.99);
                }
                return row.GrossMargin;
            }
        );
        filteredArr = filteredArr.filter(
            (row) => {

                // Search7 block
                if (this.state.search7 !== "" && this.state.searchT7 == 1) {
                    return (row.Rev3YrGrowth < parseFloat(this.state.search7));
                }
                if (this.state.search7 !== "" && this.state.searchT7 == 2) {
                    return (Math.abs(row.Rev3YrGrowth - parseFloat(this.state.search7)) < 0.99);
                }
                if (this.state.search7 !== "" && this.state.searchT7 == 3) {
                    return (row.Rev3YrGrowth > parseFloat(this.state.search7));
                }
                if (this.state.search7 !== "" && this.state.searchT7 == 4) {
                    return (Math.abs(row.Rev3YrGrowth - parseFloat(this.state.search7)) > 0.99);
                }
                return row.Rev3YrGrowth;
            }
        );
        filteredArr = filteredArr.filter(
            (row) => {

                // Search21 block
                if (this.state.search21 !== "" && this.state.searchT21 == 1) {
                    return (row.Price < parseFloat(this.state.search21));
                }
                if (this.state.search21 !== "" && this.state.searchT21 == 2) {
                    return (Math.abs(row.Price - parseFloat(this.state.search21)) < 0.99);
                }
                if (this.state.search21 !== "" && this.state.searchT21 == 3) {
                    return (row.Price > parseFloat(this.state.search21));
                }
                if (this.state.search21 !== "" && this.state.searchT21 == 4) {
                    return (Math.abs(row.Price - parseFloat(this.state.search21)) > 0.99);
                }
                return row.Price;
            }
        );
        filteredArr = filteredArr.filter(
            (row) => {
                // Search22 block
                if (this.state.search22 !== "" && this.state.searchT22 == 1) {
                    return (row.Funds < parseFloat(this.state.search22));
                }
                if (this.state.search22 !== "" && this.state.searchT22 == 2) {
                    return (Math.abs(row.Funds - parseFloat(this.state.search22)) < 0.99);
                }
                if (this.state.search22 !== "" && this.state.searchT22 == 3) {
                    return (row.Funds > parseFloat(this.state.search22));
                }
                if (this.state.search22 !== "" && this.state.searchT22 == 4) {
                    return (Math.abs(row.Funds - parseFloat(this.state.search22)) > 0.99);
                }
                return row.Funds;
            }
        );
        filteredArr = filteredArr.filter(
            (row) => {

                // Search23 block
                if (this.state.search23 !== "" && this.state.searchT23 == 1) {
                    return (row.Std3 < parseFloat(this.state.search23));
                }
                if (this.state.search23 !== "" && this.state.searchT23 == 2) {
                    return (Math.abs(row.Std3 - parseFloat(this.state.search23)) < 0.99);
                }
                if (this.state.search23 !== "" && this.state.searchT23 == 3) {
                    return (row.Std3 > parseFloat(this.state.search23));
                }
                if (this.state.search23 !== "" && this.state.searchT23 == 4) {
                    return (Math.abs(row.Std3 - parseFloat(this.state.search23)) > 0.99);
                }
                return row.Std3;
            }
        );
        filteredArr = filteredArr.filter(
            (row) => {

                // Search24 block
                if (this.state.search24 !== "" && this.state.searchT24 == 1) {
                    return (row.BearRank < parseFloat(this.state.search24));
                }
                if (this.state.search24 !== "" && this.state.searchT24 == 2) {
                    return (Math.abs(row.BearRank - parseFloat(this.state.search24)) < 0.99);
                }
                if (this.state.search24 !== "" && this.state.searchT24 == 3) {
                    return (row.BearRank > parseFloat(this.state.search24));
                }
                if (this.state.search24 !== "" && this.state.searchT24 == 4) {
                    return (Math.abs(row.BearRank - parseFloat(this.state.search24)) > 0.99);
                }
                return row.BearRank;
            }
        );
        filteredArr = filteredArr.filter(
            (row) => {

                // Search5 block
                if (this.state.search25 !== "" && this.state.searchT25 == 1) {
                    return (row.DIVYield < parseFloat(this.state.search25));
                }
                if (this.state.search25 !== "" && this.state.searchT25 == 2) {
                    return (Math.abs(row.DIVYield - parseFloat(this.state.search25)) < 0.99);
                }
                if (this.state.search25 !== "" && this.state.searchT25 == 3) {
                    return (row.DIVYield > parseFloat(this.state.search25));
                }
                if (this.state.search25 !== "" && this.state.searchT25 == 4) {
                    return (Math.abs(row.DIVYield - parseFloat(this.state.search25)) > 0.99);
                }
                return row.DIVYield;
            }
        );
        filteredArr = filteredArr.filter(
            (row) => {
                // Search26 block
                if (this.state.search26 !== "" && this.state.searchT26 == 1) {
                    return (row.OperatingMargin < parseFloat(this.state.search26));
                }
                if (this.state.search26 !== "" && this.state.searchT26 == 2) {
                    return (Math.abs(row.OperatingMargin - parseFloat(this.state.search26)) < 0.99);
                }
                if (this.state.search26 !== "" && this.state.searchT26 == 3) {
                    return (row.OperatingMargin > parseFloat(this.state.search26));
                }
                if (this.state.search26 !== "" && this.state.searchT26 == 4) {
                    return (Math.abs(row.OperatingMargin - parseFloat(this.state.search26)) > 0.99);
                }
                return row.OperatingMargin;
            }
        );
        filteredArr = filteredArr.filter(
            (row) => {
                // Search27 block
                if (this.state.search27 !== "" && this.state.searchT27 == 1) {
                    return (row.ShapeRatio < parseFloat(this.state.search27));
                }
                if (this.state.search27 !== "" && this.state.searchT27 == 2) {
                    return (Math.abs(row.ShapeRatio - parseFloat(this.state.search27)) < 0.99);
                }
                if (this.state.search27 !== "" && this.state.searchT27 == 3) {
                    return (row.ShapeRatio > parseFloat(this.state.search27));
                }
                if (this.state.search27 !== "" && this.state.searchT27 == 4) {
                    return (Math.abs(row.ShapeRatio - parseFloat(this.state.search27)) > 0.99);
                }

                return row.ShapeRatio;
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
                                <option value="1">below</option>
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
                            <select name="Combo2" size="1" id="Combo2" onMouseUp={this.updateSearchT2}
                                style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                                <option value="1">below</option>
                                <option value="2">equals</option>
                                <option value="3">above</option>
                                <option value="4">not equal</option>
                            </select>
                            <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                            <input type="text" id="Value2" value={this.state.search2} onChange={this.updateSearch2}
                                style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value" />
                        </div>
                        <div id="Row3" align="left">
                            <span style={{ width: "120px", color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>PEG </span>
                            <select name="Combo3" size="1" id="Combo3" onMouseUp={this.updateSearchT3}
                                style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                                <option value="1">below</option>
                                <option value="2">equals</option>
                                <option value="3">above</option>
                                <option value="4">not equal</option>
                            </select>
                            <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                            <input type="text" id="Value3" value={this.state.search3} onChange={this.updateSearch3}
                                style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value" />
                        </div>
                        <div id="Row4" align="left">
                            <span style={{ width: "120px", color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>ROE </span>
                            <select name="Combo4" size="1" id="Combo4" onMouseUp={this.updateSearchT4}
                                style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                                <option value="1">below</option>
                                <option value="2">equals</option>
                                <option value="3">above</option>
                                <option value="4">not equal</option>
                            </select>
                            <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                            <input type="text" id="Value4" value={this.state.search4} onChange={this.updateSearch4}
                                style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value" />
                        </div>
                        <div id="Row5" align="left">
                            <span style={{ width: "120px", color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Current Ratio </span>
                            <select name="Combo5" size="1" id="Combo5" onMouseUp={this.updateSearchT5}
                                style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                                <option value="1">below</option>
                                <option value="2">equals</option>
                                <option value="3">above</option>
                                <option value="4">not equal</option>
                            </select>
                            <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                            <input type="text" id="Value5" value={this.state.search5} onChange={this.updateSearch5}
                                style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value" />
                        </div>
                        <div id="Row6" align="left">
                            <span style={{ width: "120px", color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Gross Margin </span>
                            <select name="Combo6" size="1" id="Combo6" onMouseUp={this.updateSearchT6}
                                style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                                <option value="1">below</option>
                                <option value="2">equals</option>
                                <option value="3">above</option>
                                <option value="4">not equal</option>
                            </select>
                            <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                            <input type="text" id="Value6" value={this.state.search6} onChange={this.updateSearch6}
                                style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value" />
                        </div>
                        <div id="Row7" align="left">
                            <span style={{ width: "120px", color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Reven. Gr. 3Yr </span>
                            <select name="Combo7" size="1" id="Combo7" onMouseUp={this.updateSearchT7}
                                style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                                <option value="1">below</option>
                                <option value="2">equals</option>
                                <option value="3">above</option>
                                <option value="4">not equal</option>
                            </select>
                            <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                            <input type="text" id="Value7" value={this.state.search7} onChange={this.updateSearch7}
                                style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value" />
                        </div>
                    </div>
                    <div id="Col2"
                        style={{ float: "left", borderLeft: "3PX double", padding: "10px", width: "30%", height: "160px", textalign: "left" }}>
                        <div id="Row21" align="left">
                            <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> Price </span>
                            <select name="Combo21" size="1" id="Combo21" onMouseUp={this.updateSearchT21}
                                style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                                <option value="1">below</option>
                                <option value="2">equals</option>
                                <option value="3">above</option>
                                <option value="4">not equal</option>
                            </select>
                            <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                            <input type="text" id="Value21" value={this.state.search21} onChange={this.updateSearch21}
                                style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value" />
                        </div>
                        <div id="Row2" align="left">
                            <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}># of funds </span>
                            <select name="Combo22" size="1" id="Combo22" onMouseUp={this.updateSearchT22}
                                style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                                <option value="1">below</option>
                                <option value="2">equals</option>
                                <option value="3">above</option>
                                <option value="4">not equal</option>
                            </select>
                            <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                            <input type="text" id="Value22" value={this.state.search22} onChange={this.updateSearch22}
                                style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value" />
                        </div>
                        <div id="Row3" align="left">
                            <span style={{ width: "120px", color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Sid 3 Yr </span>
                            <select name="Combo23" size="1" id="Combo23" onMouseUp={this.updateSearchT23}
                                style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                                <option value="1">below</option>
                                <option value="2">equals</option>
                                <option value="3">above</option>
                                <option value="4">not equal</option>
                            </select>
                            <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                            <input type="text" id="Value23" value={this.state.search23} onChange={this.updateSearch23}
                                style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value" />
                        </div>
                        <div id="Row4" align="left">
                            <span style={{ width: "120px", color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Bear Rank </span>
                            <select name="Combo24" size="1" id="Combo24" onMouseUp={this.updateSearchT24}
                                style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                                <option value="1">below</option>
                                <option value="2">equals</option>
                                <option value="3">above</option>
                                <option value="4">not equal</option>
                            </select>
                            <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                            <input type="text" id="Value24" value={this.state.search24} onChange={this.updateSearch24}
                                style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value" />
                        </div>
                        <div id="Row5" align="left">
                            <span style={{ width: "120px", color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Div Yield </span>
                            <select name="Combo25" size="1" id="Combo25" onMouseUp={this.updateSearchT25}
                                style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                                <option value="1">below</option>
                                <option value="2">equals</option>
                                <option value="3">above</option>
                                <option value="4">not equal</option>
                            </select>
                            <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                            <input type="text" id="Value25" value={this.state.search25} onChange={this.updateSearch25}
                                style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value" />
                        </div>
                        <div id="Row6" align="left">
                            <span style={{ width: "120px", color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Operating M </span>
                            <select name="Combo26" size="1" id="Combo26" onMouseUp={this.updateSearchT26}
                                style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                                <option value="1">below</option>
                                <option value="2">equals</option>
                                <option value="3">above</option>
                                <option value="4">not equal</option>
                            </select>
                            <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                            <input type="text" id="Value26" value={this.state.search26} onChange={this.updateSearch26}
                                style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value" />
                        </div>
                        <div id="Row7" align="left">
                            <span style={{ width: "120px", color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Shape Ratio </span>
                            <select name="Combo27" size="1" id="Combo27" onMouseUp={this.updateSearchT27}
                                style={{ left: "392px", top: "40px", width: "85px", height: "21px", zindex: "6" }}>
                                <option value="1">below</option>
                                <option value="2">equals</option>
                                <option value="3">above</option>
                                <option value="4">not equal</option>
                            </select>
                            <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}> value </span>
                            <input type="text" id="Value27" value={this.state.search27} onChange={this.updateSearch27}
                                style={{ left: "515px", top: "188px", width: "40px", height: "18px", lineheight: "18px", zindex: "13" }} name="value" />
                        </div>
                    </div>
                    <div id="Col3"
                        style={{ float: "left", padding: "10px", borderLeft: "3PX double", width: "30%", height: "160px", textalign: "left" }}>
                        <div id="Row2" align="left">
                            <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Score </span>
                            <select name="Combo32" size="1" id="Combo32" onMouseUp={this.updateSort2}
                                style={{ left: "694px", top: "10px", width: "85px", height: "21px", zindex: "5" }}>
                                <option value="1">any</option>
                                <option value="2">uptrend</option>
                                <option value="3">downtrend</option>
                            </select>
                        </div>
                        <div id="Row1" align="left">
                            <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Current Price </span>
                            <select name="Combo31" size="1" id="Combo31" onMouseUp={this.updateSort1}
                                style={{ left: "694px", top: "10px", width: "85px", height: "21px", zindex: "5" }}>
                                <option value="1" >any</option>
                                <option value="2" >uptrend</option>
                                <option value="3" >downtrend</option>
                            </select>
                        </div>
                        <div id="Row3" align="left">
                            <span style={{ color: "#000000", fontfamily: "Arial", fontsize: "13px" }}>Change % </span>
                            <select name="Combo33" size="1" id="Combo33" onMouseUp={this.updateSort3}
                                style={{ left: "694px", top: "10px", width: "85px", height: "21px", zindex: "5" }}>
                                <option value="1">any</option>
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