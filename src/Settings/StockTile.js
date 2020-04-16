import React from 'react';
import { AppContext } from "../App/AppProvider";
import { SelectableTile, DisabledTile, DeletableTile } from "../Shared/Tile";
import StockHeaderGrid from '../Settings/StockHeaderGrid';
import StockImage from '../Shared/StockImage';
import styled from 'styled-components'



function clickStockHandler(topSection, stockKey, addStock, removeStock){
    return topSection? () => {
        removeStock(stockKey)
    }: () => {
        addStock(stockKey)
    }
}

export default function ({ stockKey, topSection }) {

    return <AppContext.Consumer>
        {({ stockList, addStock, removeStock, isInFavorites}) => {
            let stock = stockList[stockKey];
            
            let TileClass = SelectableTile;
            if(topSection){
                TileClass = DeletableTile;
            }else if (isInFavorites(stockKey)){
                TileClass = DisabledTile;
            }
            return <TileClass 
                onClick={clickStockHandler(topSection, stockKey, addStock, removeStock)}
            >
                <StockHeaderGrid topSection={topSection}
                    name = {stock.Name}
                    ticker = {stock.Ticker}
                />
                <StockImage stock={stock}/>
            </TileClass>
        }}
    </AppContext.Consumer>
}