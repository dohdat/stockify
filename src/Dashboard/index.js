import React from 'react';
import styled from 'styled-components'
import Page from '../Shared/Page';
import PriceGrid from './PriceGrid'
import StockSpotlight from './StockSpotlight';
import StockChart from './StockChart';


const ChartGrid = styled.div`
    display: grid;
    margin-top: 20px;
    margin-bottom: 20px;
    gird-gap: 15px;
    grid-template-columns: 1fr 3fr
`


export default function (){
    return (
    <Page name="dashboard">
        <PriceGrid />
        <ChartGrid>
            <StockSpotlight/>
            <StockChart />
        </ChartGrid>
        
    </Page>
    )
}