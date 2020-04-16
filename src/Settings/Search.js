import React from 'react'
import styled from 'styled-components';
import { backgroundColor2, fontSize2 } from "../Shared/Styles";
import { AppContext } from "../App/AppProvider";
import _ from 'lodash';
import fuzzy from 'fuzzy';

const SearchGrid = styled.div`
    display: grid;
    grid-template-columns: 350px 1fr;
`

const SearchInput = styled.input`
    ${backgroundColor2}
    ${fontSize2}
    border: 1px solid;
    height: 25px;
    width: 200px;
    color: #1163c9;
    place-self: center left;
`

const handleFilter = _.debounce((inputValue, stockList, setFilteredStocks)=>{
    //Get all the stock id
    let stockTickers = Object.keys(stockList);
    //Get all the stock names, map id to
    let stockNames = stockTickers.map( id => stockList[id].Name);
    let allStringsToSearch = stockTickers.concat(stockNames);
    let fuzzyResults = fuzzy
        .filter(inputValue, allStringsToSearch, {})
        .map(result => result.string);
    let filteredStocks = _.pickBy(stockList, (result)=> {
        let stockName = result.Name;
        let stockTicker = result.Ticker
        return (_.includes(fuzzyResults, stockTicker)|| _.includes(fuzzyResults, stockName));
    });
    setFilteredStocks(filteredStocks);
}, 500);

function filterStocks(e, setFilterStocks, stockList){
    let inputValue = e.target.value;
    if(!inputValue){
        setFilterStocks(null);
    }
    handleFilter(inputValue,stockList, setFilterStocks);

}
export default function () {
    return (
        <AppContext.Consumer>
            {({ setFilteredStocks, stockList }) =>
                <SearchGrid>
                    <h3>Search all stocks</h3>
                    <SearchInput onKeyUp = {(e) => filterStocks(e, setFilteredStocks, stockList)}/>
                </SearchGrid>
            }
        </AppContext.Consumer>
    );
}
