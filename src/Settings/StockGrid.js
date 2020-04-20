import React from 'react';
import styled from 'styled-components';
import {AppContext} from "../App/AppProvider";
import StockTile from "./StockTile";

export const StockGridSyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 15px;
    margin-top: 40px;
`
function getLowerSectionStocks(stockList, filteredStocks){
    return (filteredStocks && Object.keys(filteredStocks)) || Object.keys(stockList).slice(0, 50)
}
function getStocksToDisplay(stockList, topSection, favorites, filteredStocks){
    return topSection ? favorites : getLowerSectionStocks(stockList, filteredStocks);
}

export default function ({topSection}) {
    return (
    <AppContext.Consumer>
        {({stockList, favorites, filteredStocks}) =>(
            <StockGridSyled>
                {getStocksToDisplay(stockList, topSection, favorites, filteredStocks).map(stockKey =>
                    <StockTile key={stockKey} topSection={topSection} stockKey = {stockKey}/>
                )}
            </StockGridSyled>
        )}
    </AppContext.Consumer>
    )
}