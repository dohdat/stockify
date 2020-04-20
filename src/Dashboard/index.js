import React from 'react';
import styled from 'styled-components'
import Page from '../Shared/Page';
import PriceGrid from './PriceGrid'
import StockSpotlight from './StockSpotlight';
import StockChart from './StockChart';

import Header from '../Dashboard/DashboardWrapper/Header';
import Stock from '../Dashboard/DashboardWrapper/Stock';
import Quote from '../Dashboard/DashboardWrapper/./Quote';
import Footer from '../Dashboard/DashboardWrapper/Footer';
import FutureGrowth from '../Dashboard/DashboardWrapper/FutureGrowth';
import Valuation from '../Dashboard/DashboardWrapper/Valuation';
import FinancialHealth from '../Dashboard/DashboardWrapper/FinancialHealth';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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